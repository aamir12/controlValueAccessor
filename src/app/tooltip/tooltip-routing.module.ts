import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TooltipInputComponent } from './tooltip-input/tooltip-input.component';



const routes: Routes = [
  {
    path:'',
    component:TooltipInputComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TooltipRoutingModule { }
