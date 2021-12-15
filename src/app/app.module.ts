import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VmManagementComponent } from './components/vm-management/vm-management.component';
import { RouterModule, Routes } from '@angular/router';
import { ServersService } from './services/servers.service';
import { ClustersService } from './services/clusters.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vm-management', component: VmManagementComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    VmManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService, ClustersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
