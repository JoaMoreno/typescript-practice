// Types
var myString = "Hello World";
myString = 22 + "";
var myNumber = 22;
var myBoll = true || false;
var myVar = "hello";
myVar = 22 || false;
// Strings
//document.write(myString);
//document.write(myNumber.toString())
// Arrays
var arrayAny = ["", "", ""];
arrayAny = [true, 2, "3", [], {}];
var arrayString = ["1", "2", "3"];
var arrayNumber = [1, 2, 3, 4];
var arrayBoolean = [true, false];
// Tuple
var strNumTuple;
strNumTuple = ["Hello", 12]; /** !![22, "Hello"] */
strNumTuple = ["World", 245];
/*
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
*/ 
