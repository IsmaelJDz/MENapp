var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Camisetas = mongoose.model('camisetas');

	module.exports = function ( app ) {
  		app.use('/', router);
	};

	router.get('/tienda', function (req, resp, next){

		Camisetas.find(function (err, camisetas){
			if (err) return next(err);

			resp.render('tienda.jade', {
				titulo: 'Tienda de Camisetas',
				camisetas: camisetas
			});
		});
	});