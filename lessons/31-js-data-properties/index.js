const  favouriteMovie=prompt("Enter your three favourite movies separated by a comma");
let arr=favouriteMovie.split(', ');
console.log(arr);

const myreverseword=prompt(" enter a sentence that you would like to reversed");
let arrReverse=myreverseword.split('');
console.log(arrReverse);
console.log(arrReverse.reverse());

console.log(arrReverse.join(''));
alert("the revers string is:" + arrReverse.join('')) ;
