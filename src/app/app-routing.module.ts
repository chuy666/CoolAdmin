import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './404/nopagefound.component';
import { RegisterComponent } from './login/register.component';
/**
 * path: '' redirige al  PagesComponent  donde hay otro <router-outlet></router-outlet>
 * el que atendera las  rutas hijas.
 * el <router-outlet></router-outlet> que  se  encuentra en app atienede a las de mas  rutas
 *  es una forma de separa el login
 *
 */
const  routes: Routes = [
    {  path: 'login', component: LoginComponent},
    {  path: 'register', component: RegisterComponent},
    {  path: '**', component: NopagefoundComponent}
];

@NgModule({
  declarations: [],
  imports: [  RouterModule.forRoot(routes, { enableTracing: true }),
              CommonModule ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
