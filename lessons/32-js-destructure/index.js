const favouriteFruits =prompt(" enter your top 5 favourite fruits (in order), separated by a comma?");
let arr = favouriteFruits.split(', ');
console.log(arr);

//Assign 3 variables for their first, second, and third favorite
var [first, second, third,,]=arr;

//Assign the rest of the fruits into a variable
var [,,,fourth,fifth]=arr;

console.log(first, second, third);
alert("your first 3 favorite fruits is:"+ first + second + third);
alert("rest of the fruits that you didnt make it in  the top "+ fourth + fifth);