import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { PrimengModule } from '../primeng.module';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './component/feed/feed.component';
import { UserManagementComponent } from './component/user-management/user-management.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent
  },
  {
    path: 'user-management',
    component: UserManagementComponent
  }
];

@NgModule({
  declarations: [
    StaffComponent,
    FeedComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    RouterModule.forChild(routes)
  ]
})
export class StaffModule { }
