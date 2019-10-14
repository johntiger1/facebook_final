// ==UserScript==
// @name         Birthday script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.facebook.com/events/birthdays/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var birthday_containers = document.getElementsByClassName("clearfix")
for (var i = 0; i < birthday_containers.length; i++)
{
		var x = birthday_containers[i].getElementsByTagName("a")[0];
		if (x === undefined) continue;
		var name  = x.innerHTML;
		var first_letter = name.charAt(0);


		var y = birthday_containers[i].getElementsByTagName("textarea");
		if (y.length === 0) continue;
		for (var j = 0; j < y.length; j++)
        {
			y[j].value = "hbd" + first_letter.toLocaleLowerCase() + "!";

        }
}
})();

