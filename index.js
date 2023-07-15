// var cash = 65;
// var shoes = 65;

// if (shoes <= cash) {
//     console.log("I have enough money to purchase the shoes")
// }
// if (shoes >= cash) {
//     console.log("We need more cash")
// }


// var isWorking = false;
// var carIsReady = true;

// if (isWorking) {
//     console.log("I can't go")
// }
// if (!isWorking) {
//     if (carIsReady) {
//         console.log("I can go")
//     }
//     if (!carIsReady) {
//         console.log("I can't come, my car is not ready yet")
//     }

// }

// var made = 100;
// var spent = 120;

// function dailyBattle() {
//     console.log("Today I made $" + made)
//     console.log("Today I spent $" + spent)
//     var totalMoney = made - spent

//     if (totalMoney >= 0) {
//         console.log("Total money for today $" + totalMoney)
//         console.log("I won today's battle.")
//     }
//     if (totalMoney < 0) {
//         totalMoney = totalMoney * -1
//         console.log("Total money for today -$" + totalMoney)
//         console.log("I failed today's battle.")
//     }

// }
// dailyBattle()


function becomeMember() {
    console.log("Welcome! You are a member now.")
}

// var randomNumb = (Math.random()) * 100;
// var rounded = Math.floor(randomNumb)
// console.log(rounded + "%")

//get a rounded number between 1 to 6
// var randomNumb = (Math.random()) * 6;
// var rounded = Math.floor(randomNumb)
// console.log(rounded + 1)

//get a rounded number between 1 to 6
// var randomNumb = (Math.random()) * 6;
// var rounded = Math.ceil(randomNumb)
// console.log(rounded)

// var randomNumb = (Math.random()) * 101;
// var rounded = Math.floor(randomNumb)
// console.log(rounded)
// if (rounded < 50) {
//     console.log("I failed the exam")
// }
// else if (rounded < 75) {
//     console.log("I passed the exam with an average mark")
// }
// else {
//     console.log("I passed the exam with a great mark")
// }

//function parameters arguments
// function dailyBattle(made, spent) {
//     console.log("Today I made $" + made)
//     console.log("Today I spent $" + spent)
//     var totalMoney = made - spent

//     if (totalMoney >= 0) {
//         console.log("Total money for today $" + totalMoney)
//         console.log("I won today's battle.")
//     }
//     if (totalMoney < 0) {
//         totalMoney = totalMoney * -1
//         console.log("Total money for today -$" + totalMoney)
//         console.log("I failed today's battle.")
//     }

// }
// dailyBattle(40, 30)

// Function Output
// function sum(n1, n2) {
//     console.log("This text will be visible")
//     return n1 + n2;
//     console.log("This text will not be visible")
// }

// function greeting(person) {
//     return "Hi " + person + ", welcome back!"
// }

//multiply function of a calculator
// var firstNumb = prompt("What is the first number?")
// var secondNumb = prompt("What is the second number?")

// function multiply(n1, n2) {
//     return n1 * n2;
// }

// alert(multiply(firstNumb, secondNumb))

//array
// var friends = ["Jim", "Luna", "Tom"]

// console.log(friends[0])
// console.log(friends.includes("puoya"))

//challenge

// var friends = ["Jim", "Luna", "Tom"]
// var userName = prompt("What is your name?")

// if (friends.includes(userName)) {
//     console.log("You can view the content.")
// }
// else {
//     console.log("You don't have access.")
// }

//updating array
// var friends = ["jim", "luna", "tom"]

//changing tom to jerry
// friends[2] = "jerry"

//adding to array
// friends.push("daniel")
// console.log(friends)

//remove niki (last in the list)
// friends.pop()

//remove jim (first in the list)
// friends.shift()

//practice pomodoro
// var breakTime = []
// var round = 1;

// function addBreakTime() {
//     if (round % 4 == 0) {
//         breakTime.push(15);
//     }
//     else {
//         breakTime.push(5)
//     }
//     round++;
//     console.log(breakTime)
// }

//while loop
// var breakTime = []
// var round = 1;
// function addBreakTime() {
//     if (round % 4 == 0) {
//         breakTime.push(15);
//     }
//     else {
//         breakTime.push(5)
//     }
//     round++;
// }
// var counter = 1;
// while (counter <= 12) {
//     addBreakTime()
//     counter++;
// }
// console.log(breakTime)

//for loop
// for (var i = 1; i <= 3; i++) {
//     console.log(i);
// }
// var breakTime = []
// var round = 1;

// function addBreakTime() {
//     if (round % 4 == 0) {
//         breakTime.push(15);
//     }
//     else {
//         breakTime.push(5)
//     }
//     round++;
// }
// for (var counter = 1; counter <= 12; counter++) {
//     addBreakTime()
// }
// console.log(breakTime)

//Practice Even Number (Create a function that prints all even numbers in any given list)

// function printEven(list) {
//     for (var i = 0; i < list.length; i++) {
//         if (list[i] % 2 == 0) {
//             console.log(list[i])
//         }
//     }
// }
// var myList = [13, 23, 12, 45, 22, 48, 66, 100, 78, 58, 32, 35]
// console.log(printEven(myList))

//Write a function to split a string and convert it into an array of words.
// function splitStringIntoArray(str) {
//     return str.split(" ");
// }
// var sentence = "Hello, how are you?";
// var wordsArray = splitStringIntoArray(sentence);
// console.log(wordsArray);

// var obj = document.getElementById("selected")
// console.log(obj)

//selecting html elements
// var obj = document.getElementsByTagName("a")[0]
//obj.style.backgroundColor = "red"

// var obj = document.getElementsByClassName("main-nav")
// obj[0].style.backgroundColor = "red"

// var obj = document.getElementsByClassName("main-nav")[0]
// obj.style.backgroundColor = "red"

// var obj = document.getElementById("selected")

// var obj = document.querySelector("a") //selects the first one
// var obj = document.querySelector("nav #selected") 

// var obj = document.querySelectorAll(".product-img")[1]

// document.getElementById("member-btn").style.boxShadow = "5px 10px 30px #70798C"

//hide main-nav upon clicking the button "become a member now"
// function hideNav() {
//     document.querySelector(".main-nav").style.display = "none"
// }

function showReview() {
    // document.querySelector(".review-con").style.opacity = "100"
    // document.querySelector(".product-img").style.filter = "brightness(0.4)"
    // document.querySelector(".review-con").classList.add("hover-review");
    // document.querySelector(".product-img").classList.add("hover-img");
    document.querySelector(".review-con").classList.toggle("hover-review");
    document.querySelector(".product-img").classList.toggle("hover-img");
}

function hideReview() {
    // document.querySelector(".review-con").style.opacity = "0%"
    // document.querySelector(".product-img").style.filter = "brightness(1)"
    // document.querySelector(".review-con").classList.remove("hover-review");
    // document.querySelector(".product-img").classList.remove("hover-img");
    document.querySelector(".review-con").classList.toggle("hover-review");
    document.querySelector(".product-img").classList.toggle("hover-img");

}

var productImg = document.querySelector(".product-img")
productImg.addEventListener("mouseover", showReview)
productImg.addEventListener("mouseout", showReview)


// function print() {
//     console.log("The video ended.")
// }

var video = document.querySelector("video")
// video.addEventListener("ended", print)
video.addEventListener("ended", function () { console.log("The video ended.") })


var sun = document.getElementById("sun-icon")
var moon = document.getElementById("moon-icon")
var body = document.getElementsByTagName("body")[0]
var introText = document.querySelector("#intro p")

function darkMode() {
    sun.style.display = "none"
    moon.style.display = "block"
    body.classList.toggle("body-dark")
    introText.style.color = "#EEEFF1"
}

function lightMode() {
    sun.style.display = "block"
    moon.style.display = "none"
    body.classList.toggle("body-dark")
    introText.style.color = "#3C404A"
}

// //back function
// function sum(n1, n2) {
//     console.log(n1 + n2);
// }

// function subtract(n1, n2) {
//     console.log(n1 - n2);
// }

// //higher order function
// function calculate(p1, p2, operator) {
//     operator(p1, p2)
// }

//switch
var distance = Number(prompt("How far do you live from our store?"))

switch (distance) {
    case 1:
        console.log("The cost of shipping is $0");
        break;
    case 2:
        console.log("The cost of shipping is $3");
        break;
    case 3:
        console.log("The cost of shipping is $6");
        break;
    default:
        console.log("The cost of shipping is $10");
        break;
}
