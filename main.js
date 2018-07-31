// Problem 1
var x = 9,
    y = 27;
var sum = x + y;
    console.log (sum);
    
var saying1 = ("Hello "),
    saying2 = ("World");
var sum = saying1 + " " + saying2;
    console.log (sum);


// Problem 2

var info = ["soccer", "football", "hockey"];
    console.log (info [1]);
    console.log (info [0]);


// Problem 3 & Problem 4

var num = prompt ();
    if(num<100){
        alert ("variable is less than 100!");
    } else { 
        alert (num + " " + "variable is greater than 100!");}


// Problem 5

var word = "coding"
if (word == "coding"){
    alert ("the word is the same!")
} else { 
    alert ("the is not the same!")
}

// Problem 6

function name(yourName){
    return alert(yourName)
}

name("Bazooka Joe")

// Problem 7

function noArgument(){
    console.log("no argument to be had!")
}

noArgument()

// Problem 8

function virtualDoor(door){
    if (door === 4){
        return alert (door + " " + "is your door." + "You're the champ!")
    } else if (door === 5){
        return alert (door + " " + "is your door." + "You're the loser!")
    } else if (door === 6){
        return alert (door + " " + "is your door." + "You won a new car!")
    } else if (door === 7){
        return alert (door + " " + "is your door." + "So many virtual doors!")
    }
}

virtualDoor (6)