/**
 * Angular router.
 *
 * Created by erwin on 17-03-11.
 */
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { ModuleWithProviders } from '@angular/core';
import { StoryComponent } from './components/story.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'story',
    component: StoryComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
