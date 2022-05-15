import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordFormComponent } from './password-form/password-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ReUseableFormComponent } from './re-useable-form/re-useable-form.component';
import { CustomFormRoutingModule } from './custom-form-routing';



@NgModule({
  declarations: [
    PasswordFormComponent,
    ProfileFormComponent,
    ReUseableFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CustomFormRoutingModule
  ]
})
export class CustomFormModule { }
