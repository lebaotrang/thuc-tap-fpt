import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'home'
    //   },
    //   {
    //     path: 'home',
    //     component: LoginComponent
    //   },
    // ]
  }
];


@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
