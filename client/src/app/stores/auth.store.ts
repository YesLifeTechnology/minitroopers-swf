import { computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserExtended } from '@minitroopers/shared';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { AuthService } from '../services/auth.service';

interface AuthState {
  user: UserExtended | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    isAuthenticated: computed(() => !!store.user()),
  })),
  withMethods(
    (store, authService = inject(AuthService), router = inject(Router)) => ({
      async login(redirect: boolean = false) {
        patchState(store, (state) => ({ loading: true, error: null }));
        try {
          const user = await authService.signIn();
          if (user) {
            patchState(store, (state) => ({ user: user, loading: false }));

            if (redirect && user.troopers?.length) {
              router.navigate(['/' + user.armyName]);
            }
          } else {
            patchState(store, (state) => ({
              error: 'Login failed',
              loading: false,
            }));
          }
        } catch (err) {
          patchState(store, (state) => ({
            error: 'Login failed',
            loading: false,
          }));
        }
      },
      setUser(user: UserExtended) {
        patchState(store, (state) => ({
          user: user,
          loading: false,
          error: null,
        }));
      },
      logout() {
        patchState(store, (state) => ({ ...initialState }));
        authService.disconnect();
      },
    }),
  ),
);
