import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'custom-basic',
    loadChildren:()=>import('./custom/custom.module').then(m=>m.CustomModule)
  },
  {
    path:'reuseable-form',
    loadChildren:()=>import('./custom-form/custom-form.module').then(m=>m.CustomFormModule)
  },
  {
    path:'',
    redirectTo:'/custom-basic',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
