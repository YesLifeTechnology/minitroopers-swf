import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserExtended } from '@minitroopers/shared';
import { map, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LanguageService } from './language.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private languageService = inject(LanguageService);
  private notificationService = inject(NotificationService);

  loginFromEternal() {
    this.http
      .get<{ url: string }>(environment.apiUrl + '/api/oauth/redirect')
      .pipe(take(1))
      .subscribe(({ url }) => {
        window.location.href = url;
      });
  }

  signIn(): Promise<UserExtended | null> {
    return new Promise<UserExtended | null>((resolve) => {
      const userId = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      const expires = localStorage.getItem('expires');

      if (userId && token) {
        if (expires && Number(expires) > Date.now()) {
          this.http
            .get<UserExtended>(environment.apiUrl + '/api/user/signin', {})
            .pipe(
              take(1),
              map((resp) => {
                if ((resp as any).status === 'error') {
                  this.clearLocalStorage();
                  resolve(null);
                }
                return resp;
              }),
            )
            .subscribe((response) => {
              this.notificationService.notify(
                'success',
                'Connected as ' + response.name,
              );
              resolve(response);
              // +catch
            });
        } else {
          this.clearLocalStorage();
          resolve(null);
        }
      } else {
        resolve(null);
      }
    });
  }

  getFromToken(code: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('code', code);

    return this.http
      .get<UserExtended>(environment.apiUrl + '/api/oauth/token', {
        params: queryParams,
      })
      .pipe(
        tap((response) => {
          if (response) {
            this.languageService.setLanguage(response.lang);
            localStorage.setItem('user', response.id);
            localStorage.setItem('token', response.connexionToken);
            localStorage.setItem(
              'expires',
              Date.now() + 24 * 7 * 60 * 60 * 1000 + '',
            );
            this.notificationService.notify(
              'success',
              'Connected as ' + response.name,
            );
          }
        }),
      );
  }

  disconnect() {
    this.clearLocalStorage();
    this.notificationService.notify('success', 'Disconnected');
  }

  private clearLocalStorage() {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
    }
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    if (localStorage.getItem('expires')) {
      localStorage.removeItem('expires');
    }
  }
}
