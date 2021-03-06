import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShipSelectionResolverService } from './services/ship-selection-resolver/ship-selection-resolver.service';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TrajectoriesViewComponent } from './views/trajectories/view.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, resolve: { shipId: ShipSelectionResolverService } },
  // { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'trajectories', component: TrajectoriesViewComponent, resolve: { shipId: ShipSelectionResolverService } },
  // { path: 'trajectories/:id', component: TrajectoriesViewComponent },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
