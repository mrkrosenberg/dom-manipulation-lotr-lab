console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');
var rivendell = document.querySelectorAll("article")[1];


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement("section");
  console.log(middleEarth);
  middleEarth.setAttribute("id", "middle-earth");
  for ( var i = 0; i < lands.length; i++) {
      console.log(lands[i]);
    var newLands = document.createElement("article");
      console.log(newLands);
    var landNames = document.createElement("h1");
      // console.log(landNames);
    landNames.innerHTML = lands[i];
    newLands.appendChild(landNames);
    middleEarth.appendChild(newLands);
    body.appendChild(middleEarth);
  }
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var shireHobbits = document.createElement("ul");
  for (var i = 0; i < hobbits.length; i++) {
    var hobbitName = document.createElement("li");
    hobbitName.innerHTML = hobbits[i];
    console.log(hobbitName);
    hobbitName.className = "hobbit";
    shireHobbits.setAttribute("id", "shirefolk");
    console.log(shireHobbits);
    var shire = document.querySelector("article");
    console.log(shire);
    shireHobbits.appendChild(hobbitName);
    console.log(shireHobbits);
    shire.appendChild(shireHobbits);
  }
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var ring = document.createElement("div");
  ring.setAttribute("id", "the-ring");
  ring.className = "magic-imbued-jewelry";
  console.log(ring);
  ring.addEventListener("click", function () {
    nazgulScreech();
  });
  console.log("screeeeeech");
  var frodo = document.querySelector(".hobbit");
  console.log(frodo);
  frodo.appendChild(ring);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var fellowship = document.createElement("aside");
  console.log(fellowship);
  var members = document.createElement("ul");
  console.log(members);
  for (var i = 0; i < buddies.length; i++) {
    var newMember = document.createElement("li");
    console.log(newMember);
    newMember.innerHTML = buddies[i];
    newMember.className = "a-fellowship";
    console.log(buddies);
    var rivendell = document.querySelectorAll("article")[1];
    console.log(rivendell);
    rivendell.appendChild(newMember);
  }
}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var aragorn = document.getElementsByClassName("a-fellowship")[3];
  console.log(aragorn);
  aragorn.innerHTML = "Aragorn";
  console.log(aragorn);
  
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  var journeyStart = document.getElementById("shirefolk");
  console.log(journeyStart);
  var toRivendell = document.querySelectorAll("article")[1];
  console.log(toRivendell);
  toRivendell.appendChild(journeyStart);
  console.log(toRivendell);
}

leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var theFellowship = document.createElement("div");
  console.log(theFellowship);
  // for (var i = 0; i <= hobbits.length; i) {
    
  // }
}

forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
