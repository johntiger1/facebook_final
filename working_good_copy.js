var birthday_containers = document.getElementsByClassName("clearfix")
for (var i = 0; i < birthday_containers.length; i++)
{
// 		console.log("ok this is running");
		var x = birthday_containers[i].getElementsByTagName("a")[0];
		if (x === undefined) continue;
		var name  = x.innerHTML;
		console.log(name);
		var first_letter = name.charAt(0);


		var y = birthday_containers[i].getElementsByTagName("textarea");
		if (y.length === 0) continue;
		for (var j = 0; j < y.length; j++)
        {
			y[j].value = "hbd" + first_letter.toLocaleLowerCase() + "!";

        }
        


        
		console.log("this is the " + i );
		console.log(y);
}
