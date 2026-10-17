function welcome(){
    console.log("Welcome to javascript");
}
welcome();

function student(name,age,cgpa){
    console.log("Name:",name);
    console.log("Age:",age);
    console.log("CGPA:",cgpa)
}
student("harini",23,8.7);
student("vinyak",24,9.0);

function calculate(fee){
    return fee;
}
let result=calculate(4000);
console.log(result);

function discount(percent){
    let fee=200000;
    let discountAmount=fee*percent/100;
    let finalfee=fee-discountAmount;

    console.log("Original fee:",fee);
    console.log("discount amount:",discountAmount);
    console.log("Final Fee:",finalfee);
}
discount(10);

function studentForm(name,age,disability="no"){
    console.log("Name:",name);
    console.log("age:",age);
    console.log("Disability:",disability);
}
function printMessage(message){
    console.log(message);
}
printMessage("Welcome to javascript");

let person=function(name){
    console.log(name);
}
person("lila");

const printNumber=(num)=>{
    console.log(num);
}
printNumber(3);

function checkvariables(){
    if(true){
        var a=10;
        let b=20;
        const c=30;

        console.log(a);
        console.log(b);
        console.log(c);
    }
    console.log(a);
    //console.log(b)
    //console.log(c) both cannot be prited out side as they are block scope.

}
checkvariables();

console.log(value);
var value=10;

function first(callback){
    console.log("First function executed");
    callback();
}
function second(){
    console.log("second function executed");
}
first(second);

function add(callback,a,b){
    console.log("sum:",a+b);
    callback(a,b);
}
function displaynumbers(a,b){
    console.log("First number:",a);
    console.log("second number:",b);
}
add(displaynumbers,10,20);

let sub=(callback,num1,num2)=>{
    console.log(num1-num2);
    callback(num1,num2);
}
let adds=(num1,num2)=>{
    console.log(num1+num2);
}
sub(adds,12,5);

function multiply(callback,a,b){
    console.log(a*b);
    callback(a,b);
}
function displaynum(a,b){
    console.log("First no:",a);
    console.log("Second no:",b);
}
multiply(displaynum,3,4);

function display(callback,num1,num2){
    console.log("number 1:",num1);
    console.log("number 2:",num2);
    callback(num1,num2);
}
function divide(num1,num2){
    console.log(num1/num2);
}
display(divide,10,2);

function stu(callback){
    callback("mila");
}
function stuname(name){
    console.log("Student name:",name);
}
stu(stuname);

function*gen(){
    yield "10% cashback";
    yield "30% cashback";
    yield "better luck next time";
}
let newgen=gen();
console.log(newgen.next());
console.log(newgen.next());
console.log(newgen.next());
console.log(newgen.next());
if(newgen.next().done){
    console.log("the valued all done");
}

function*gen(){
    yield 10;
    yield 20;
    yield 30;
}
let results=gen();
console.log(results.next());
console.log(results.next());
console.log(results.next());
console.log(results.next()); 

function*discount(){
    yield "5% discount";
    yield "10% discount";
    yield "15% discount";
    yield "20% discount";
    yield "30% discount";
}
for(let value of discount()){
    console.log(value);
}

function*studentnamess(){
    yield "chaitra";
    yield "mannu";
    yield "maha";
}
for(let nam of studentnamess()){
    console.log(nam);
}

function*count(){
    yield "count1";
    yield "count2";
    yield "count3";
}
let newcount=count();
console.log(newcount.next());
console.log(newcount.next());
console.log(newcount.next());
console.log(newcount.next());

function add(a,b,c){
    console.log(a+b+c);
}
add(4,5,6);

function find(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        };
    };
}
find(10)(20)(30);

function functionName(a){
    return function(b){
        return function(c){
            console.log(a*b*c);
        };
    };
}
functionName(5)(10)(15);

function productprice(price){
    return function(discount){
        return function(quantity){
            let discountedprice=price-(price*discount/100);
            let totalprice=discountedprice*price;

            console.log("product price:",price);
            console.log("Discount:",discount);
            console.log("Quantity:",quantity);
            console.log("Total Discounted price: ₹" + totalprice);
        };
    };
}
productprice(1000)(10)(5);

// Normal three-parameter function
function add(a, b, c) {
    return a + b + c;
}

// Curried function
function addCurried(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log("Normal function:", add(10, 20, 30));
console.log("Curried function:", addCurried(10)(20)(30));

(function(product,discount){
    console.log(`The product ${product} is on sale with ${discount}% discount!`);
})("Shoes",20);

function returnnumber(num){
    return num;
}
let newnum=returnnumber(5);
console.log(newnum);

function studentmarks(mark){
    return mark;
}
let marks=studentmarks(100);
console.log(marks);

function studnetfees(fee=20000,callback){
         let discount=callback(fee);
         let finalfee=fee-discount;

         return finalfee;
}
function calculatediscount(fee){
    return fee*10/100;
}
let resultss=studnetfees(20000,calculatediscount);
console.log("The Final fee:",resultss);