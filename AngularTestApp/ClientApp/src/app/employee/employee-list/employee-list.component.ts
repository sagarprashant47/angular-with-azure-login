import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  IsLoading: boolean;
  
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getEmpList();
  }

  public getEmpList(): void {
    this.http.get<Employee[]>('/api/Employees').subscribe(response => {
      this.employeeList = response;
    });

  }

}
