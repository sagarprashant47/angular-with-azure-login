import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../model/employee.model';


@Component({
  selector: 'app-department-child-detail',
  templateUrl: './department-child-detail.component.html',
  styleUrls: ['./department-child-detail.component.css']
})
export class DepartmentChildDetailComponent implements OnInit, AfterViewInit {




  @Input() employeesList: Employee[];

  @Output() strike: EventEmitter<boolean>;

  constructor() {
    this.strike = new EventEmitter<boolean>();
   }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    console.log(this.employeesList);
  }

  employeesStrike() {
    this.strike.emit(true);
  }

}
