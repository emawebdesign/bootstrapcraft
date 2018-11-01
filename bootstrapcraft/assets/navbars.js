$(document).ready(function() {
		  
	var slideout = new Slideout({
	  'panel': document.getElementById('panel'),
	  'menu': document.getElementById('menu'),
	  'padding': 256,
	  'tolerance': 70
	});
	
	$('.toggle-button').click(function() {
	  slideout.toggle();
	});
	
	$('.close-button').click(function() {
	  slideout.close();
	});

});