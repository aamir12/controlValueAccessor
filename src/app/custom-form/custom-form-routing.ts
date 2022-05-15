import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReUseableFormComponent } from './re-useable-form/re-useable-form.component';



const routes: Routes = [
  {
    path:'',
    component:ReUseableFormComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomFormRoutingModule { }
