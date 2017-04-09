var express = require('express');
var router = express.Router();
var mongodb = require('mongojs');

var usrdb = mongodb('mongodb://controlUser:Oswego123@ds155820.mlab.com:55820/users', ['users']);


router.get('/users', function(req, res, next){
	usrdb.users.find(function(err, users){
		if(err){
			res.send(err);
		}
		res.json(users);
	});
});

//Get one user
router.get('/users/:id', function(req, res, next){
	usrdb.users.findOne({_id: mongodb.ObjectId(req.params.id)}, function(err, user){
		if(err){
			res.send(err);
		}
		res.json(user);
	});
});

module.exports = router;
