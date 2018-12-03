

function calculate (myLocation, myLocation2, myLocation3) {
    var myName = "This is Stackup, at " + myLocation + "," + myLocation2;
    console.log(myName);
}

calculate("One North", "JTC Launchpad");

calculate("test", "test");

function getMyFullName(){
    var firstName = "Stackup";
    var lastName = "One North";
    var fullName = firstName + " " + lastName;
    return fullName;
}

var myFullName = getMyFullName();
console.log(myFullName);


function calculate (myHello, myHello2){
    var myTryHello = "Hello, " + myHello + " " + myHello2;
    console.log(myTryHello);
}
calculate("Michael", "Jordan");
calculate("Lionel", "Jordan");
calculate("Mauro", "Messi");

function greet (firstName, lastName, DOB){

    var DOB = 2018 - DOB;

    var greetings = "Hello, " + firstName + " " + lastName + "," + DOB;
    console.log(greetings);
}

greet("Michael", "Messi", "1973");

function testMe(){
    alert("Hi you hit the button");
}