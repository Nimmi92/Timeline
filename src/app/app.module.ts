import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineModule } from './timeline/timeline.module';
import { AdminModule } from './admin/admin.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimelineModule,
    AdminModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
