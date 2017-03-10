/**
 * Angular router.
 *
 * Created by erwin on 17-03-11.
 */
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
