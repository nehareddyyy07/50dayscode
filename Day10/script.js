//nested-if
/*let age=prompt("Enter your age:");
age=Number(age);
console.log(typeof age);
let isStudent=false;
if(age<30){
    if(isStudent){
        console.log("Young Student");
    }
    else{
    console.log("Young non-student");
}
}
else{
    console.log("old");
}*/
//task 
/*let num=prompt("Enter your number");
num=Number(num);
let isEven=true;
if(num>0){
    if(num%2!=0){
        alert("it is odd and positive");
    }
    else{
        alert("it is even and positive");
    }
}
else if(num<0){
    if(num%2!=0){
        alert("it is odd and negative");
    }
    else{
        alert("it is even and negative");
    }
}
else{
    alert("it is zero and even");
}*/
//switch
/*let day=3;
switch(day){
    case 1:
        alert("Monday");
        break;
    case 2:
        alert("Tuesday");
        break;
    default:
        alert("Other day");
}*/
/*let username=prompt("Enter your name");
let age=Number(prompt(username +" ,Enter your age"));
switch(true)
{
    case age<=0 || Number.isNaN(age):
        alert("Invalid age");
        break;
    case age>=65:
        alert("Senior Citizen");
    case age>=18:
        alert("eligible to vote");
        break;
    case age>=13 && age<18:
        alert("Not eligible");
        break;
    default:
        alert("Check your input");
}*/
//for loop:print even numbers from 1 to 20
/*for(let i=1;i<21;i++)
    {
        if(i%2==0){
            console.log(""+i);
        }
}*/
//sum of num from 1 to 100
/*let sum=0;
for(let i=1;i<=100;i++){
    sum=sum+i;
}
    console.log(sum);*/
//multiplication table
/*let res=0;
let num=Number(prompt("Enter a number"));
for(let i=1;i<=10;i++){
    res=num*i;
    console.log(num+"x"+i+"="+res);
}*/
//for..of loop
/*const fruits=["apple","banana","cherry"];
for(const fruit of fruits){
    console.log(fruit);
}*/
//while loop
/*let res=0;
let num=Number(prompt("Enter a number"));
let i=1;
while(i<=10){
    res=num*i;
    console.log(+num+"x"+i+"="+res);
    i++;
}*/
//do while loop
let i=0;
do{
    console.log("value:"+i);
    i++;
}while(i<0);
