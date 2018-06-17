'use strict'
// Javascript Prototype example - to display and describe a simple rectangle using D3js and javascript Protypes

// Define a Position object for the rectangle
function Position(x, y) {
 this.x = x;
 this.y = y;
}

// Define a Rectangle object using using position plus others as attributes
function Rectangle(position, width, height, color) {
 this.position = position;
 this.width = width;
 this.height = height;
 this.color = color;
}

// Create a custom toString method for the Position object using prototype
Position.prototype.toString = function () {
 return "(" + this.x + "px," + this.y + "px)";
};

// Create our own area method for our Rectangle object using a prototype
Rectangle.prototype.area = function () {
 return this.width * this.height;
};

// Make a new instance of a Rectangle using a Position instance as an attribute along with the width and height
let rect = new Rectangle(new Position(12, 10), 230, 50, "red");

// Write a text string to the screen describing our Rectangle using it'sproperties, our position toString method and our rectangle's area method.
document.getElementById('result').innerHTML = ("The width of the below " + rect.color + " rectangle is " + rect.width + "px, the height is " + rect.height + "px, the area of the rectangle is " + rect.area() + "px squared and the position is " + rect.position + ".");

// Lets use these rectangle properties to draw the Rectangle using d3 
// Create a container to hold the Rectangle
let svgContainer = d3.select("body").append("svg")
 .attr("width", rect.width + rect.position.x)
 .attr("height", rect.height + rect.position.y);

//Draw the Rectangle
let rectangle = svgContainer.append("rect")
 .attr("x", rect.position.x)
 .attr("y", rect.position.y)
 .attr("width", rect.width)
 .attr("height", rect.height)
 .attr("fill", rect.color);
