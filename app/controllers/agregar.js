var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Camisetas = mongoose.model('camisetas');

module.exports = function(app){
	app.use('/', router);
}

router.get('/agregar', function(peticion, respuesta){
	respuesta.render('agregar');
});

router.post('/agregar',function(peticion, respuesta){

	var nuevoResgistro = new Camisetas({
		color: peticion.body.color,
		precio: peticion.body.precio,
		descripcion: peticion.body.descripcion,
		imagen: peticion.body.imagen
	});

	nuevoResgistro.save();

	respuesta.redirect('/tienda');

});