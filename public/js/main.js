var socket = io();

	$('form').submit(function() {
		socket.emit('chat message', $('#m').val());
		$('#m').val('');

		return false;
	});

	socket.on('chat message', function(msg){
		$('#messages').append($('<li>').text(msg));
	});

	$('#tituloChat').on('click', function(event) {
		event.preventDefault();
		$(".chat").css({ 'bottom': '0px', 'right': '0px' });
	});