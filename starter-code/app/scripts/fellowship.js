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
// var rivendell = document.querySelectorAll("article")[1];


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement("section");      // creates section stored in middleEarth
  console.log(middleEarth);
  middleEarth.setAttribute("id", "middle-earth");           //applies ID tag "middle-earth" to var middleEarth
  for ( var i = 0; i < lands.length; i++) {                 //loops through "lands" array
      console.log(lands[i]);
    var newLands = document.createElement("article");        //creates each land with an article tag stored in newLands
      console.log(newLands);
    var landNames = document.createElement("h1");           //assigns each land a header tag stored in landNames
      // console.log(landNames);
    landNames.innerHTML = lands[i];                         //each iteration through loop, adds html to h1 tags of each land
    newLands.setAttribute("id", lands[i]);
    newLands.appendChild(landNames);                       //attaches landNames (child) to newLands (parent)
    middleEarth.appendChild(newLands);                       //attaches newLands (child) to middleEarth (parent)
    body.appendChild(middleEarth);                          //attaches middlEarth (child) t body (parent)
  }
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var shireHobbits = document.createElement("ul");             //creates unordered list stored in shireHobbits
  for (var i = 0; i < hobbits.length; i++) {                   //loops though the hobbits array
    var hobbitName = document.createElement("li");             //each iteration creates a list item stored in hobbitName
    hobbitName.setAttribute("id", hobbits[i]);                //for each iteration, sets "id" to the hobbit at current index
    console.log(hobbitName);              
    hobbitName.innerHTML = hobbits[i];                       //edits the content of each li to the hobbit name at each iteration (hobbits[i])
    console.log(hobbitName);
    hobbitName.className = "hobbit";                           //takes var hobbitName and adds a class name of "hobbit to each" - each iteration of loop
    shireHobbits.setAttribute("id", "shirefolk");             //sets "id" of "shirefolk" to the "ul" shireHobbits
    console.log(shireHobbits);
    var shire = document.querySelector("article");           //searches entire document for "article" and stores first element (The Shire) in var shire
    console.log(shire);
    shireHobbits.appendChild(hobbitName);                   //attaches the "li" items in hobbitName to the "ul" shireHobbits
    console.log(shireHobbits);
    shire.appendChild(shireHobbits);                        //attaches "ul" shireHobbits to var shire (which contains "article" The Shire)
  }
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var ring = document.createElement("div");             //creates the ring as a div element
  ring.setAttribute("id", "the-ring");                  //sets "id" of ring to "the-ring"
  ring.className = "magic-imbued-jewelry";              //sets 'class' of ring to "magic-imbued-jewelry"
  console.log(ring);
  ring.addEventListener("click", function () {            //nazgul screech when the ring is clicked
    nazgulScreech();
  });
  console.log("screeeeeech");
  var frodo = document.querySelector(".hobbit");            //searches document for class ".hobbit" (Frodo Baggins) and stores it in var frodo
  console.log(frodo);
  frodo.appendChild(ring);                                   //arraches the ring (div element) to var frodo (Frodo Baggins)
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var fellowship = document.createElement("aside");             //creates an "aside" element and stores it as var fellowship
  console.log(fellowship);
  var members = document.createElement("ul");                  //creates "ul" element and stores it as var members
  console.log(members);
  for (var i = 0; i < buddies.length; i++) {                  //loops through "buddies" array
    var newMember = document.createElement("li");              //each iteration creates "li" tag for each buddy
    console.log(newMember);
    newMember.innerHTML = buddies[i];                          //each iteration changes html of each "li" tag to the buddy's name at the current index in the loop
    newMember.className = "a-fellowship";                     //sets class "a-fellowship" for each "li" tag (each buddy)
    newMember.setAttribute("id", buddies[i]);                 // sets the "id" of each "li" tag to the buddy's name at the current index in the loop
    console.log(buddies);
    var rivendell = document.querySelectorAll("article")[1];    //searches entire document for "article" and returns a static nodeList, then stores the 2nd (Rivendell) in var rivendell
    console.log(rivendell);
    members.appendChild(newMember);                             //attaches "li" newMember to "ul" member
    console.log(members);
    rivendell.appendChild(members);                               //attaches "ul" members to "var" rivendell (which stores "article" Rivendell)
  }
}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var aragorn = document.getElementsByClassName("a-fellowship")[3];   //gets elements by ".a-fellowship" and stores the 4th(Strider) in var aragorn
  console.log(aragorn);
  aragorn.innerHTML = "Aragorn";                                     //changes html of var aragorn ("li" item w/ class ".a-fellowship" ("Strider")) to "Aragorn"
  aragorn.setAttribute("id", "Aragorn");
  console.log(aragorn);
  
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  var journeyStart = document.getElementById("shirefolk");    //searches document for element w/ unique "id" "shirefolk" and stores it in var journeyStart
  console.log(journeyStart);
  var toRivendell = document.querySelectorAll("article")[1];   //searches document for "article" elements and stores the 2nd (Rivendell) in var toRivendell
  console.log(toRivendell);
  toRivendell.appendChild(journeyStart);                     //arraches var journeyStart to var toRivendell ("article" Rivendell)
  console.log(toRivendell);
  
}

leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var theFellowship = document.createElement("div");              //creates a "div" element and stores it as var theFellowship
  console.log(theFellowship);
  var toRivendell = document.querySelectorAll("article")[1];    //searches document for "article" elements and stores the 2nd (Rivendell) in var toRivendell
  toRivendell.appendChild(theFellowship);
  var join = document.getElementsByClassName("hobbit");   //searches document for elements with class ".hobbit" and stores them in var join
  console.log(join);
  var joinUp = document.getElementsByClassName("a-fellowship");
  for (var i = 0; i < join.length; i++) {
    console.log("loop works");                    //would a switch statement work to add alerts with corresponding names after each member joins?
    theFellowship.appendChild(join[i]);                 //attaches element at index (the hobbit's name) to "div" element theFellowship
    // alert(join[i].id + " has joined the Fellowship");   //alerts that each team member has joined
  }
  for (var i = 0; i < joinUp.length; i++) {
    console.log("loop works");                    //would a switch statement work to add alerts with corresponding names after each member joins?
    theFellowship.appendChild(joinUp[i]);                 //attaches element at index (the buddy's name) to "div element theFellowship"
    // alert(joinUp[i].id + " has joined the Fellowship");   //alerts that each team member has joined
  }

}

forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalf = document.getElementById("Gandalf the Grey");    //searches document for element with unique "id" "Gandalf the Grey" and stores it in var gandalf
  gandalf.style.backgroundColor = "white";                    //changes background of var gandalf to white
  gandalf.style.borderColor = "grey";                             //changes border color of var gandalf to grey
  gandalf.style.borderStyle = "solid";                      //*******changes border of var gandalf to thick *doesn't work*
  gandalf.style.color = "black";                            //changes color of var gandalf text to black
  gandalf.style.display = "inline";
}

theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  document.getElementById("Boromir").style.textDecoration = "line-through";
  alert("Horn of Gondor has been Blown!");                                    //how to add an event listener to wait for Boromir to be killed (text line through)
  document.getElementById("Boromir").style.visibility = "hidden";
}

hornOfGondor();

// Part 10

function itsDangerousToGoAlone() {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
 var frodo = document.getElementById("Frodo Baggins");
 var sam = document.getElementById("Samwise 'Sam' Gamgee");
 console.log(frodo, sam);
 var mordor = document.getElementById("Mordor");
 console.log(mordor);
 mordor.appendChild(frodo);
 mordor.appendChild(sam);
 console.log(mordor);
 var mountDoom = document.createElement("div");
 console.log(mountDoom);
 mordor.appendChild(mountDoom);
 mountDoom.setAttribute("id", "Mount Doom");
 console.log(mordor);
  
}

  // console.log(finalPush);
  
  // for (var i = 0; i <= frodoSam.length; i++) {
  //   finalPush.appendChild(frodoSam);
  //   console.log(finalPush);
  // }

// var frodoSam;                                    *if else statement
//   console.log(frodoSam);
//   var finalPush = document.createElement("ul");
//   finalPush.setAttribute("id", "frodoSam");
//   finalPush.className = "finalPush";
//   console.log(finalPush);
//   if (".hobbit".id === "Frodo Baggins") {
//     frodoSam.appendChild(".hobbit");
//     console.log(frodoSam);
//   } else {

//   }
  // document.getElementsByClassName("hobbit");  //alternate value to store in var frodoSam

  // var frodoSam = document.getElementsByClassName("hobbit")[]; *figure out how to add more than one index from array ".hobbit"
  // console.log(frodoSam);

  // var frodoSam = hobbits[0];     *tries to pull hobbit and land names from original arrays
  // console.log(frodoSam);
  // var toMordor = lands[2];
  // console.log(toMordor);
  // toMordor.appendChild(frodoSam);

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var ring = document.getElementById("the-ring");
  console.log(ring);
  var mountDoom = document.getElementById("Mount Doom");
  console.log(mountDoom);
  var mordor = document.getElementById("Mordor");
  console.log(mordor);
  var gollum = document.createElement("div");
  gollum.setAttribute("id", "Gollum");
  gollum.innerHTML = "Gollum";
  console.log(gollum);
  mordor.appendChild(gollum);
  console.log(mordor);
  gollum.appendChild(ring);
  mountDoom.appendChild(gollum);
}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var gollum = document.getElementById("Gollum");
  console.log(gollum);
  document.getElementById("Gollum").style.visibility = "hidden";
  document.getElementById("Mordor").style.visibility = "hidden";
  var hobbit = document.getElementsByClassName("hobbit");
  console.log(hobbit);
  var shire = document.getElementById("The Shire");
  console.log(shire);
  shire.appendChild(hobbit);

}

thereAndBackAgain();
