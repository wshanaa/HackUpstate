var express = require('express');
var router = express.Router();
var mongodb = require('mongojs');
var async = require('async');


var usrdb = mongodb('mongodb://controlUser:Oswego123@ds155820.mlab.com:55820/users', ['users']);
var itemsdb = mongodb('mongodb://controlUser:Oswego123@ds155490.mlab.com:55490/storedb', ['storeItems']);


router.get('/users', function(req, res, next){
	usrdb.users.find(function(err, users){
		if(err){
			res.send(err);
		}
		res.json(users);
	});
});

//Get one user
router.get('/user/:id', function(req, res, next){
	usrdb.users.findOne({_id: mongodb.ObjectId(req.params.id)}, function(err, user){
		if(err){
			res.send(err);
		}
		res.json(user);
	});
});


//Get the users favorites list
router.get('/user/:id/favorites/', function(req, res, next){
	usrdb.users.findOne({_id: mongodb.ObjectId(req.params.id)}, function(err, user){
		if(err){
			res.send(err);
		}

		var favs = user.favorites;

		async.parallel(
			favs.map((x) => itemsdb.storeItems.findOne.bind(itemsdb.storeItems, {_id: mongodb.ObjectId(x)})),
			function(err, results) {
				res.json(results);
			}
		);

	});
});





module.exports = router;
