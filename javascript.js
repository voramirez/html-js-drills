// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*****************************
 * Section 1 - Personal Info *
 *****************************
 *
 * Description:
 *   Change the code below to display some (static) information
 *   when a user clicks the "Show Info" button.
 *
 * Resources:
 *   (See below for drill-specific resources)
 */

function addName() {
  console.log('addName() ran');

  // See:
  // - https://www.digitalocean.com/community/tutorials/js-innertext-and-innerhtml
  // - https://www.w3schools.com/jsref/prop_node_innertext.asp

  let nameElement = document.querySelector('#name');
  nameElement.innerText = 'Veronica';
}

function addFavoriteThings() {
  console.log('Called addFavoriteThings()');

  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings

  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

  let favThingsElement = document.querySelector('#favthings');
  let li1 = document.createElement("li");
  li1.innerText = "Shows";
  favThingsElement.appendChild(li1);
  let li2 = document.createElement("li");
  li2.innerText = "Movies";
  favThingsElement.appendChild(li2);
}

function replaceImage() {
  console.log('Called replaceImage()');

  // Change the puppy picture to a picture of your choosing

  // See:
  // - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-get-set-attributes.php
  // - https://www.w3schools.com/jsref/met_element_setattribute.asp

  let pictureElement = document.querySelector('#picture');
  pictureElement.setAttribute("src", "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png");
}

function changeCodeStatus() {
  console.log('Called changeCodeStatus()');

  // 1. Get a reference to <div id="codestatus">
  // 2. Create image element containing a sweet ol' meme
  // 3. Replace text in codestatus w/ image

  let codeStatusElement = document.querySelector('#codestatus');
  let img = document.createElement("img");
  img.setAttribute("src", "https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg");
  codeStatusElement.innerText = "";
  codeStatusElement.appendChild(img);
}

// Get a reference to the button w/ id="show-info-button"
let showInfoButton = document.querySelector('#show-info-button');

// Do something when showInfoButton is clicke
showInfoButton.addEventListener('click', function() {
  console.log('Clicked "Show Info" button');

  // Implement addName, addFavoriteThings, replaceImage, changeCodeStatus above

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************
 *
 * Description:
 *   Change the code below to populate the section on the right-hand
 *   side of the page with the data entered into the form.
 *
 */

// Get a reference to form w/ id="information-form"
let informationForm = document.querySelector('#information-form');

// Do something when form is submitted
informationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // You will want this here. Remove it and see what changes.

  console.log('Form submitted');

  // Your job:
  //   1. Get information typed into the form
  //   2. Display that info in "Display that info here" section

  // Google things like:
  //   javascript form element get values

  let fNameElement = document.querySelector("#fname");
  let firstName = fNameElement.value;
  let firstNameElement = document.querySelector("#firstname");
  firstNameElement.innerText = firstName;

  let lNameElement = document.querySelector("#lname");
  let lastName = lNameElement.value;
  let lastNameElement = document.querySelector("#lastname");
  lastNameElement.innerText = lastName;

  let carsElement = document.querySelector("#cars");
  let car = carsElement.value;
  let chosenCarElement = document.querySelector("#chosencar");
  chosenCarElement.innerText = car;

  let icecreamYes = document.querySelector("#icecreamyes");
  let icecreamNo = document.querySelector("#icecreamnode");
  if (icecreamYes.checked) {
    let icecreamStatus = document.querySelector("#icecreamstatus");
    icecreamStatus.innerText = "Yes";
  } else {
    let icecreamStatus = document.querySelector("#icecreamstatus");
    icecreamStatus.innerText = "No";
  }

  let checks = document.querySelector("#checks");

  let innerText = "";

  let humanCheckElement = document.querySelector("#humancheck");
  if (humanCheckElement.checked) {
    innerText = innerText + "human";
  } else {
    innerText = innerText + "";
  }

  let coderCheckElement = document.querySelector("#codercheck");
  if (coderCheckElement.checked) {
    innerText = innerText + "coder";
  } else {
    innerText = innerText + "";
  }

  checks.innerText = innerText;
});

/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page
let consoleLogButton = document.querySelector('#console-log-button');

// Log something when that button is clicked
consoleLogButton.addEventListener('click', function() {
  console.log('Button was clicked');
});

let makeBlueButton = document.querySelector('#make-blue-button');
makeBlueButton.addEventListener('click', function() {
  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  //  2. Change the text in <div id="colorText">...</div> to blue

  let colorTextElement = document.querySelector("#colorText");
  colorTextElement.style.color = "blue";
});

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.
document.addEventListener('keydown', function(event) {
  // This is called whenever a user pressed any key.

  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events

  if (event.key == "r") {
    let colorTextElement = document.querySelector("#colorText");
    colorTextElement.style.color = "red";
  }
});

document.addEventListener('keydown', function(event) {
  // This is called whenever a user pressed any key.

  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events

  if (event.key == "g") {
    let colorTextElement = document.querySelector("#colorText");
    colorTextElement.style.color = "green";
  }
});

/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */


document.querySelector("#todoform").addEventListener("submit", function(event) {
  event.preventDefault();

  let toDoElement = document.querySelector("#todo");
  let value = toDoElement.value;

  let toDoListElement = document.querySelector("#todos");
  let li = document.createElement("li");
  li.innerText = value;

  let button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", function() {
    button.parentElement.parentElement.removeChild(button.parentElement);
  });
  li.appendChild(button);

  toDoListElement.appendChild(li);
});


/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */


let seconds = 0;
setInterval(function() {
  seconds = seconds + 1;
  let secondsElement = document.querySelector("#seconds");
  secondsElement.innerText = seconds + " seconds passed";
}, 1000);


setTimeout(function() {
  let delayedDisplayElement = document.querySelector("delayedDisplay");
  delayedDisplay.innerText = "Five seconds have passed now";
}, 5000);


/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */


document.addEventListener("copy", function() {
  console.log("copied something")
});