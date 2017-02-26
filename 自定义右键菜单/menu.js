var cnt = document.getElementById("content");
var menu = document.getElementById("menu");
var con = document.getElementById("container");

cnt.oncontextmenu = function(e){
	var px = "px";
	e.preventDefault();

	var width_m = window.innerWidth - e.clientX;
	var height_m = window.innerHeight - e.clientY;

	if(width_m >100) 
	{
		menu.style.left = e.clientX+px;
		if(height_m>200){
			//console.log("1 "+"clientX = "+e.clientX+" clientY = "+e.clientY);
			menu.style.top = e.clientY+px;
		}
		else
			menu.style.top = e.clientY-200+px;
	}
	else{
		menu.style.left = e.client-100+px;
		if(height_m>200){
			menu.style.top = e.clientY+px;
		}
		else
		{
			menu.style.top = e.clientY-200+px;
		}
	}
	menu.style.display="block";
}

cnt.addEventListener("click",function(){
	menu.style.display = "none";

});

con.addEventListener("click",function(){
	menu.style.display = "none";

});

menu.onclick = function (e) {
        e.stopPropagation();
};


