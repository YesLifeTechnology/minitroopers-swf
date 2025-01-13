import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { armyExistGuard } from './guards/army-exist.guard';
import { checkLoggedGuard } from './guards/check-logged.guard';
import { signupGuard } from './guards/signup.guard';
import { AddComponent } from './pages/add/add.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ArmyComponent } from './pages/army/army.component';
import { HqComponent } from './pages/hq/hq.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { OpponentsComponent } from './pages/opponents/opponents.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ViewFightComponent } from './pages/view-fight/view-fight.component';
import { ViewUpgradeComponent } from './pages/view-upgrade/view-upgrade.component';

// + guard connected & !hasArmy

const routes: Routes = [
  {
    path: '',
    canActivate: [signupGuard],
    component: SignupComponent,
  },
  { path: 'maintenance', component: MaintenanceComponent },
  {
    path: 'oauth/callback',
    canActivate: [signupGuard],
    component: SignupComponent,
  },
  {
    path: 'invite/:army',
    component: SignupComponent,
  },
  // { path: 'welcome', component: SignupComponent }, // gsap presentation later

  {
    path: 'war/:warId',
    component: ViewFightComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },

  { path: ':army', canActivate: [armyExistGuard], component: HqComponent },
  {
    path: ':army/army',
    canActivate: [armyExistGuard, checkLoggedGuard],
    component: ArmyComponent,
  },
  {
    path: ':army/add',
    canActivate: [armyExistGuard, checkLoggedGuard],
    component: AddComponent,
  },
  // {
  //   path: ':army/edit',
  //   canActivate: [armyExistGuard, checkLoggedGuard],
  //   component: ViewUpgradeComponent,
  // },
  {
    path: ':army/war',
    canActivate: [armyExistGuard, checkLoggedGuard],
    component: OpponentsComponent,
  },

  {
    path: ':army/:trooper',
    canActivate: [armyExistGuard], // + trooper exist guard
    component: ViewUpgradeComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
      onSameUrlNavigation: 'reload',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
