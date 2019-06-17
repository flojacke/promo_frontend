import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { MybookingsModule } from './mybookings/mybookings.module';
import { ShopkeeperModule } from './shopkeeper/shopkeeper.module';
import { ProfilModule } from './profil/profil.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    MybookingsModule,
    ShopkeeperModule,
    ProfilModule
  ]
})
export class ProtectedModule { }
