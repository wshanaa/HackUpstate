var express = require('express');
var router = express.Router();
var mongodb = require('mongojs');

var itemsdb = mongodb('mongodb://controlUser:Oswego123@ds155490.mlab.com:55490/storedb', ['storeItems']);

//Get all items
router.get('/items', function(req, res, next){
	itemsdb.storeItems.find(function(err, items){
		if(err){
			res.send(err);
		}
		res.json(items);
	});
});


//Get single item
router.get('/item/:id', function(req, res, next){
	itemsdb.storeItems.findOne({_id: mongodb.ObjectId(req.params.id)}, function(err, item){
		if(err){
			res.send(err);
		}
		res.json(item);
	});
});


module.exports = router;