import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Calendario } from '../component/calendario/calendario';


export const routes: Routes = [
    {path:'', component: Calendario},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { 

}