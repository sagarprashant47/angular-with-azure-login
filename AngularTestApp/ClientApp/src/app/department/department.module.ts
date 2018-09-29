import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddEditComponent } from './department-add-edit/department-add-edit.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EditDepartmentGuard } from './edit-department.guard';
import { SaveEditDepartmentGuard } from './save-edit-department.guard';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentListResolver } from './department-list.resolver';
import { DepartmentAppendPipe } from './department-append.pipe';
import { HighlightDirective } from './highlight.directive';
import { DepartmentChildDetailComponent } from './department-child-detail/department-child-detail.component';


const routes: Routes = [
  {
    path: 'department',
    component: DepartmentListComponent,
    resolve: {
      departmentList: DepartmentListResolver
    }
  },
    {
      path: 'department/add',
      component: DepartmentAddEditComponent
    },
    {
      path: 'department/edit/:id',
      component: DepartmentAddEditComponent,
      canActivate: [EditDepartmentGuard],
      canDeactivate: [SaveEditDepartmentGuard]
    },
    {
      path: 'department/details/:id',
      component: DepartmentDetailsComponent,
      canActivate: [EditDepartmentGuard]
    }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CoreModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  declarations: [
    DepartmentListComponent,
    DepartmentAddEditComponent,
    DepartmentDetailsComponent,
    DepartmentAppendPipe,
    HighlightDirective,
    DepartmentChildDetailComponent
  ],
  providers: [DepartmentListResolver]
})
export class DepartmentModule {}
