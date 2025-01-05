import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { checkNameValide } from '@minitroopers/shared';
import { map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { BackendService } from '../services/backend.service';

export const armyExistGuard: CanActivateFn = (route, state) => {
  const backendService = inject(BackendService);
  const router = inject(Router);
  const authService = inject(AuthService);

  if (route.params['army']) {
    if (route.params['army'] == authService.user?.armyName) {
      return true;
    }

    if (!checkNameValide(route.params['army'])) {
      return router.parseUrl('/');
    }

    return backendService.checkArmyExist(route.params['army']).pipe(
      take(1),
      map((status) => {
        if (status) {
          return true;
        }
        return router.parseUrl('/');
      }),
    );
  } else {
    return router.parseUrl('/');
  }
};
