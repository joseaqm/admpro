import { Routes, RouterModule } from '@angular/router';

import { Component } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficComponent } from './pages/grafic/grafic.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    {path: '',
     component: PagesComponent,
    children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'grafics', component: GraficComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}

    ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotfoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true});
