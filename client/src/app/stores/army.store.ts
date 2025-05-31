import { computed, inject } from '@angular/core';
import { PartialUserExtended } from '@minitroopers/shared';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { distinctUntilChanged, filter, of, pipe, switchMap, tap } from 'rxjs';
import { GetArmyNamePipe } from '../pipes/getArmyName.pipe';
import { BackendService } from '../services/backend.service';
import { AuthStore } from './auth.store';

interface ArmyState {
  army: PartialUserExtended | null;
  displayedTitle: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: ArmyState = {
  displayedTitle: null,
  army: null,
  loading: false,
  error: null,
};

export const ArmyStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store, authStore = inject(AuthStore)) => ({
    currentArmyName: computed(() => store.army()?.armyName),
    notExist: computed(() => store.army === null && !store.loading),
    isOwner: computed(
      () =>
        authStore.user()?.armyName != null &&
        store.army()?.armyName === authStore.user()?.armyName,
    ),
  })),
  withMethods(
    (
      store,
      backendService = inject(BackendService),
      authStore = inject(AuthStore),
      getArmyNamePipe = inject(GetArmyNamePipe),
    ) => ({
      loadByRoute: rxMethod<string | null>(
        pipe(
          distinctUntilChanged(),
          filter((armyName) => armyName !== null),
          tap(() => patchState(store, { loading: true, error: null })),
          switchMap((armyName: string) => {
            if (armyName === authStore.user()?.armyName) {
              return of(
                patchState(store, {
                  army: authStore.user()!,
                  loading: false,
                  error: null,
                }),
              );
            } else {
              return backendService.getArmy(armyName, true).pipe(
                tapResponse({
                  next: (user) =>
                    patchState(store, {
                      army: user,
                      displayedTitle: getArmyNamePipe.transform(user),
                      loading: false,
                      error: null,
                    }),
                  error: (err) => {
                    patchState(store, {
                      loading: false,
                      error: 'get army failed',
                    });
                    console.error(err);
                  },
                }),
              );
            }
          }),
        ),
      ),

      setTitle(title: string) {
        if (title == 'reset') {
          return patchState(store, {
            displayedTitle: getArmyNamePipe.transform(
              store.army() ?? undefined,
            ),
          });
        } else {
          return patchState(store, {
            displayedTitle: title,
          });
        }
      },
    }),
  ),
);
