var user= {
     username:"batman",
     pasword:"hunter2",
};

console.log(user.pasword);
console.log(user.username);


user.pasword="*******";

const uName=prompt("what is the username?");
const pWord=prompt("what is the password?");

//Show the message "Access Granted" if the users username is batman and the password is *******, else show "Access Denied"
if(uName==user.username &&pWord==user.pasword ){
     alert("Access Granted");
}

else {
     alert("Access Denied")
};



var userTwo={
     username: "wonderwoman",
     password: 123123,
     greet:function(){
           console.log("Hello, I am",userTwo.username);
     }
};
//Call the greet method on the second user object
userTwo.greet();


const NewName= prompt("what is the new username");
 function updateUsername(NewName){
      userTwo.username=NewName;
      console.log("new username is",userTwo.username);
}

//Call the update username method on the second user object to change the username
updateUsername(NewName);

//Call the greet method one more time
userTwo.greet();

