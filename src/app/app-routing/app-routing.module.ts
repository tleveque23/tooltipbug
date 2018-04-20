import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { MyNewRouteComponent } from '../my-new-route/my-new-route.component';

const routes: Routes = [
  {
    path: 'my-new-route',
    component: MyNewRouteComponent,
  },
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
