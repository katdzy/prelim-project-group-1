import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Employee } from './employee/employee';
import { About } from './about/about';
import { Services } from "./services/services";
import { Pagenotfound } from './404/404';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'employee', component: Employee },
    { path: 'about', component: About },
    { path: 'services', component: Services},
    { path: '**', component: Pagenotfound}
];
