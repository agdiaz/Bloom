var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var MessageModel = require('../models/message');

//GET:  /messages/
//Retrieves a list of messages
router.get('/', function(req, res) {
    return MessageModel.find({deleted: false}, function(err, messages){
        if (!err){
            res.jsonp(messages)
        } else{
            console.log(err);
        }    
    });
});

//GET:  /messages/:id
//Retrieves a specific message
router.get('/:id', function(req, res) {
    return MessageModel.findById(req.params.id, function(err, message){
        if (!err){
            res.jsonp(message)
        } else{
            console.log(err);
        }    
    });
});

//POST:    /messages/add
//Add a new message
router.post('/add', function(req, res) {
    var message = new MessageModel({
        deleted_at: null,
        title: req.body.title,
        body: req.body.body,
        link: req.body.link
    });
    message.save(function(err){
        if(!err){
            res.send(message);                
        }else{
            console.log(err);
        }    
    });

});

//PUT:    /messages/:id
//Update a specific message
router.put('/:id', function(req, res) {
    return MessageModel.findById(req.params.id, function(err, message){
        if(!err){
            message.title = req.body.title;
            message.body  = req.body.body;
            message.link  = req.body.link;

            message.save(function(errSave){
                if(!errSave){
                    res.send(message);                
                }else {
                    console.log(err);            
                }
            });
        }
    });
});

//DELETE:    /messages/
//Add new jobs
router.delete('/:id', function(req, res) {
  return MessageModel.findById(req.params.id, function(err, message){
        if (!err){
            message.deleted_at  = Date.now;
            message.deleted  = true;

            message.save(function(errSave){
                if (!errSave){
                    res.send('');                
                }else {
                    console.log(err);            
                }
            });
        }else{
            res.send('error');
        }
    });
});

//----------
module.exports = router;
