import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Department } from '../../model/department.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-department-add-edit',
  templateUrl: './department-add-edit.component.html',
  styleUrls: ['./department-add-edit.component.css']
})
export class DepartmentAddEditComponent implements OnInit {
  departmentForm: FormGroup;
  isEdit: boolean;
  editDepartment: Department;
  labelText: string;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) {}

  ngOnInit() {
    this.isEdit = this.route.snapshot.paramMap.has('id');
    this.InitializeForm();
    if (this.isEdit) {
      this.labelText = 'Edit';
      const departmentId = +this.route.snapshot.paramMap.get('id');
      this.http.get<Department>(`/api/departments/${departmentId}`).subscribe(result => {
        this.editDepartment = result;
        this.InitializeFormWithExistingData(result);
      });
    } else {
      this.labelText = 'Create';
    }
  }

  private InitializeForm(): void {
    this.departmentForm = this.fb.group({
      Name: ['', [
        Validators.required
      ]]
    });
  }

  private InitializeFormWithExistingData(department: Department): void {
    this.departmentForm.patchValue({
      Name: department.name
    });
  }

  private SaveDepartment(name: string): void {
    this.http.post('/api/departments', {Name: name}).subscribe(response => {
      console.log(response);
      this.departmentForm.reset();
      this.router.navigate(['/department']);
    }, error => {
      console.log(error);
    });
  }

  private EditDepartment(department: Department): void {
    this.http.put('/api/departments/' + department.id, department).subscribe(response => {
      console.log(response);
      this.departmentForm.reset();
      this.router.navigate(['/department']);
    });
  }

  public Save(): void {
    if (this.isEdit) {
      this.editDepartment.name = this.departmentForm.value.Name;
      this.EditDepartment(this.editDepartment);
    } else {
      this.SaveDepartment(this.departmentForm.value.Name);
    }
  }
}
