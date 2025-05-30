import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//other component
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './accounts/help/help.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
