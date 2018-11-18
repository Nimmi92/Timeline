import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineModule } from './timeline/timeline.module';
import { TimelineComponent } from './timeline/timeline.component';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: TimelineComponent },
  	{ path: 'admin', pathMatch: 'full',component: AdminComponent },
  	{ path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
