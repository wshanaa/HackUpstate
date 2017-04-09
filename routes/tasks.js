var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

var db = mongodb('', ['collection']);

//Get all tasks
router.get('/tasks', function(req, res, next){
	res.send('TASK API');
	db.tasks.find(function(err, tasks){
		if(err){
			res.send(err);
		}
		res.json(tasks);
	});
});

//Get single tasks
router.get('/task/:id', function(req, res, next){
	res.send('TASK API');
	db.tasks.findOne({_id: mongodb.ObjectId(req.params.id)}, function(err, task){
		if(err){
			res.send(err);
		}
		res.json(task);
	});
});


module.exports = router;