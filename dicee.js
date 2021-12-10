s1_random=Math.random()*6;
s1_res=Math.floor(s1_random)+1;
s2_random=Math.random()*6;
s2_res=Math.floor(s2_random)+1;
var body=document.firstElementChild.lastElementChild;
var modified_title=body.querySelector("#title");
if (s1_res<s2_res)
{
	modified_title.innerHTML="<em>Player2 wins!</em><img src='win.png' width=75px height=75px></img>"
}
else if (s1_res===s2_res)
{
	modified_title.innerHTML="<em>Tied!</em>"
}
else 
{
	modified_title.innerHTML="<img src='win.png' width=75px height=75px></img><em>Player1 wins!</em>"
}
if (s1_res===1)
{
	body.querySelector(".square1").innerHTML="<img src='d1.png'></img>"
}
else if (s1_res===2)
{
	body.querySelector(".square1").innerHTML="<img src='d2.png'></img>";
}
else if (s1_res===3)
{
	body.querySelector(".square1").innerHTML="<img src='d3.png'></img>";
}
else if (s1_res===4)
{
	body.querySelector(".square1").innerHTML="<img src='d4.png'></img>";
}
else if (s1_res===5)
{
	body.querySelector(".square1").innerHTML="<img src='d5.png'></img>";	
}
else
{
	body.querySelector(".square1").innerHTML="<img src='d6.png'></img>";
}	

if (s2_res===1)
{
	body.querySelector(".square2").innerHTML="<img src='d1.png'></img>"
}
else if (s2_res===2)
{
	body.querySelector(".square2").innerHTML="<img src='d2.png'></img>";
}
else if (s2_res===3)
{
	body.querySelector(".square2").innerHTML="<img src='d3.png'></img>";
}
else if (s2_res===4)
{
	body.querySelector(".square2").innerHTML="<img src='d4.png'></img>";
}
else if (s2_res===5)
{
	body.querySelector(".square2").innerHTML="<img src='d5.png'></img>";	
}
else
{
	body.querySelector(".square2").innerHTML="<img src='d6.png'></img>";
}
var button=document.firstElementChild.lastElementChild.querySelector("button");
button.addEventListener("click",reloadd);
function reloadd()
{
location.reload();
}