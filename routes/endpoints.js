var express = require('express');
var router = express.Router();
var mongodb = require('mongojs');

var db = mongodb('mongodb://controlUser:Oswego123@ds155490.mlab.com:55490/storedb', ['produce', 'cleaning', 'dairy', 'frozen', 'nonperishable', 'bakery']);

//Get all produce
router.get('/produce', function(req, res, next){
	db.produce.find(function(err, produce){
		if(err){
			res.send(err);
		}
		res.json(produce);
	});
});

//Cleaning
router.get('/cleaning', function(req, res, next){
	db.cleaning.find(function(err, cleaning){
		if(err){
			res.send(err);
		}
		res.json(cleaning);
	});
});

//dairy
router.get('/dairy', function(req, res, next){
	db.dairy.find(function(err, dairy){
		if(err){
			res.send(err);
		}
		res.json(dairy);
	});
});

//Frozen
router.get('/frozen', function(req, res, next){
	db.frozen.find(function(err, frozen){
		if(err){
			res.send(err);
		}
		res.json(frozen);
	});
});

//Nonperishable
router.get('/nonperishable', function(req, res, next){
	db.nonperishable.find(function(err, nonperishable){
		if(err){
			res.send(err);
		}
		res.json(nonperishable);
	});
});

//Bakery
router.get('/bakery', function(req, res, next){
	db.bakery.find(function(err, bakery){
		if(err){
			res.send(err);
		}
		res.json(bakery);
	});
});




//GET SINGLE ITEMS BY ID

//Get single produce
router.get('/produce/:id', function(req, res, next){
	db.produce.findOne({_id: mongodb.ObjectId(req.params.id)}, function(err, produce){
		if(err){
			res.send(err);
		}
		res.json(produce);
	});
});

//Get single cleaning
router.get('/cleaning/:id', function(req, res, next){
	db.cleaning.findOne({_id: mongodb.ObjectId(req.params.id)}, function(err, cleaning){
		if(err){
			res.send(err);
		}
		res.json(cleaning);
	});
});

//Get single dairy
router.get('/dairy/:id', function(req, res, next){
	db.dairy.findOne({_id: mongodb.ObjectId(req.params.id)}, function(err, dairy){
		if(err){
			res.send(err);
		}
		res.json(dairy);
	});
});

//Get single nonperishable
router.get('/nonperishable/:id', function(req, res, next){
	db.nonperishable.findOne({_id: mongodb.ObjectId(req.params.id)}, function(err, nonperishable){
		if(err){
			res.send(err);
		}
		res.json(nonperishable);
	});
});

//Get single frozen
router.get('/frozen/:id', function(req, res, next){
	db.frozen.findOne({_id: mongodb.ObjectId(req.params.id)}, function(err, frozen){
		if(err){
			res.send(err);
		}
		res.json(frozen);
	});
});

//Get single bakery
router.get('/bakery/:id', function(req, res, next){
	db.bakery.findOne({_id: mongodb.ObjectId(req.params.id)}, function(err, bakery){
		if(err){
			res.send(err);
		}
		res.json(bakery);
	});
});

module.exports = router;