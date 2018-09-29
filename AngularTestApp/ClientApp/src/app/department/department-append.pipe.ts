import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departmentAppend'
})
export class DepartmentAppendPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return `${value} Department`;
  }

}
