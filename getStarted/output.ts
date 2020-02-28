// Types
var myString: string = "Hello World";
myString = 22 + "";

var myNumber: number = 22;

var myBoll: boolean = true || false;

var myVar: any = "hello";
myVar = 22 || false;

// Strings

//document.write(myString);
//document.write(myNumber.toString())

// Arrays
var arrayAny: any[] = ["","",""];
arrayAny = [true,2,"3",[],{}];

var arrayString: string[] = ["1","2","3"];
var arrayNumber: number[] = [1,2,3,4];
var arrayBoolean: boolean[] = [true, false]

// Tuple
var strNumTuple: [string, number];
strNumTuple = ["Hello", 12]; /** !![22, "Hello"] */
strNumTuple = ["World", 245]


// void, undefined, null
let myVoid: void = undefined;
let myNull: null = null || undefined;
let myUndefinded: undefined = undefined;

//document.write(typeof(myVoid))

// Functions
function getSum(num1: number , num2: number): number{
    return num1 + num2;
    // getSum():number, return only type number
}

let mySum = function(
    num1: number | string,
    num2: number | string ):number {
    if(typeof(num1) === "string"){
        num1 = parseInt(num1);
    }
    if(typeof(num2) === "string"){
        num2 = parseInt(num2);
    }
    return num1 + num2;
}

function getName(
    firstName: string,
    lastName?: string):string{
    // lastName? optional
    if(lastName == undefined){
        return firstName;
    };
    return `${firstName} ${lastName}`;
}
document.write(getName("Joaquin"))

function myVoidFunction():void {
    // no retorna nada
    return;
}

// Interfaces
interface ITodo{
    tittle: string; text: string;
}

function showTodo(todo: ITodo) {
    console.log(`${todo.tittle} - ${todo.text}`)
}

let myTodo: ITodo = {
    tittle: "Task Todo",
    text: "Lorem Ipsun"
}

showTodo(myTodo);

// Clases

class User {
     name: string;
     email: string;
     age: number;

    constructor(
        name: string,
        email: string,
        age: number) {
        this.name = name
        this.email = email
        this.age = age
    }

    register() {
        console.log(`${this.name} is register`);
    }
    
    showMeAge(){
        return this.age;
    }

    public AgeInYears() {
        return this.age + " years"
    }

    payInvoice(){
        console.log(`${this.name} paide invoice`);
    }

}

var john = new User("John", "john@email.com", 24);

console.log(john.AgeInYears())

// Inheritance

class Member extends User {
    id: number;

    constructor(id: number, name, email, age) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice();
    }
}

let gordon = new Member(1, "Gordon","gordon@email.com",24);
gordon.payInvoice();