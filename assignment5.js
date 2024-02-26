// Write a function that will take two numbers and three callback functions as parameters. 
// Calculate the summation, subtraction, and multiplication of the numbers using callback functions. 
// Finally, display the results.


var calculator = {

    add: function(a,b){
    return a+b
    },
    
    subtract: function(a,b){
    
    return a-b
    },
    
    multiply: function(a,b){
    
    return a*b
    },
}
    var prompt = require("prompt-sync")(); 
    
    var num1 = Number(prompt("Enter the first number: "))
    var num2 = Number(prompt("Enter the second number: "))
    
    function processUserInput(num1, num2){
    
    
        var sum = calculator.add(num1, num2)
        var subtraction=calculator.subtract(num1, num2) 
        var multiplied=calculator.multiply(num1, num2)
    
    console.log("Sum is: ", sum, "\n", "Subtract is: ", subtraction, "\n", "Multiplicaiton is: ", multiplied)
    }
    processUserInput(num1, num2)




// Suppose you have an array containing a few numbers, 
// now use the “. map()” method of the array to square all the numbers of the array. 


var numList=[1,2,3,4]
function squareNum1(num){
return num**2;
}
var sqNum = numList.map(squareNum1)
console.log(sqNum)




// Write a function that takes only the name of the user as a parameter and displays a welcome message. 
// The default value of the user's name will be “guest”.


var prompt = require ("prompt-sync")();
function greet (name = "Guest"){

   console.log("Welcome", name)
}
greet ()




// Suppose we have an equation: Y = x^2 + 2x + 6. 
// Write a function that will take the value of x as a parameter and return the value of Y.


function eqn(x){
    var y=x**2 + 2*x + 6
    return y
    }
    console.log(eqn(1))
    