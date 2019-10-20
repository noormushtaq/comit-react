
for(let index=0;index<1000;index++){
    document.write(index);
    document.write('<br/>');
    if(index==400){break;}
}// will add all the numbers bettwen 0 and 400 and the output will appear in the HTML page



let firstnum=0;
while(firstnum<=10){
    console.log(firstnum);
    firstnum++;
}//Show numbers from 0 to 10 the output will appear in JS console



let secondnum=100;
do{
    console.log(secondnum);
    secondnum--;
}while(secondnum!=-1);//Show numbers from 100 to 0 the output will appear in JS console




for(let thirdnum=2;thirdnum<=100;thirdnum=thirdnum+2){
    console.log(thirdnum);
}//Show even numbers between 0 and 100 the output will appear in JS console


var i, j;
//outer loop
for(i=1; i <= 13; i++)
 {
 //inner loop
  for(j=1; j<=i; j++)
 {
   document.write('*');
  }
   document.write('<br/>');
 }//draw * triangle shape and the output will appear in HTML page