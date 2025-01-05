import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Trooper } from '@minitroopers/prisma';
import {
  ClientMode,
  MoveSystem,
  objectObfuscator,
  ReloadSystem,
  Serializer,
  TargetSystem,
  TargetType,
  TrooperConfig,
  TrooperSkill,
  TrooperType,
  UserExtended,
} from '@minitroopers/shared';
import { take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TrooperService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  upgradeTrooper(trooperId: string) {
    return this.http
      .post<UserExtended>(environment.apiUrl + '/api/trooper/upgrade', {
        trooperId: trooperId,
      })
      .pipe(
        tap((response) => {
          if (response?.troopers?.length) {
            this.authService.user = response;
          }
        }),
      );
  }

  updateConfigTrooper(trooperId: string, config: TrooperConfig) {
    return this.http
      .post<boolean>(environment.apiUrl + '/api/trooper/updateConfig', {
        trooperId: trooperId,
        config: config,
      })
      .pipe(take(1));
  }

  chooseSkill(trooperId: string, skillIndex: number) {
    return this.http
      .post<UserExtended>(environment.apiUrl + '/api/trooper/chooseSkill', {
        trooperId: trooperId,
        skillIndex: skillIndex,
      })
      .pipe(
        tap((response) => {
          if (response?.troopers?.length) {
            this.authService.user = response;
          }
        }),
      );
  }

  addTrooper(trooperId: string) {
    return this.http
      .post<UserExtended>(environment.apiUrl + '/api/trooper/add', {
        trooper: trooperId,
      })
      .pipe(
        tap((response) => {
          if (response?.troopers?.length) {
            this.authService.user = response;
          }
        }),
      );
  }

  renderTrooper(
    container: HTMLElement,
    seed: number,
    groupColor: number,
    name: string,
    choices: number[],
  ) {
    container.innerHTML = '';

    const ruffle = (window as any).RufflePlayer.newest();
    const player = ruffle.createPlayer();

    player.style.height = '71px';
    player.style.width = '72px';

    player.config = {
      allowScriptAccess: true,
      scale: 'noscale',
      wmode: 'transparent',
    };

    container.appendChild(player);

    player.load({
      url: '/assets/swf/client_fr_edit.swf',
      parameters: this.embededUrlTrooper(seed, groupColor, name, choices),
    });
  }

  renderArmy(
    container: HTMLElement,
    groupColor: number,
    troopers: Trooper[],
    col: number,
  ) {
    container.innerHTML = '';

    const ruffle = (window as any).RufflePlayer.newest();
    const player = ruffle.createPlayer();

    const ymax = Math.ceil((troopers.length + 1) / col);

    player.style.height = ymax * 72 + 'px'; // cutsom regarding troopers length
    player.style.width = 70 * col + 4 + 'px';

    player.config = {
      allowScriptAccess: true,
      scale: 'noscale',
      wmode: 'transparent',
    };

    container.appendChild(player);

    player.load({
      url: '/assets/swf/client_fr_edit.swf',
      parameters: this.embededUrlArmy(groupColor, troopers, ymax, col),
    });
  }

  getSkills(seed: number, choices: number[] = []): number[] {
    return new TrooperSkill(seed, choices).getSkills();
  }

  private embededUrlTrooper(
    seed: number,
    group: number,
    name: string,
    choices: number[] = [],
  ) {
    let buildChoices: string = '';
    if (choices.length > 0) {
      buildChoices = 'i' + choices.join('i');
    }

    return (
      'data=oy10%3A%253B%2501%250CZjy10%3AClientMode%3A2%3A2oy8%3A%25032%251A4y' +
      name.length +
      '%3A' +
      name +
      'y8%3AV%251BE%257Cny6%3A%250CA2ci' +
      seed +
      'y6%3AAn%25256jy11%3ATrooperType%3A0%3A0y8%3A%250Az%250Ava' +
      buildChoices +
      'hy5%3A7X%2501i1000y13%3A%257D%2526%2516Y%2501ahgi' +
      group +
      'y8%3A%2524PS%2501y55%3Ahttp%253A%252F%252Flocalhost%253A4200%252Fassets%252Fswf%252Fmini.swfg'
    );
  }

  private embededUrlArmy(
    group: number,
    troopers: Trooper[],
    ymax: number,
    col: number,
  ) {
    const isOpponent = col == 4;

    const data = {
      mode: ClientMode.BLOCKS({
        army: troopers.map((trooper, index) => ({
          name: trooper.name,
          seed: trooper.seed,
          type: TrooperType.HUMAN,
          id: index,
          choices: trooper.choices || [],
          force: [],
          pref: {
            __CBody: null,
            __CWeapon: null,
            leftOver: [],
            moveSystem: MoveSystem.STANDARD,
            reloadSystem: ReloadSystem.DEFAULT,
            targetSystem: TargetSystem.CLOSEST,
            tagerType: TargetType.DEFAULT,
          },
        })),
        action: isOpponent ? null : 'on',
        add: isOpponent ? false : true,
        fac: group,
        space: -1,
        xmax: col,
        ymax,
      }),
      gfx: `http://localhost:4200/assets/swf/mini.swf`,
    };

    // Obfuscate the data
    const obfuscatedData = objectObfuscator(data);

    // Serialize the data
    const serialized = Serializer.serialize(obfuscatedData);

    // URI encode the serialized data
    return 'data=' + encodeURIComponent(serialized);
  }
}
