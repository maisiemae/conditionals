//prompt user to enter a number
var ele = document.body.querySelector(".box");
var eleAnswer = document.body.querySelector(".answer")
var someValue=20;
var result=0;

var someValue =Number(prompt("Enter an integer"));
if(!isNaN(someValue)){
    document.body.innerHTML="this value is an integer"
}else{
    document.body.innerHTML="this value is not an integer"
}

var anotherValue= 30;
var anotherValue= Number(prompt("enter an integer"))

if(!isNaN(anotherValue)){
    document.body.innerHTML="this value is an integer"
}else{
    document.body.innerHTML="this value is not an integer"
}

var operator=prompt("enter an operator");
if(operator==="+"){
   var result=num1+num2;
    ele.innerHTML=result;
}else if(operator==="-"){
   var result=num1-num2;
    ele.innerHTML=result;
}else if (operator==="*"){
    var result=num1*num2;
    ele.innerHTML=result;
}else if (operator==="/"){
   var result=num1/num2;
    ele.innerHTML=result;
}else{
document.body.innerHTML="you entered something incorrectly";
}

//prompt user to enter an operator. check to see if input is operator

//prompt user to enter second number

//do math

