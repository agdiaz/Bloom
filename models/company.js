var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    name: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    deleted_at: {type: Date, default: null},
    deleted: {type: Boolean, default: false}
}, {
    collection: 'companies'
});

module.exports = mongoose.model('CompanyModel', companySchema);
