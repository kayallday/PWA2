/*
Description: DESCRIPTION INFO GOES HERE
Author: Kelsey M. Brickel
Date: 20151201
*/

/*Target 1A - Using any selector, and use .css() to change the backgroundColor to orange.
  Target 1B - console.log its top position, using the .offset() method
  Target 1C - console.log its top position, using the .position() method */
$(document).ready(function() {
	$("#contentleft ul").css("backgroundColor", "orange");
	console.log($("#contentleft ul").offset());
	console.log($("#contentleft ul").position());
	
/* Target 2A - In the <li> use the :eq() filter, and use .css() to change its left margin to 30px */
	$("#contentleft > ul > li").eq(1).css("marginLeft", "30px");
	
/* Target 3A - In the <li> use any selector and use .css() to change its font color to red
   Target 3B - In the <li> use the .filter() traversing method, and console.log its width using the .width() method. */
   
   	$("#contentleft> ul > li").eq(4).css("color", "red");
   	console.log($("#contentleft ul").find("li").filter(":last").width());
   
/* Target 4A - Using any traversing method, and use .css() to change its float to right.
   Target 4B - Use .addClass() to give it the “listhead” class.
   Target 4C - Verify that the class was added by using .hasClass(), and console.log the result. */	
	
	$("#contentright > h3").css("float", "right");
	$("#contentright > h3").addClass("listhead").append();
	console.log($("#contentright > h3").hasClass("listhead"));

/*	Target 5A - Target the <a> using the .children() traversing method, and use .attr() to change its  href to http://www.yahoo.com  | these are confusing this says to target them all and the next says to target the second list....which is the second list? since Target 5 is supposed to be the highlighted section on link 3 |
	Target 5B - Target all of the <a> tags in the second list, except for the first one, and change  their href’s to http://www.notgoogle.com using .attr()*/

	$("#contentright > ul > li").eq(2).children().attr( "href", "http://www.yahoo.com" );
	$("#contentright > ul > li:nth-child(n + 2)" ).children().attr( "href", "http://www.notgoogle.com" );
});

/* Target 6A - Use the div as a selector.  Create a loop that runs 10 times.
   Target 6B - In the loop, create an <li> with an anchor, using the loop's index as the anchor text.  (remember that the number is dynamic).  Example: <li><a href="#">0</a></li>
   Target 6C - Use the .appendTo() method to add the li to the div (target 6) */
   
  