let favoriteMovie=["SuperMan","Batman","WonderWoman","Flash"];
let parentsName=["Mushtaq","Sarah"];

//Combine two arrays 
var combinearray=favoriteMovie.concat(parentsName);
console.log(combinearray);

//Add my pet name
combinearray.push("coco");
console.log(combinearray);

//Reverse the order of the array.
combinearray.reverse();
console.log(combinearray);

//Access one of your parents' names using the square bracket notation.
console.log(combinearray[1]);

const updatName=prompt("what is your new name?");
combinearray[1]=updatName;
console.log("Update the name of one of your parents");
console.log(combinearray);

//Loop over the array and log each item to the console 
for(i=0;i<combinearray.length;i++){
    console.log(combinearray[i]);
};

for(let item of combinearray ){
    console.log(item);
}


//Recreate the array.map function
var arr=[1,2,3];
var newarr=arr.map(func);

function func(item){
    return item*2;
}
console.log(newarr);