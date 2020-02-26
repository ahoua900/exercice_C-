var on = document.querySelector("#btn");
var off = document.querySelector(".achat");

on.onclick = function (e){
	e.preventDefault();
	off.classList.toggle("paye")
}