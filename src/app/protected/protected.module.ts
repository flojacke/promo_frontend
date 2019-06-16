import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { MybookingsModule } from './mybookings/mybookings.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    MybookingsModule
  ]
})
export class ProtectedModule { }
