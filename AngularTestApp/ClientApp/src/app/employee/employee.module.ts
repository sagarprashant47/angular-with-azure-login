import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { Routes, RouterModule } from '@angular/router';
import { EditEmployeeGuard } from './edit-employee.guard';
import { SaveEditEmployeeGuard } from './save-edit-employee.guard';
import { CoreModule } from '../core/core.module';
import { EmployeeGenderPipe } from './employee-gender.pipe';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
    path: 'employees', component: EmployeeListComponent,
  },
  {
    path: 'employees/add', component: EmployeeAddEditComponent
  }, {
    path: 'employees/edit/:id',
    component: EmployeeAddEditComponent,
    canActivate: [EditEmployeeGuard],
    canDeactivate: [SaveEditEmployeeGuard]
  }, {
    path: 'employees/detail/:id',
    component: EmployeeDetailsComponent,
    canActivateChild: [EditEmployeeGuard]
  }
 ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule, ReactiveFormsModule
  ],
  declarations: [EmployeeListComponent, EmployeeAddEditComponent, EmployeeDetailsComponent, EmployeeGenderPipe]
})
export class EmployeeModule { }
