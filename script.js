var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");

/*Example of changing the background 
body.style.background("red");*/


/*There's a simpler way to write this*/

/*color1.addEventListener("input", function() {
		console.log("color1.value");
		body.style.background = 
		"linear-gradient(to right," +
		color1.value +
		", " 
		color2.value +
		")";

	})

color2.addEventListener("input", function() {
		console.log("color2.value");
		body.style.background = 
		"linear-gradient(to right," +
		color1.value +
		", " 
		color2.value +
		")";
	})*/

function gradient() {
		body.style.background = 
		"linear-gradient(to right," +
		color1.value +
		", " +
		color2.value +
		")";

		css.textContent = body.style.background + ";";
}

/*There is no need for parentheses here since that would automatically call for colors and it wouldn't work. 
This is like a callback.*/
color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);

/*The difference between text content and innerHTML is that text content doesn't really grant spaces like
as innerHTML and innerHTML also wraps around a HTML tag and is changed by it(with attributes and styles)
while text content doesn't have those...*/