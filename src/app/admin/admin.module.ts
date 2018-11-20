import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AdminComponent }    from './admin.component';
import { EmployeeNewComponent }    from './employee-new/employee-new.component';
import { EmployeeListComponent }    from './employee-list/employee-list.component';
import { EmployeeDetailComponent }    from './employee-detail/employee-detail.component';
import { EmployeeListService }    from './employee-list/employee-list.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  declarations: [
  	AdminComponent,
    EmployeeNewComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  providers: [EmployeeListService],
  entryComponents: [AdminComponent]
})
export class AdminModule {}