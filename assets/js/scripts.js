
$(function() {

	var botones    = $('.btn-abrir'), 
		overlay    = $('#overlay'), 
		popup      = $('#popup'),
		btncerrar  = $('#btn-cerrar-popup');

	botones.click(function(event) {
		event.preventDefault();
		overlay.addClass('overlay-active');
		popup.addClass('popup-active');
	});

	btncerrar.click(function(event) {
		event.preventDefault();
		overlay.removeClass('overlay-active');
	});

});