import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserExtended } from '@minitroopers/shared';
import { map, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LanguageService } from './language.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: UserExtended | null = null;
  private authing_: boolean = false;

  get authing() {
    return this.authing_;
  }

  set authing(boolean: boolean) {
    this.authing_ = boolean;
  }

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

  isSignable(): boolean {
    const userId = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const expires = localStorage.getItem('expires');

    return (
      userId != null &&
      token != null &&
      expires != null &&
      Number(expires) > Date.now()
    );
  }

  signIn(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const userId = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      const expires = localStorage.getItem('expires');
      this.authing = true;

      if (userId && token) {
        if (expires && Number(expires) > Date.now()) {
          this.http
            .get<UserExtended>(environment.apiUrl + '/api/user/signin', {})
            .pipe(
              take(1),
              map((resp) => {
                if ((resp as any).status === 'error') {
                  this.clearLocalStorage();
                  this.authing = false;
                  resolve(false);
                }
                return resp;
              }),
            )
            .subscribe((response) => {
              this.user = response;
              this.authing = false;
              this.notificationService.notify(
                'success',
                'Connected as ' + this.user.name,
              );
              resolve(true);
              // +catch
            });
        } else {
          this.clearLocalStorage();
          this.authing = false;
          resolve(false);
        }
      } else {
        this.authing = false;
        resolve(false);
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
          this.languageService.setLanguage(response.lang);
          localStorage.setItem('user', response.id);
          localStorage.setItem('token', response.connexionToken);
          localStorage.setItem(
            'expires',
            Date.now() + 24 * 7 * 60 * 60 * 1000 + '',
          );
          this.authing = false;
          this.user = response;
          this.notificationService.notify(
            'success',
            'Connected as ' + this.user.name,
          );
        }),
      );
  }

  disconnect() {
    this.user = null;
    this.clearLocalStorage();
    this.notificationService.notify('success', 'Disconnected');
  }

  clearLocalStorage() {
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
