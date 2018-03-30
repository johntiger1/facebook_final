var birthday_containers = document.getElementsByClassName("clearfix")
for (var i = 0; i < birthday_containers.length; i++)
{
// 		console.log("ok this is running");
		var x = birthday_containers[i].getElementsByTagName("a")[0].innerHTML;
		console.log(x);

		var y = birthday_containers[i].getElementsByTagName("textarea");
		if (y.length === 0) continue;
		for (var j = 0; j < y.length; j++)
        {
			y[j].value = "hbd";
        }
		console.log("this is the " + i );
		console.log(y);
}