import { Routes } from '@angular/router';
import { DeclarativeComponent } from './declarative/declarative.component';

export const routes: Routes = [
  // ?  Lazy loading
  // {
  //   path: 'declarative',
  //   loadComponent: () =>
  //     import('./declarative/declarative.component').then(
  //       (c) => c.DeclarativeComponent
  //     ),
  // },
  {
    path: 'directives',
    loadComponent: () =>
      import('./directives/directives.component').then(
        (c) => c.DirectivesComponent
      ),
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./features/posts/posts.component').then((c) => c.PostsComponent),
  },
  {
    path: 'posts/:id',
    loadComponent: () =>
      import('./features/post-details/post-details.component').then(
        (c) => c.PostDetailsComponent
      ),
  },
  {
    path: 'rxjs',
    loadComponent: () =>
      import('./funwithrxjs/funwithrxjs.component').then(
        (c) => c.FunwithrxjsComponent
      ),
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./signals/signals.component').then((c) => c.SignalsComponent),
  },
  {
    path: 'greeting',
    loadComponent: () =>
      import('./greeting/greeting.component').then((c) => c.GreetingComponent),
  },
  {
    path: 'awesomefeature',
    loadComponent: () =>
      import('./my-awesome-feature/my-awesome-feature.component').then(
        (c) => c.MyAwesomeFeatureComponent
      ),
  },
  //   ! eager loading
  {
    path: 'declarative',
    component: DeclarativeComponent,
  },
  // {
  //   path: 'directives',
  //   component: DirectivesComponent,
  // },
  // {
  //   path: 'posts',
  //   component: PostsComponent,
  // },
  // {
  //   path: 'posts/:id',
  //   component: PostDetailsComponent,
  // },
  // {
  //   path: 'rxjs',
  //   component: FunwithrxjsComponent,
  // },
  // {
  //   path: 'signals',
  //   component: SignalsComponent,
  // },
  // {
  //   path: 'greeting',
  //   component: GreetingComponent,
  // },
];
