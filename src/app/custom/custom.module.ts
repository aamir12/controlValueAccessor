import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { BasicComponent } from './basic/basic.component';
import { LockinputComponent } from './lockinput/lockinput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    BasicComponent,
    LockinputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CustomRoutingModule,
    MaterialModule
  ]
})
export class CustomModule { }
