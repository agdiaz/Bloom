var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var CompanyModel = require('../models/company');

router.get('/', function(req, res) {
    console.log('[Company] - GET /');

    return CompanyModel.find({deleted: false}, function(err, companies){
        if (!err){
//            console.log('Companies found: ' + companies.len());
            res.jsonp(companies)
        } else{
            console.error(err);
        }    
    });
});

router.get('/:id', function(req, res) {
    console.log('[Company] - GET /:id');

    return CompanyModel.findById(req.params.id, function(err, company){
        if (!err){
            console.log('Company found');
            res.jsonp(company);
        } else{
            console.error(err);
        }    
    });
});

router.post('/new', function(req, res) {
    console.log('[Company] - POST /new');
    var company = new CompanyModel({
        name: req.body.name
    });

    company.save(function(err){
        if(!err){
            console.log('New company added');
            res.send(company);                
        }else{
            console.error(err);
        }    
    });

});

router.put('/:id', function(req, res) {
    console.log('[Company] - PUT /:id');
    return CompanyModel.findById(req.params.id, function(err, company){
        if(!err) {
            company.name = req.body.name;

            company.save(function(errSave){
                if(!errSave){
                    console.log('Company updated');
                    res.send(company);                
                }else {
                    console.error(err);   
                }
            });
        }
    });
});

router.delete('/:id', function(req, res) {
    console.log('[Company] - DELETE /:id');
    
    return CompanyModel.findById(req.params.id, function(err, company){
        if (!err){
            company.deleted_at  = Date.now();
            company.deleted  = true;

            company.save(function(errSave){
                if (!errSave){
                    console.log('Company deleted');
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
