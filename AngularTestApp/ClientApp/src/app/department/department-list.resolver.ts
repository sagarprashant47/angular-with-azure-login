import { Resolve, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';
import { Department } from '../model/department.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DepartmentListResolver implements Resolve<Department[]> {

    constructor(private http: HttpClient) {
    }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Department[] | Observable<Department[]> | Promise<Department[]> {
         return this.http.get<Department[]>('/api/departments');
    }
}
