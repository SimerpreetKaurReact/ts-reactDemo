var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployee = function () {
        console.log(this.employees.length);
    };
    return Department;
}());
var accounting = new Department("Accounting");
console.log(accounting.describe());
var accountsCopy = { describe: accounting.describe };
//console.log(accountsCopy.describe());
// now the above will gibe error
