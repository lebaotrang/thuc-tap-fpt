import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    //   },
    // ]
  }
];

@NgModule({
  declarations: [PortalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PortalModule { }
