import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserExtended } from '@minitroopers/shared';
import { catchError, map, Observable, of, take, tap } from 'rxjs';
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
  private router = inject(Router);

  loginFromEternal() {
    this.http
      .get<{ url: string }>(environment.apiUrl + '/api/oauth/redirect')
      .pipe(take(1))
      .subscribe(({ url }) => {
        window.location.href = url;
      });
  }

  private clientIdDiscord = '1377711711615848518';
  private redirectUriDiscord = encodeURIComponent(
    'http://localhost:4200/confirm-discord',
  );

  loginFromDiscord() {
    const discordUrl = `https://discord.com/api/oauth2/authorize?client_id=${this.clientIdDiscord}&redirect_uri=${this.redirectUriDiscord}&response_type=code&scope=identify`;
    window.location.href = discordUrl;
  }

  signIn(): Promise<UserExtended | null> {
    return new Promise<UserExtended | null>((resolve) => {
      const userId = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      const expires = localStorage.getItem('expires');
      const method = localStorage.getItem('loginType');

      if (userId && token) {
        if (expires && Number(expires) > Date.now()) {
          let httpGet: Observable<UserExtended>;

          if (method == 'jwt') {
            httpGet = this.http.get<UserExtended>(
              environment.apiUrl + '/api/user/signin/jwt',
              {},
            );
          } else {
            httpGet = this.http.get<UserExtended>(
              environment.apiUrl + '/api/user/signin/eternal',
              {},
            );
          }

          httpGet
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
            .subscribe({
              next: (response) => {
                if (response?.name) {
                  this.notificationService.notify(
                    'success',
                    `Connected as ${response.name}`,
                  );
                  resolve(response);
                }
                resolve(null);
              },
              error: () => {
                this.clearLocalStorage();
                this.notificationService.notify(
                  'error',
                  'Connection failed. Please try again.',
                );
                resolve(null);
              },
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
            localStorage.setItem('loginType', 'eternal');
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

  getFromTokenDiscord(code: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('code', code);

    return this.http
      .get<UserExtended>(environment.apiUrl + '/api/oauth/discord', {
        params: queryParams,
      })
      .pipe(
        tap((response) => {
          if (response) {
            this.languageService.setLanguage(response.lang);
            localStorage.setItem('user', response.id);
            localStorage.setItem('loginType', 'jwt');
            localStorage.setItem('token', response.connexionToken);
            localStorage.setItem(
              'expires',
              Date.now() + 24 * 7 * 60 * 60 * 1000 + '',
            );
          }
        }),
        catchError(() => {
          this.notificationService.notify(
            'error',
            'Connection failed. Please try again.',
          );
          this.router.navigate(['/']);
          return of(null);
        }),
      );
  }

  disconnect() {
    this.clearLocalStorage();
    this.notificationService.notify('success', 'Disconnected');
  }

  private clearLocalStorage() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
    localStorage.removeItem('loginType');
  }
}
