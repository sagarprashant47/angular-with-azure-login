import { Component, OnInit } from '@angular/core';
import { Department } from '../../model/department.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departmentList: Department[];
  IsLoading: boolean;
  departments: Department[] = [{
    id: 1,
    name: 'HR',
    employees: [
        {
            id: 1,
            name: 'Chintan'
        }
    ]
},
{
    id: 2,
    name: 'IT',
    employees: [
        {
            id: 3,
            name: 'Aamir'
        }
    ]
}];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
     // this.departmentList = this.departments;
    this.route.data.subscribe((data: {departmentList: Department[]}) => {
      this.departmentList = data.departmentList;
    });
  }

  OnEmployeesStrike(value: boolean) {
    if (value) {
      console.log('Employees have gone on strike!!!');
    }
  }

}
