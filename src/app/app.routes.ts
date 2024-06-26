import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'clients',
    loadComponent: () => import('./pages/clients/clients.page').then( m => m.ClientsPage)
  },
  {
    path: 'client',
    loadComponent: () => import('./pages/client/client.page').then( m => m.ClientPage)
  },  {
    path: 'configs',
    loadComponent: () => import('./pages/configs/configs.page').then( m => m.ConfigsPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'cars',
    loadComponent: () => import('./pages/cars/cars.page').then( m => m.CarsPage)
  },
  {
    path: 'car',
    loadComponent: () => import('./pages/car/car.page').then( m => m.CarPage)
  }

];
