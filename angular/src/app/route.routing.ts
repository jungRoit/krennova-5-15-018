import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register/register.component';
import {UserComponent} from './user/user.component';


const appRoutes: Routes = [
    {path:"", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"users", component:UserComponent}

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


