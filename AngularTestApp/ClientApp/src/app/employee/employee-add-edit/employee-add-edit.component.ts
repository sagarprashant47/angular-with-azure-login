import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../../model/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PATTERN_VALIDATOR } from '@angular/forms/src/directives/validators';
import { Department } from '../../model/department.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css']
})
export class EmployeeAddEditComponent implements OnInit {
  employeeForm: FormGroup;
  isEdit: boolean;
  editEmployee: Employee;
  labelText: string;
  depList: Department[];
  constructor(private fb: FormBuilder,private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) {

  }
  
  ngOnInit() {
    this.isEdit = this.route.snapshot.paramMap.has('id');
    this.InitializeEmpForm();
    if (this.isEdit) {
      //update code here::

    }
    else {
      this.labelText = 'Create';
    }
  }

  private InitializeEmpForm(): void {
    this.getDepList();
    this.employeeForm = this.fb.group({
      Name: ['', [
        Validators.required
      ]],
      Gender: [''],
      Salary: ['', [
        Validators.required
      ]],
      DepartmentId: [null],
      ProfilePic:[null]
    }
    );
  }

  public OnEmpSave(): void {
    if (this.employeeForm.invalid) {
      return;
    }
    
    if (this.isEdit) {
      this.editEmployee.name = this.employeeForm.value.Name;
      //this.EditDepartment(this.editDepartment);
    } else {
      this.SaveEmployee(this.employeeForm.value);
    }

  }
  private SaveEmployee(employee: Employee): void {
    console.log(employee);
    this.http.post('/api/Employees',  employee ).subscribe(response => {
      console.log(response);
      this.employeeForm.reset();
      this.router.navigate(['/employees']);
    }, error => {
      console.log(error);
    });
  }

  get empName() {
    return this.employeeForm.get('Name');
  }

  get selectedGender() {
    return this.employeeForm.get('Gender');
  }
  get empSalary() {
    return this.employeeForm.get('Salary');
  }

  public getDepList(): void {
    this.http.get<Department[]>('/api/departments').subscribe(response => {
      this.depList = response;
    });

  }

  onFileChange(event) {
    const  reader  =  new  FileReader();
    if (event.target.files  &&  event.target.files.length) {
      const  [file]  =  event.target.files;
      reader.readAsDataURL(file);
      reader.onload  =  ()  =>  {
        this.employeeForm.patchValue({
          ProfilePic:  reader.result
        });
      };
    }
  }

}
