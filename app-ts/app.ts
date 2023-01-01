class Department {
  name: string;
  private employees: string[] = [];
  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployee() {
    console.log(this.employees.length);
  }
}
const accounting = new Department("Accounting");
accounting.describe();
// const accountsCopy = {
//   name: "Dummy",
//   describe: accounting.describe,
//   employees: ["Sam"],
// };
// accountsCopy.describe();
//console.log(accountsCopy.describe());
// now the above will gibe error
// private means is
// that employees is now a property,
// which is only accessible from inside the class,
// so from inside the creative object.
// So any method inside of the department class
// is able to still work with employees.
type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
  name: "mac",
  privileges: ["create-server"],
  startDate: new Date(),
};

// interface Admin {
//   name: string;
//   privileges: string[];
// }
// interface Employee {
//   name: string;
//   startDate: Date;
// }
// interface ElevatedEmployee extends Admin, Employee
