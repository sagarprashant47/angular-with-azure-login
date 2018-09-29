import { EmployeeGenderPipe } from './employee-gender.pipe';

describe('EmployeeGenderPipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeeGenderPipe();
    expect(pipe).toBeTruthy();
  });
});
