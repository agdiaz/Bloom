var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var MessageModel = require('../models/message');

router.get('/:company_id/', function(req, res) {
    return MessageModel.find({company: req.params.company_id, deleted: false}, function(err, messages){
        if (!err){
            res.jsonp(messages)
        } else{
            res.send(err);            
            console.error(err);
        }    
    });
});

router.get('/:company_id/:id', function(req, res) {
    return MessageModel.findOne({company: req.params.company_id, _id:req.params.id, deleted: false}, function(err, message){
        if (!err){
            res.jsonp(message)
        } else{
            res.send(err);
            console.error(err);
        }    
    });
});

router.post('/:company_id/new', function(req, res) {
    var message = new MessageModel({
        company: req.params.company_id,
        title: req.body.title,
        body: req.body.body,
        link: req.body.link
    });
    message.save(function(err){
        if(!err){
            res.send(message);                
        }else{
            res.send(err);
            console.error(err);
        }    
    });

});

router.put('/:company_id/:id', function(req, res) {
    return MessageModel.findOne({company: req.params.company_id, _id:req.params.id, deleted: false}, function(err, message){
        if(!err){

            message.title = req.body.title;
            message.body  = req.body.body;
            message.link  = req.body.link;

            message.save(function(errSave){
                if(!errSave){
                    res.send(message);                
                }else {
                    res.send(errSave);
                    console.error(err);            
                }
            });
        }
    });
});

router.delete('/:company_id/:id', function(req, res) {
    return MessageModel.findOne({company: req.params.company_id, _id: req.params.id, deleted: false}, function(err, message){
        if (!err){
            message.deleted_at  = Date.now;
            message.deleted  = true;

            message.save(function(errSave){
                if (!errSave){
                    res.send('');                
                }else {
                    console.write(err);            
                    res.send(errSave);
                }
            });
        }else{
            res.send(err);
        }
    });
});

//----------
module.exports = router;
