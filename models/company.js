var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    name: String,    
    created_at: {type: Date, default: Date.now},
    deleted_at: Date,
    deleted: {type: Boolean, default: false}
});

var Company = mongoose.model('company', companySchema);

module.exports = Company;
