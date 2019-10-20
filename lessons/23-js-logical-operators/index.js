alert("enter the current hour should between 0-23");
const currenthour= prompt("what is the current hour?");

if (currenthour<0||currenthour>23) {
    alert("the input is incorrect");
} 
else if (currenthour<8||currenthour>=18){
    alert("outside of office hours");
    } 
    else(currenthour>=8&&currenthour<18)
    {
    alert("we are open");    
        } 