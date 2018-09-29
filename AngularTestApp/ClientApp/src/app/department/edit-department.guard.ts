import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditDepartmentGuard implements CanActivate, CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('It works');
    const hasId = childRoute.paramMap.has('id');
    if (!hasId) {
      return false;
    }
    const id = +childRoute.paramMap.get('id');
    if (id < 1) {
      return false;
    }
    return true;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('It works');
    const hasId = next.paramMap.has('id');
    if (!hasId) {
      return false;
    }
    const id = +next.paramMap.get('id');
    if (id < 1) {
      return false;
    }
    return true;
  }
}
