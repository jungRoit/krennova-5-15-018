import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register/register.component';
import {UserComponent} from './user/user.component';
import {CreateUserComponent} from './user/create-user/create-user.component';


const appRoutes: Routes = [
    {path:"", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"users", component:UserComponent},
    {path:"addUser",component:CreateUserComponent},

];

@NgModule({
    imports : [
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    exports : [
        RouterModule
    ]
})
export class AppRoutingModule {}


