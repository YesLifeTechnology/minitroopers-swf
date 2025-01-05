import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TrooperDay } from '@minitroopers/prisma';
import {
  PartialUserExtended,
  UserExtended,
  statusAvailability,
} from '@minitroopers/shared';
import { Observable, catchError, map, of, tap, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private http = inject(HttpClient);

  isServerUp: boolean = false;

  checkServerUp() {
    return this.http.get<boolean>(environment.apiUrl + '/api/is-ready').pipe(
      // Timeout après 8 secondes
      timeout(8000),
      catchError(() => {
        return of(false);
      }),
      tap((res) => {
        this.isServerUp = res;
      }),
    );
  }

  checkAvailability(armyName: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('name', armyName);
    return this.http
      .get<{ status: statusAvailability }>(
        environment.apiUrl + '/api/util/checkNameAvailability',
        {
          params: queryParams,
        },
      )
      .pipe(map((res: { status: statusAvailability }) => res.status));
  }

  checkArmyExist(armyName: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('name', armyName);
    return this.http
      .get<{ status: boolean }>(
        environment.apiUrl + '/api/util/checkArmyExist',
        {
          params: queryParams,
        },
      )
      .pipe(map((res: { status: boolean }) => res.status));
  }

  getTodayTroopers(): Observable<TrooperDay[]> {
    return this.http.get<TrooperDay[]>(
      environment.apiUrl + '/api/util/getTodayTroopers',
      {},
    );
  }

  createUser(formgroup: {
    army: string;
    prefix: number;
    color: number;
    trooper: string;
    userId: string;
  }): Observable<UserExtended> {
    return this.http.post<UserExtended>(
      environment.apiUrl + '/api/user/create',
      {
        ...formgroup,
      },
    );
  }

  getArmy(army: string, full: boolean = false) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('army', army);
    queryParams = queryParams.append('full', full);

    return this.http.get<PartialUserExtended>(
      environment.apiUrl + '/api/user/get',
      {
        params: queryParams,
      },
    );
  }
}
