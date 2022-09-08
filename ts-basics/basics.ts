// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;
let userName: string | string[];
//union type ie username can be a string or an array of strings
userName = "MAx";
let isInstructor: boolean;
isInstructor = true;
//complex types
let hobbies: string[];
hobbies = ["sports", "cooking"];

//type aliases
type Person = {
  name: string;
  age: number;
};
let person: Person;
person = { name: "Msx", age: 22 };

let people: Person[];

//Type inference
let course: string | number = "Tyscript demo";
course = 125;
let user = "someone";
//in above type is infered as string you dont need set it explicitly here, if giving an initial value
//functions &types
function add(a: number, b: number) {
  return a + b;
}
function print(value: any) {
  console.log(value);
}
//in the print funciton return type is infered void

///generics
function insertAtTheBeginning<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtTheBeginning(demoArray, -1);
const stringArray = insertAtTheBeginning(["A"], "d");
