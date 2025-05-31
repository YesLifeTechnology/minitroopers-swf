import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../stores/auth.store';

export const signupGuard: CanActivateFn = (route, state) => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  if (authStore.isAuthenticated() && authStore.user()?.armyName) {
    return router.parseUrl(`/${authStore.user()!.armyName}`);
  } else {
    return true;
  }
};
