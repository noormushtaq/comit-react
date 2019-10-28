//show even numbers from 0 to 100
function evenNumber(){
for(let firstnumber=2;firstnumber<=100;firstnumber=firstnumber+2){
    console.log(firstnumber); }
}
evenNumber();


function showUser(name,age,phoneNum,streetnum,postalcode,married){
    document.write("Name",'---',name);
    document.write('<br/>');
    document.write("Age",'---',age);
    document.write('<br/>');
    document.write("Phone Number",'---',phoneNum);
    document.write('<br/>');
    document.write("Street number",'---',streetnum);
    document.write('<br/>');
    document.write("Postal code",'---',postalcode);
    document.write('<br/>');
    document.write("Married",'---',Boolean(married));
    document.write('<br/>');   
    }
showUser("Noor",55,1234556,33,11111,"yes");



//function will print even numbers between 0 and 100 
function evenNumbers(){
       for(let i=2;i<=100;i=i+2){
        document.write(i);
        document.write('<br/>');
     }  
}
//Call evenNumbers function 5 times
let evenN;
for(j=1;j<=5;j++){
  evenN=evenNumbers();
}

//calculate fibonacci
const number= prompt("how many times you want to calculate fibonacci?"); 
function fibonacci(number) {
    let x;
    var firstnumber = 0, secondnumber = 1
    console.log(firstnumber);
    console.log(secondnumber);
    for(var i = 2; i <= number; i++) {
        x = firstnumber + secondnumber;
        firstnumber = secondnumber;
        secondnumber = x;
        console.log(x);
    }
 };
fibonacci(number);

// show your name in specific shape
const name= prompt("what is your name?"); 

let showName = function myname(){
  console.log("============");
  console.log(`== ${name} ==`);
  console.log("============");

return(name);

}
showName();
showName();

