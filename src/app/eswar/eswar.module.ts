import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Eswar1Component } from '../eswar1/eswar1.component';
import { Eswar2Component } from '../eswar2/eswar2.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [Eswar1Component, Eswar2Component],
  imports: [
    CommonModule,SharedModule,
    RouterModule.forChild([
      {path:"eswar1",component:Eswar1Component},
      {path:"eswar2",component:Eswar2Component}
    ])
  ]
})
export class EswarModule { }
