import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DepartmentAddEditComponent } from './department-add-edit/department-add-edit.component';

@Injectable({
  providedIn: 'root'
})
export class SaveEditDepartmentGuard implements CanDeactivate<DepartmentAddEditComponent> {
  canDeactivate(component: DepartmentAddEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (component.departmentForm.dirty) {
      const answer = confirm('Are you sure you want to discard data?');
      return answer;
    }
    return true;
  }
}
