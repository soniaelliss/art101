/*
 * Authors: Sonia Ellis & Joey Balaoing
 * Created: 19 September
 * License: Public Domain
 */


var myTransport = ["Lamborghini Aventador", "walk", "bike", "Uber", "bus", "suv"];

var myMainRide = {
  make : "Lamborghini",
  model: "Aventador",
  color: "rose gold",
  name: "Lambo",
  year: 2020,
  age: function() {
    return 2021 - age;
  }
};


// console.log(myTransport[0]);
// console.log(myTransport[1]);


// console.log("Make: " + myMainRide.make);
// console.log("Name: " + myMainRide.make);

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("<pre>",
  JSON.stringify(myMainRide, null,'\t'), "</pre>");
