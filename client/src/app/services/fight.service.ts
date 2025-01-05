import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  FightDetail,
  PartialUserExtended,
  UserExtended,
} from '@minitroopers/shared';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FightService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  getOpponents() {
    return this.http
      .get<{
        opponents: PartialUserExtended[];
      }>(environment.apiUrl + '/api/fight/getOpponents')
      .pipe(
        map((response) =>
          response?.opponents?.length ? response.opponents : [],
        ),
      );
  }

  createFight(opponentName: string) {
    return this.http
      .post<{ user: UserExtended; fightId: string }>(
        environment.apiUrl + '/api/fight/createFight',
        {
          opponentName: opponentName,
        },
      )
      .pipe(
        tap((response) => {
          if (response?.user) {
            this.authService.user = response?.user;
          }
        }),
      );
  }

  getFightDetails(fightId: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('fightId', fightId);

    return this.http.get<FightDetail>(
      environment.apiUrl + '/api/fight/getFight',
      {
        params: queryParams,
      },
    );
  }

  renderFight(container: HTMLElement, data: string) {
    container.innerHTML = '';

    const ruffle = (window as any).RufflePlayer.newest();
    const player = ruffle.createPlayer();

    player.style.height = '440px';
    player.style.width = '720px';

    player.config = {
      allowScriptAccess: true,
      scale: 'noscale',
      wmode: 'transparent',
    };

    container.appendChild(player);

    player.load({
      url: '/assets/swf/client_fr_edit.swf',
      parameters: data,
    });
  }
}
