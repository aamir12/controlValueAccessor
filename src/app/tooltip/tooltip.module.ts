import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
import { TooltipInputComponent } from './tooltip-input/tooltip-input.component';
import { TooltipRoutingModule } from './tooltip-routing.module';




@NgModule({
  declarations: [
    TooltipDirective,
    TooltipInputComponent,
  ],
  imports: [
    CommonModule,
    TooltipRoutingModule
  ]
})
export class TooltipModule { }
