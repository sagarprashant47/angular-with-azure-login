import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeGender'
})
export class EmployeeGenderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
