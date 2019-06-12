import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule,
    LoginModule,
    RegisterModule
  ]
})
export class PublicModule { }
