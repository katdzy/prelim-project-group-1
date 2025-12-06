// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Employee } from './employee/employee';
import { Services } from './services/services';

const routes: Routes = [
  { path: '', component: Home},
  { path: 'about', component: About},
  { path: 'employee', component: Employee },
  { path: 'services', component: Services }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
