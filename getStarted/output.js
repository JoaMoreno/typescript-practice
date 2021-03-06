var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// void, undefined, null
var myVoid = undefined;
var myNull = null || undefined;
var myUndefinded = undefined;
//document.write(typeof(myVoid))
// Functions
function getSum(num1, num2) {
    return num1 + num2;
    // getSum():number, return only type number
}
var mySum = function (num1, num2) {
    if (typeof (num1) === "string") {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstName, lastName) {
    // lastName? optional
    if (lastName == undefined) {
        return firstName;
    }
    ;
    return firstName + " " + lastName;
}
document.write(getName("Joaquin"));
function myVoidFunction() {
    // no retorna nada
    return;
}
function showTodo(todo) {
    console.log(todo.tittle + " - " + todo.text);
}
var myTodo = {
    tittle: "Task Todo",
    text: "Lorem Ipsun"
};
showTodo(myTodo);
// Clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is register");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return this.age + " years";
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var john = new User("John", "john@email.com", 24);
console.log(john.AgeInYears());
// Inheritance
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var gordon = new Member(1, "Gordon", "gordon@email.com", 24);
gordon.payInvoice();
