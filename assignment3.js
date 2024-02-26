// Write a code that takes two numbers, the first and last numbers of a series, as input from the user. The program should then calculate and display the sum of all the numbers in that series. For example:

// If the user inputs 3 and 8, the program should calculate and print the sum: 3 + 4 + 5 + 6 + 7 + 8.

// If the user inputs 1 and 10, the program should calculate and print the sum: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10.

var prompt = require('prompt-sync')();
var number = Number(prompt("Enter 1st number of the series: "))
var number2 = Number(prompt("Enter last number of the series: "))
var sum=0;
for (;number<=number2; number=number+1){
    sum= sum+number
    console.log(number)
    console.log("Now the sum is ", sum)
}
console.log("The sum of the series is: ", sum)


// Write a code to calculate and display the sum of all even numbers between 1 and 500.

var i=2
var sum=0
for (; i<=500; i=i+2){
    sum=sum+i
    console.log(i);
    console.log("Now the sum is", sum);}
    console.log("The sum of all even number from 1 to 500 is: ", sum)


// Write a code to calculate and display the sum of all odd numbers between 1 and 500.

var i=1
var sum=0
for (; i<=500; i=i+2){
    sum=sum+i
    console.log(i);
    console.log("Now the sum is", sum);}
    console.log("The sum of all odd number from 1 to 500 is: ", sum)


// Suppose we have a series: 3+8+13+........  

// - Find the 100th term of this series. The code will display the value of the 100th term of this series. You can use the formula: nth_term = a + (n-1) d 

// - Display the sum of the series up to the 100th term. 

var i=3
var d=5
var n=100
var nth_term = i+(n-1)*d
console.log("100th term of this series is: ", nth_term)
var sum=0
for (; i<=nth_term; i=i+5){
    sum = sum+i
    console.log(i)
}
console.log("The sum of the series is: ", sum)