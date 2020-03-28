let persent;

function progressAtMoment () {
	persent = $(".progress-bar").width();
}

function menu () {
	$("#btn1").click(firstButton);
	$("#btn2").click(secondButton);
	$("#btn3").click(thirdButton);
}

function firstButton () {
	progressAtMoment();
	$(".progress-bar").width(persent + 1);
}

function secondButton () {
	progressAtMoment();
	$(".progress-bar").width(persent + 3);
}

function thirdButton () {
	progressAtMoment();
	$(".progress-bar").width(persent + 7);
}


jQuery(document).ready(menu);