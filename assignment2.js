// Write code: Suppose you have a login system where you can log in by using only any of three names.

// 1) Determine three names inside your code.'
// 2) Write a code that takes the user input.
// 3) If the user provided name doesn’t match with none of your predetermined names it will display “Sorry! We don’t find you in the system.” 
// Otherwise, it will display “Welcome! “.


var prompt = require('prompt-sync')();
var name = prompt ("Enter your name: ")

if (name == "Tasnim"){
    console.log("Welcome!")
}

else if (name == "Rahman"){
    console.log("Welcome!")
}

else if (name == "Tiru"){
    console.log("Welcome!")
}

else{
    console.log("Sorry! We don’t find you in the system.")
}



// Write a code that prompts the user to enter a year. 
// The code should display a message indicating whether the year is a leap year or not.


var prompt = require('prompt-sync')();
var year = prompt ("Enter your year: ")

if (remainder = year % 4 == 0){
   console.log("It's a leap year")
 }
 else{
     console.log("Sorry! This is not a leap year")
 }



//  Create a simple shopping cart program. The program should:

// 1) Prompt the user to enter the price of three items one by one.

// 2) Apply a discount based on the total cost:

// 3) If the total cost is greater than 50 TK, apply a 10% discount. If the total cost is greater than 100, apply a 20% discount. Use the formula: discountedCost = totalCost - (totalCost * discount)

// 4) Display the final cost after applying the discount.


var prompt = require('prompt-sync')();
var a = prompt ("Enter the price of first item: ")
var b = prompt ("Enter the price of second item: ")
var c = prompt ("Enter the price of third item: ")
var sum = Number(a)+Number(b)+Number(c)
console.log ("Total cost is: ", sum)

if (sum > 100){
var discountedCost = sum - (sum * 0.2)
console.log("Your discounted price is: ", discountedCost)
}
else if (sum > 50){
    var discountedCost = sum - (sum * 0.1)
    console.log("Your discounted price is: ", discountedCost)
    }



    // Write a code that calculates the final grade for a student based on their scores in different subjects. The program should:

    // 1) Prompt the user to enter the scores for three subjects: Math, English, and Science.
    
    // 2) Calculate the average score using the formula: average = (mathScore + englishScore + scienceScore) / 3.
    
    // 3) Display the final average score.
    
    // 4) Use conditional statements to determine and display the corresponding letter grade based on the following grading scale:
    
    // A:  > 60 
    
    // F: <60

    
    var prompt = require('prompt-sync')();
var a = prompt ("Enter your score in Math: ")
var b = prompt ("Enter your score in English: ")
var c = prompt ("Enter your score in Science: ")
var average = (Number(a) + Number(b) + Number(c)) / 3
console.log("Your average score is: ", average)

if (average>= 60){
    console.log("Your secured grade is: A")
}
else if (average<60){
    console.log("Your secured grade is: F")
}