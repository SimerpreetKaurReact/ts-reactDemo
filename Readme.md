- start with app-ts for typescipt basics

- js uses dynamic types resolved at runtime while typescript uses static types set during development
- In TypeScript, you work with types like string or number all the times.
  Important: It is string and number (etc.), NOT String, Number etc.The core primitive types in TypeScript are all lowercase!
- ts infers variable types with the way it is initialized
  eg: const number1=1 number1:1
  eg: let number1=1 number1:number
  eg: let number1 number1:any
- tuples: fixed length and type array eg:
  let role:[number,string]= [2,'author']
  I want to have a special array, with exactly two elements, because I have exactly two types in there and
  the first element should be a number, the second element should be a string
- enums:automatically enumerated global constant identifiers
  enum{NEW,OLD}
  eg: enum Role {ADMIN,READ_ONLY, AUTHOR}
- union types: input2: number|string
- literal types:
  let direction:"left"|"right"= "right"
- type aliases/custome types: Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.
  type User = { name: string; age: number };
  const u1: User = { name: 'Max', age: 30 }; // this works!
  This allows you to avoid unnecessary repetition and manage types centrally.
- You should use void as return type if a function returns nothing, and not undefined, because with void you make clear that this function deliberately does not have a return statement.If you would say undefined here, then TypeScript would expect that you havea return statement where you just don't return a value.
- Function types are types that describe a function regarding the parameters and the return value
  of that function. A function type is created with this arrow function notation you know from JavaScript
  or at least close to that notation.
  eg: let combine:(a:number,b:number)=>number
- a function with a callback-callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.
  function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: 'Hi there!'});
  }

  sendRequest('Send this!', (response) => {
  console.log(response);
  return true;
  });

- unknown type:
  let userInput:unknown
  let userName:string

  userInput=5
  userInput="Max"
  userName=userInput
  since the type is unknownt this will give error since, username is supposed to be string while userinput is unknown
  Unknown is a bit more restrictive than any. With unknown, we have to first of all check the type that's currently stored in userInput before we can assign it to, for example, a variable that wants a string.
  So, since a string is wanted here,
  we could check if type of userInput is equal to string, if it is gauranteed to be a string only then it will stored in username, while with type any, this will be allowed

- never- never return anything, eg: a function that always throws errors

starter: tsc init followed by tsc - it will compile all ts files in the directory

- add 'exclude" in tsconfig file : to excllude any file from the compilation process eg:nodemodules
- add include: add everything you want to compile
- sourcemap: generates .map file, which helps you open ts file in source code after inspect where you can add breakpoints to easily debug ts code
- outDir :"/dist" -> now all compiled js files will end up in this dist folder
- noEmitOnError: even if the ts file has a compile type error, the file still will be compiled
- strict: true: sets all strict option
- const add=(a:number,b:number=1)=>a+b
- const add:(a:number,b:number=1)=>number=(a,b)=>a+b

classes in typescript- see eg in app ts

- adding private means is that employees is now a property,which is only accessible from inside the class,
  so from inside the object. So any method inside of the speciifc class is able to still work with employees.
  -shorthand initialization in classes:
- protected: accessible from classes inheriting the class
  constructor(private readonly id:string,public name: string){

}

- readonly properties: new keyword for read only properties, extra type safety at initialization

- Intersection Types: interface inheritence

eg:
type Admin={
name:string
privileges:string[]
}
type Employee={
name:string
startDate:Date
}
type ElevatedEmployee=Admin & Employee
const e1: ElevatedEmployee={
name:"mac",
privileges:['create-server'],
startDate:new Date()
}
similarly we can do the same with interface inheritance
interface Admin {
name: string;
privileges: string[];
}
interface Employee {
name: string;
startDate: Date;
}
interface ElevatedEmployee extends Admin, Employee

# So the intersection operator can be used with any types and it then simply builds the intersection of these types.
