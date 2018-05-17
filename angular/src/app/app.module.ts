import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';



import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './route.routing';
import { RegisterComponent } from './login/register/register.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AddInfoComponent } from './user/user-profile/add-info/add-info.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    CreateUserComponent,
    UserProfileComponent,
    AddInfoComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
