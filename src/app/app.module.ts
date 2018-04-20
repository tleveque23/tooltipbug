import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MyNewRouteComponent } from './my-new-route/my-new-route.component';
import { TooltipModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MyNewRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
