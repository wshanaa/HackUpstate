var express = require('express');
var router = express.Router();
var mongodb = require('mongojs');

var routedb = mongodb('mongodb://controlUser:Oswego123@ds155490.mlab.com:55490/storedb', ['paths, places']);

//Get all paths points
router.get('/paths', function(req, res, next){
	routedb.paths.find(function(err, paths){
		if(err){
			res.send(err);
		}
		res.json(paths);
	});
});

//Get all places
router.get('/places', function(req, res, next){
	routedb.places.find(function(err, places){
		if(err){
			res.send(err);
		}
		res.json(places);
	});
});

module.exports = router;