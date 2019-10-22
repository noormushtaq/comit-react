
let weekdayNumber= prompt("Enter the number of week between 1 to 7"); 

let message;
switch(Number(weekdayNumber)){
    case 1:
        //console.log("Today is Monday");
        message="Today is Monday";
        break;
     case 2:
        //console.log("Today is Tuesday");
        message="Today is Tuesday";
        break;
     case 3:
         //console.log("Today is Wednesday");
         message="Today is Wednesday";
         break;   
     case 4:
         //console.log("Today is Thursday");
         message="Today is Thursday";
         break;   
     case 5:
         //console.log("Today is Friday");
         message="Today is Friday";
         break;
     case 6:
         //console.log("Today is Saturday");
         message="Today is Saturday";
         break;
     case 7:
         //console.log("Today is Sunday");
         message="Today is Sunday";
         break;
     default:
         console.log( "Error: Number not between 1-7");
        break;
};
console.log(message);