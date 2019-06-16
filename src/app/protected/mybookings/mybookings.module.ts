import { NgModule } from '@angular/core';
import { MybookingsComponent } from './mybookings.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MybookingsComponent],
  imports: [
    SharedModule
  ]
})
export class MybookingsModule { }
