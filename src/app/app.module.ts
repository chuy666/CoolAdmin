import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/**
 *  Rutas
 */
import { AppRoutingModule } from './app-routing.module';
/**
 *  Modeles
 */
import { PagesModuleModule} from './pages/pages-module.module';

/**
 * components
 */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { from } from 'rxjs';
/**
 * PagesModuleModule
 * AppRoutingModule,
 * promero va el AppRoutingModule para el correcto ruteo si se pone de forma indversa
 * no hay un correcto ruteo
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModuleModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
