var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var TagModel = require('../models/tag');

router.get('/:company_id', function(req, res) {
    console.log('[Tag] - GET /:company_id');

    return TagModel.find({company: req.params.company_id}, function(err, tags){
        if (!err){
            console.log('Tags found');
            res.jsonp(tags)
        } else{
            console.error(err);
        }    
    });
});

router.get('/:company_id/:id', function(req, res) {
    console.log('[Tag] - GET /:company_id/:id');

    return TagModel.findOne({company: req.params.company_id, _id: req.params.id}, function(err, tag){
        if (!err){
            console.log('Tag found');
            res.jsonp(tag);
        } else{
            console.error(err);
        }    
    });
});

router.post('/:company_id/new', function(req, res) {
    console.log('[Tag] - POST /:company_id/new');
    var company_id = req.params.company_id;

    console.log('Company: ' + company_id);
    var tag = new TagModel({
        company: company_id,
        name: req.body.name
    });

    tag.save(function(err){
        if(!err){
            console.log('New tag added');
            res.send(tag);                
        }else{
            console.error(err);
        }    
    });

});

router.put('/:company_id/:id', function(req, res) {
    console.log('[Tag] - PUT /:company_id/:id');
    return TagModel.findOne({company: req.params.company_id, _id: req.params.id}, function(err, tag){
        if(!err) {
            tag.name = req.body.name;

            tag.save(function(errSave){
                if(!errSave){
                    console.log('Tag updated');
                    res.send(tag);                
                }else {
                    console.error(err);   
                }
            });
        }
    });
});

router.delete('/:company_id/:id', function(req, res) {
    console.log('[Tag] - DELETE /:id');
    
    return TagModel.findOne({company: req.params.company_id, _id: req.params.id}, function(err, tag){
        if (!err){
            tag.remove(function(errDelete){
                if (!errDelete){
                    console.log('Tag deleted');
                    res.send('');                
                }else {
                    console.error(err);            
                }
            });
        }else{
            res.send('error');
        }
    });
});


//----------
module.exports = router;
