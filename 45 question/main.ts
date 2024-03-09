// https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md

// 1- Install Node.js, TypeScript and VS Code on your computer.

// =====================================================================================================================

// 2- Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let Eric: string = "“Hello Eric, would you like to learn some Python today?”";
console.log(Eric);

// =====================================================================================================================

// 3- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name1 = "Eric";
console.log("UpperCase:", name1.toUpperCase());
console.log("Lower Case:", name1.toLowerCase());
// console.log("Title Case", name1.title());

// =====================================================================================================================

// 4- Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

let author = "Allama Iqbal";
let quote =
  "“Khudi ko kar buland itna ke har taqder se pehle Khuda bande se khud pooche bata teri raza kya hai.”";

console.log(`${author} , ${quote}`);

// =====================================================================================================================

// 5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person = "Allama Iqbal";
let famous_quote =
  "“Khudi ko kar buland itna ke har taqder se pehle Khuda bande se khud pooche bata teri raza kya hai.”";

console.log(`${famous_person},${famous_quote}`);

// =====================================================================================================================

// 6-Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let Fname: String = "Abdul";
let Lname: String = "Rehman";
let sirName: String = "Rashid";
let fullName: String = Fname + " " + Lname + " " + sirName;

// Print the name with whitespace
console.log("Name with white space \n");
console.log("\t ", fullName);

// Strip whitespace and print the name
let fullName1: String = fullName.trim();

// Print the strip name.
console.log("\nStripped Name");
console.log(fullName1);

// =====================================================================================================================

// 7- Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// ADDITION.
let num1: number = 4;
let num2: number = 4;

console.log(num1 + num2);

// SUBTRACTION:
let num3: number = 12;
let num4: number = 4;

console.log(num3 - num4);

// MULTIPLICATION.
let num5: number = 2;
let num6: number = 4;
console.log(num5 * num6);

// DIVISION.
let num7: number = 64;
let num8: number = 8;
console.log(num7 / num8);

// =====================================================================================================================

// 8- You should create four lines that look like this:

console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(64 / 8);

// =====================================================================================================================

// 9- Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favNum: number = 19;
console.log("This is my Favorite Number", favNum);

// =====================================================================================================================

// 10-Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Author : AbdulRehman
// Date : 10/1/2024

// This program takes two numbers as input and performs basic arithmetic operations, including addition, subtraction, multiplication, and division. It functions like a simple calculator, allowing users to input two values and obtain the corresponding results for each operation.

let val1: number = 123;
let val2: number = 123;
// add
console.log(val1 + val2);
// sub
console.log(val1 - val2);
// mult
console.log(val1 * val2);
// div
console.log(val1 / val2);

// Author : AbdulRehman
// Date : 10/1/2024

// The given program will tell us the length of the provided sentence.
let str: string = "My name is AbduLRehman.";
console.log(str.length);

// =====================================================================================================================

// 11- Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names: string[] = ["Osaid", "Moiz", "Hasan", "Huzaifa", "Hassan"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

// =====================================================================================================================

// 12- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let namess: string[] = ["Osaid", "Moiz", "Hasan", "Huzaifa", "Hassan"];
for (let i of namess) {
  console.log("He is my friend from 10 years ago.", i);
}

// =====================================================================================================================

// 13- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favTransport: string[] = [
  "Civic 2023",
  "supra mk4",
  "KAWASAKI ZX-10R NINJA",
];
for (let i of favTransport) {
  console.log(
    "These are my favorite bike and car; I will buy them in the future.",
    i
  );
}
// 14- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest: string[] = ["Osaid", "Moiz", "Hassan"];

for (let i of guest) {
  console.log(`Dear ${i}, you are invited to the dinner.`, i);
}

// =====================================================================================================================

// 15- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you
// need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program
// stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the
// new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

// Initial guest list
let guestList: string[] = ["Osaid", "Moiz", "Hassan"];

// Print initial invitations
for (let i of guestList) {
  console.log(`Dear ${i}, you are invited to the dinner.`, i);
}

// Identify the guest who can't make it
let guestCannotMakeIt: string = "Hassan";
console.log(
  `\n Unfortunately, ${guestCannotMakeIt} can't make it to the dinner.`
);

// Replace the guest who can't make it with a new person
let newGuest: string = "Zaqib";
let indexOfCannotMakeIt = guestList.indexOf(guestCannotMakeIt);
if (indexOfCannotMakeIt !== -1) {
  guestList[indexOfCannotMakeIt] = newGuest;
}

// Print updated invitations
console.log("\nUpdated Invitations:");
for (let guest of guestList) {
  console.log(`Dear ${guest}, you are invited to the dinner.`);
}

// =====================================================================================================================

// 16- More Guests: You just found a bigger dinner table, so now more space is available. Think
//   of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program
//   informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// create an Array.
let ListOfGuest: string[] = ["Osaid", "Moiz", "Hassan"];

// Add a new guest in the start using unshift.
ListOfGuest.unshift("Huzaifa");

// Calculate the center index
let centerIndex = Math.floor(ListOfGuest.length / 2);

// Add a new guest in the center using splice.
ListOfGuest.splice(centerIndex, 0, "Hasan");

// Add a new guest in the end using push.
ListOfGuest.push("Zaqib");

let newGuests = ListOfGuest;
for (let i of newGuests) {
  console.log(`Dear ${i}, you are invited to the dinner.`, i);
}

// =====================================================================================================================

// Print the updated invitations.
console.log("Updated, list of new guest", ListOfGuest);

// 17- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
//   for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying
//   that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each
//   time you pop a name from your list, print a message to that person letting them know you’re
//   sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re
//   still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make
//  sure you actually have an empty list at the end of your program.

let guestsList: String[] = [
  "Huzaifa",
  "Osaid",
  "Hasan",
  "Moiz",
  "Hassan",
  "Zaqib",
];
console.log("I can invite only two people for dinner");

//  Remove guests from your list
while (guestsList.length > 2) {
  let removeGuests = guestsList.pop();
  console.log(` sorry ${removeGuests} you can’t invite them to dinner.`);
}

// message to each of the two people
for (let i of guestsList) {
  console.log(`Dear ${i},You are still invited to the dinner`);
}

// Remove the last two names.
guestsList = [];
console.log("Final list of guests", guestsList);

// =====================================================================================================================

// 18- Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original
//   list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original
//   order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its
//   order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to
//   show that its order has changed.

// STEP 01:
let myFavPlace: String[] = [
  "Venice, Italy.",
  "Banff National Park",
  "Great Ocean Road, Australia.",
  "Pamukkale, Turkey",
  "Japan in Cherry Blossom Season",
];

// STEP 02:
console.log("Orignal Array", myFavPlace);

// STEP 03:
// Create a sorted copy of the array without modifying the original list
let sortPlaces = myFavPlace.slice().sort();
console.log("Alphabetical Order:", sortPlaces);

// STEP 04:
// Show that the array is still in its original order
console.log("Original Order (after sorting):", myFavPlace);

// STEP 05:
// Create a reversed copy of the array without modifying the original list
let reversedPlaces = myFavPlace.slice().reverse();
console.log("Reverse Alphabetical Order:", reversedPlaces);

// STEP 06:
// Show that the array is still in its original order
console.log("Original Order (after reversing):", myFavPlace);

//  step 07:
let reverseOrderList = myFavPlace.slice().reverse();
console.log("Order of the list (after reversing):", reverseOrderList);

// STEP 08:
let orignalArray = reverseOrderList.slice().reverse();
console.log(
  "Order of the original list (after reversing again):",
  orignalArray
);

// STEP 09:
let arr = orignalArray.sort();
console.log(" it’s stored in alphabetical order (after sorting)", arr);

// STEP 10:
let arr2 = arr.slice().sort().reverse();
console.log("it’s stored in reverse alphabetical order (after sorting)", arr2);

// =====================================================================================================================

// 19- Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let inviteGusts: string[] = ["Osaid", "Moiz", "Hassan"];
console.log(` you are inviting ${inviteGusts} to dinner.`);

for (let guest of inviteGusts) {
  console.log(`Dear ${guest},
   you are invited to the dinner.`);
}

// =====================================================================================================================

// 20- Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Create an array with different type of items.
let items: String[] = [
  "Pakistan",
  "America",
  "England",
  "London",
  "Mount Everest",
  "Amazon River",
];

console.log("List of the item in array");

for (let list of items) {
  console.log(list);
}

// =====================================================================================================================

// 21- They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let object = [
  {
    type: "Person",
    name: "AbdulRehman",
    message: "Abdulrehman is very talented boy",
  },
  {
    type: "Country",
    name: "Pakistan",
    message: "The people of Pakistan are known for their hardworking nature.",
  },
  {
    type: "City",
    name: "Karachi",
    message: "Karachi is a biggest city of pakistan",
  },
];

console.log("\nList of item in array");

for (let obj of object) {
  console.log(`type: ${obj.type}, name: ${obj.name}, message: ${obj.message} `);
}

// =====================================================================================================================

// 22- Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// =====================================================================================================================

// 23- Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

let country: String = "Pakistan";

console.log("It country == pakistan? I pridict true ");
console.log(country == "Pakistan");

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// Test 01:
let Fnum: number = 15;
let Lnum: number = 25;

console.log("Fnum and lnum is 15+25 === 40? I predict true  ");
console.log(15 + 25 === 40);

// Test 02:
// let Fnum: number = 15;
// let Lnum: number = 25;
console.log("if Lnum is greater then Fnum? I predict true");
console.log(Fnum < Lnum);

// Test 03 & 04:
let greet: string = "hello";

console.log(
  "greet === hello but greet === world. greet === hello: in this case is true, greet === world: in this case is false "
);
console.log(greet === "hello"); // TRUE
console.log(greet === "world"); // FALSE

// Test 05 & 06:
let FirstName: string = "Abdul";
let LastName: string = "Rehman";

console.log(
  `FirstName === "Abdul" && LastName === "Rehman" :In this condition, I predict is true but FirstName === "Rehman" && LastName === "Abdul" in this condition I predict is false. `
);
console.log(FirstName === "Abdul" && LastName === "Rehman");
console.log(FirstName === "Rehman" && LastName === "Abdul");

// Test 07 & 08 & 09:
let value1: string = "Apple";
let value2: string = "mango";
let value3: string = "Banana";
let value4: string = "Apple";
console.log(`===============================================`);

console.log(value1 !== value2 && value3 !== value4); // true
console.log(
  (value1 === value4 && value1 !== value2) ||
    (value3 === value2 && value4 === value3)
); // true
console.log(
  value1 === value4 &&
    value1 !== value2 &&
    value3 === value2 &&
    value4 === value3
); // false

console.log(`===============================================`);

// Test 10:
let numm1: number = 15;
let numm2: number = 30;

console.log(numm2 / numm1 === 2);

// =====================================================================================================================

// 24- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
console.log(24);

let str1 = "Abdul";
let str2 = 12345;

// for str1
if (typeof str1 === "string") {
  console.log("Str1 is equal  to string");
} else {
  console.log("Str1 is not equal  to string");
}
console.log(typeof str1);

// for str2
if (typeof str2 !== "string") {
  console.log("str2 is not equal to string");
} else {
  console.log("str2 is equal to string");
}
console.log(typeof str2);

// • Tests using the lower case function
function lowerCase(inputstring: string) {
  if (typeof inputstring === "string") {
    return inputstring.toLowerCase();
  } else {
    return "Error: Input is not a string";
  }
}
let orignalString = "ABDULREHMAN";
let lowercaseString = lowerCase(orignalString);
console.log(lowercaseString); // abdulrehman

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1 = 25;
let number2 = 15;

if (number1 === number2) {
  console.log(`${number1} is equal to ${number2}`);
} else {
  console.log(`${number1} is not equal to ${number2}`);
}
if (number1 > number2) {
  console.log(`${number1} is greater then ${number2}`);
} else {
  console.log(`${number1} is less then ${number2}`);
}
if (number1 >= number2) {
  console.log(`${number1} is greater then and equal to ${number2}`);
} else if (number1 <= number2) {
  console.log(`${number1} is less then and equal to ${number2}`);
} else {
  console.log("Invalid value. Only assign number");
}

// • Tests using "and" and "or" operators
// let number1 = 25;
// let number2 = 15;

if (number1 === number2 || number1 >= number2) {
  if (number1 === number2) {
    console.log(`${number1} is equal to ${number2}`);
  } else {
    console.log(`${number1} is greater then ${number2}`);
  }
}
if (number1 !== number2 && number1 >= number2) {
  if (number1 !== number2) {
    console.log(`${number2} is not equal to ${number2}`);
  } else {
    console.log(`${number2} is greater then ${number2}`);
  }
} else {
  console.log("Invalid Value. Only assign number");
}

// • Test whether an item is in a array

let array: number[] = [1, 2, 3, 4, 5];
if (array.includes(1)) {
  console.log(`The item 1 2 3 4 5 is in the array`);
} else {
  console.log("The item is not in the array.");
}

console.log("============");

// • Test whether an item is not in a array
// let array: number[] = [1, 2, 3, 4, 5];
let checkingItem = [2, 4, 5, 6];

checkingItem.forEach((items) => {
  if (!array.includes(items)) {
    console.log(`The item ${items} is not in the array`);
  } else {
    console.log(`The item ${items} is in the array`);
  }
});

// =====================================================================================================================

// 25- Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alien_color: String = "green";
if (alien_color === "green") {
  console.log("The player just earned 5 point");
}

// =====================================================================================================================

// 26 - Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

// let alien_color :String = "green"
if (alien_color === "green") {
  console.log("player just earned 5 points for shooting the alien");
} else if (alien_color !== "green") {
  console.log("player just earned 10 points");
}

// =====================================================================================================================
// 27 - Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// let alien_color :String = "green"
if (alien_color === "green") {
  console.log("player earned 5 points");
} else if (alien_color === "yellow") {
  console.log("player earned 10 points");
} else if (alien_color === "red") {
  console.log("player earned 15 points");
}

// =====================================================================================================================
// 28 - Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

const age: number = 19;
if (age < 2) {
  console.log("the person is a baby");
} else if (age >= 2 && age <= 4) {
  console.log("the person is a toddler");
} else if (age >= 4 && age <= 13) {
  console.log("the person is a kid");
} else if (age >= 13 && age <= 20) {
  console.log("the person is a teenager");
} else if (age >= 20 && age <= 65) {
  console.log("the person is a adult");
} else if (age >= 65) {
  console.log("the person is a elder");
} else {
  console.log("Invalid Age");
}

// =====================================================================================================================
// 29 - Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits: string[] = ["Apple", "Mango", "Banana"];
if (favorite_fruits[0]) {
  console.log("You really like Apple!");
}
if (favorite_fruits[1]) {
  console.log("You really like Mango!");
}
if (favorite_fruits[2]) {
  console.log("You really like Banana!");
}

// =====================================================================================================================
// 30 - Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users: string[] = ["Admin1", "Admin2", "Admin3", "Admin4", "Admin5"];
if (users.length === 0) {
  console.log("We need to find some user ");
} else {
  for (let user of users) {
    if (user === "admin") {
      console.log(`Hello ${user}, would you like to see a status report?`);
    } else {
      console.log("Thank you for login again ");
    }
  }
}

// =====================================================================================================================
// 31 - No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let user: string[] = ["Admin1", "Admin2", "Admin3", "Admin4", "Admin5"];
while (user.length > 0) {
  let result = user.pop();
  console.log("prop value:", result);
}
console.log("We need to find some users!");

// =====================================================================================================================
// 32 - Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users = ["abdul", "Rehman", "Rashid", "Husnain", "Khan"];
let new_users = ["Abdul", "Rehman", "Atif", "Hasan", "Ammar"];

for (let i = 0; i < current_users.length; i++) {
  let newUserLowerCase = new_users[i].toLowerCase();
  if (current_users.includes(newUserLowerCase)) {
    console.log("the person will need to enter a new username");
  } else {
    console.log("the username is available");
  }
}

// =====================================================================================================================
// 33 - Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// •

let ordinalNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < ordinalNumbers.length; i++) {
  let num = ordinalNumbers[i];
  if (num === 1) {
    console.log(`${num}st`);
  } else if (num === 2) {
    console.log(`${num}nd`);
  } else if (num === 3) {
    console.log(`${num}rd`);
  } else {
    console.log(`${num}th`);
  }
}

// =====================================================================================================================
// 34 - Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// List of favorite pizzas
const pizzas = ["Pepperoni", "Margherita", "Vegetarian"];

// Printing a sentence for each pizza
for (let pizza of pizzas) {
  console.log("I like " + pizza + " pizza.");
}

// Statement expressing love for pizza
console.log("\nI really love pizza!");

// =====================================================================================================================
// 35 - Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Animals
const animals: string[] = ["dog", "cat", "rabbit"];

// Printing the name of each animal
console.log("Animals:");
for (const animal of animals) {
  console.log(animal);
}

// Printing a statement about each animal
console.log("\nCharacteristics:");
for (const animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

// Printing what these animals have in common
console.log("\nCommon characteristic:");
console.log("Any of these animals would make a great pet!");

// =====================================================================================================================
// 36 - T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function makeShirt(size: string, message: string): void {
  console.log(`Shirt size: ${size}, Message: ${message}`);
}

makeShirt("Medium", "Hello, World!");
// =====================================================================================================================
// 37 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirtDefault(
  size: string = "Large",
  message: string = "I love TypeScript"
): void {
  console.log(`Shirt size: ${size}, Message: ${message}`);
}

makeShirtDefault(); // Large shirt with default message
makeShirtDefault("Medium"); // Medium shirt with default message
makeShirtDefault("Small", "Custom message"); // Custom shirt
// =====================================================================================================================
// 38 - Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describeCity(city: string, country: string = "Pakistan"): void {
  console.log(`${city} is in ${country}.`);
}

describeCity("Karachi");
describeCity("Paris", "France");
describeCity("Tokyo", "Japan");
// =====================================================================================================================
// 39 - City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city: string, country: string): string {
  return `${city}, ${country}`;
}

console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("London", "UK"));
console.log(cityCountry("New York", "USA"));
// =====================================================================================================================
// 40 - Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
  const album: Album = { artist, title };
  if (tracks) {
    album.tracks = tracks;
  }
  return album;
}

console.log(makeAlbum("Artist1", "Album1"));
console.log(makeAlbum("Artist2", "Album2", 12));
// =====================================================================================================================
// 41 - Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function showMagicians(magicians: string[]): void {
  magicians.forEach((magician) => console.log(magician));
}

const magicians: string[] = ["Merlin", "Gandalf", "Harry Potter"];
showMagicians(magicians);
// =====================================================================================================================
// 42 - Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function makeGreat(magicians: string[]): string[] {
  return magicians.map((magician) => `the Great ${magician}`);
}

const greatMagicians: string[] = makeGreat(magicians.slice()); // Create a copy to preserve original
showMagicians(greatMagicians);
// =====================================================================================================================
// 43 - Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const originalMagicians: string[] = ["Merlin", "Gandalf", "Harry Potter"];
const modifiedMagicians: string[] = makeGreat(originalMagicians.slice()); // Create a copy to preserve original
showMagicians(originalMagicians);
showMagicians(modifiedMagicians);
// =====================================================================================================================
// 44 - Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function orderSandwich(...items: string[]): void {
  console.log("Sandwich ordered with:", items.join(", "));
}

orderSandwich("Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Cheese");
orderSandwich("Turkey");
// // =====================================================================================================================
// 45 - Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // Allow arbitrary key-value pairs
}

function storeCarInfo(
  manufacturer: string,
  model: string,
  ...extras: [string, any][]
): Car {
  const car: Car = { manufacturer, model };
  extras.forEach(([key, value]) => {
    car[key] = value;
  });
  return car;
}

console.log(storeCarInfo("Toyota", "Camry", ["color", "blue"], ["year", 2023]));
