import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllAllocationsComponent } from './all-allocations/all-allocations.component';
import { AddAllocationComponent } from './add-allocation/add-allocation.component';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ManageProjectComponent } from './manage-project/manage-project.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NarvbarComponent } from './narvbar/narvbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AllAllocationsComponent,
    AddAllocationComponent,
    ManageItemComponent,
    NewItemComponent,
    ManageProjectComponent,
    ManageUsersComponent,
    NewUserComponent,
    NarvbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
