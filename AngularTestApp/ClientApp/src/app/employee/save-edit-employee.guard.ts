import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';

@Injectable({
  providedIn: 'root'
})
export class SaveEditEmployeeGuard implements CanDeactivate<EmployeeAddEditComponent> {
  canDeactivate(component: EmployeeAddEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }
}
