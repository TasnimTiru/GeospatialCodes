// We have a matrix:

// [ [1, 2, 3],

//   [4, 5, 6],

//   [7, 8, 9] ]

// Write a code that will increase the value of each element in this matrix by 1.  
// Display both the original and increased matrix. 



// By using a loop, write a code that takes 5 numbers from the user. 
// Display both the sorted and unsorted versions of the numbers.


var prompt = require('prompt-sync')();
ar = []
console.log(ar)
for (var i=0; i<5; i++){
    var a= Number(prompt("Enter a number:"))
    ar.push(a)
}
console.log(ar)
var sorted = ar.sort()
console.log("Sorted numbers are:", sorted)



// mat = [

//     [2, 7, 89, 6],
  
//     [90, 45,3, 7],
  
//     [78, 56, 4, 2]
  
//   ]
  
//   Write a code that stores the elements of the above 2D array in a 1D array. 
//   Display the final 1D array.


var twoDAr = [[2,7,89,6],
              [90,45,3,7],
              [78,56,4,2]
]
for (var i=0; i<twoDAr.length; i++){
    for (var j=0; j<4; j++){
        console.log(twoDAr[i][j])
    }
}



// Write a code that takes input for five numbers from the user using a loop. 
// Check whether each number is even or odd and store the result (even/odd) in an array. 
// Finally, display the array outside of the loop. 


var prompt = require('prompt-sync')();
ar = []
console.log(ar)
for (var i=0; i<5; i++){
    var userInput= Number(prompt("Enter a number:"))
    if (remainder = userInput % 2 ==0  ){
        console.log("Its an even number")
    }
    else{
        console.log("Its an odd number")
    }
    ar.push(userInput)

}
console.log(ar)