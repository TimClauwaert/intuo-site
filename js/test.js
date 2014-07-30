//hide allimages
//function hideAll (){
//	$('.slide-element').hide();
//};

//$(document).ready(hideAll);

//function showOnHover(){
//	$('.slide-parent').hover(function() {
//		$(".slide-element").slideDown('slow');
//	});
//};

function showOnHover(){
	$('.slide-parent').hover(function() {
		$(".slide-element",$(this)).animate({
		opacity: 1,
		left: "0px"
		}, 500, function() {
		// Animation complete.
		});
		$(".slide-element-right",$(this)).animate({
		opacity: 1,
		left: "0px"
		}, 500, function() {
		// Animation complete.
		});
	});
};
$(document).ready(showOnHover);





//Overlay
var $overlay = $('<div id="overlay"></div>');
$('body').append($overlay);
//1. capture click on request demo
$(".demo-request a").click(function(){
	$overlay.show();

});
//2. show overlay
//3. add form

