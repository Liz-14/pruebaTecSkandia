import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

/**Array que almacena las rutas del proyecto */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/objective',
    pathMatch: 'full'
  },
  /**Lazyloading component */
  {
    path: 'objective',
    loadComponent: () => import('./app/ui/pages/objective/objective.component').then(mod => mod.ObjectiveComponent)
  }
]

bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserModule),
      provideRouter(routes),
      provideHttpClient()
    ]
})
  .catch(err => console.error(err));
