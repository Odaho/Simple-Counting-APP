/* //////////////// NOTES ////////////////////

----------BASICS--------
Code: 
document.getElementById("count-el").innerText = 11;
Description: Gets the HTML element of ID() and changes its inner text to 11.

Code: 
let count = 0
Description: it assigns variable count to 0, It can be read as let count be 0.

Code: console.log(count)
Description: It displays the results of count to the browser console.

Code: 
console.log(count)
Description: It displays the results of count to the browser console.

**Challenge 1:**
1. Create a variable, myAge and set its value to your age.
2. Log the myAage variable to the console.

Solution:
let myAage = 23
console.log(myAage)

Code: 
let count = 5-7
Description: It does the math for us, it can be +,/, - or *.

**Challenge 2:**
1. Create a variable, myAge and humanDogRatio.
2. Multiply the two and store the results in myDogAge.
3. Log myDogAge to the console.

solution:
let myAge = 23
let humanDogRatio = 25

let myDogAge = myAge * humanDogRatio
console.log(myDogAge)

Code: 
let count = 5
count = count + 1
console.log(count)
Description: This code will increase the count by 1 and logs it to the console.

**Challenge 3:**
1. Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
2. Decrease it down to 25, and then finally increase it to 70

solution:
let bonusPoints = 50
bonusPoints = bonusPoints + 50
console.log(bonusPoints)
bonusPoints = bonusPoints - 25
console.log(bonusPoints)
bonusPoints = bonusPoints + 45
console.log(bonusPoints)

**Challenge 4:**
1. Create a function (you decide the name) that logs out the number 42 to the console.
2. Call/invoke the function.

Solution:

function myFunc(){
  console.log(42)
}
myFunc()

**Challenge 5:**
let lap1 = 34
let lap2 = 33
let lap3 = 36
1. Create a function (you decide the name) that logs out the sum of all the lap times.

Solution:
function lapTimes(){
  console.log(lap1 + lap2 + lap3)
}
lapTimes()

**Challenge 6:**
let lapsCompleted = 0

1. Create a function that increments the lapsCompleted variable with one.
2. Run it three times.

Solution:
let lapsCompleted = 0

function lapTime(){
  lapsCompleted = lapsCompleted + 1
}
lapTime()
lapTime()
lapTime()
console.log(lapsCompleted)

----------STRINGS--------

**Challenge 7:**
1. Create a variable, message, that stores the string:"You have three new notifications"
2. log the username string and the message string combined.

Solution:
let username ="Your Name"
let message = "You have three new notifications"
console.log(username + ", " + message + "!")

**Challenge 8:**
1. Create a variable, messageToUser, that stores the message loged previusly.

Solution:
let messageToUser = username + ", " + message + "!"
console.log(messageToUser)

**Challenge 9:**
1. Create two variables, names and greeting. The name variable should store your name, and the greeting should store e.g. "Hi, my name is ".
2. Create a third variable, myGreeting, that contatenates the two strings.
3. Log myGreeting to the console.

Solution:
let names = "Your Name"
let greetings = "Hi, my name is "

let myGreeting =  name + greetings

console.log(myGreeting)

**Challenge 10:**
1.Create a paragraph with id welcome-el and store it in a variable called welcomeEl.

2.Create two variables (name & greeting) that contains your name
and the greeting we want to render on the page.

3.Render the welcome message using welcomeEl.innerText.

Solution:

let welcomeEl = document.getElementById("welcome-el")
let name = "Your Name"
let greeting = "Hi, my name is"
welcomeEl.innerText = greeting + name

TIP: To add an emoji at the end of the code we would use:
welcomeEl.innerText = welcomeEl.innerText + 👋 
or welcomeEl.innerText += 👋 

////////// APP CODE FROM HERE...///////// */


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


function increment(){
  count += 1
  countEl.textContent = count
}

function save(){
  let countStr  = " " + count + " -"
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}
