var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagModel = require('tag');

var contactSchema = new Schema({
    author: {type: Schema.Types.ObjectId, required: true},
    company: {type: Schema.Types.ObjectId, required: true}, 
    created_at: {type: Date, default: Date.now},
    deleted_at: {type: Date, default: null},
    deleted: {type: Boolean, default: false},
    first_name: {type: String, required: true, trim: true},
    last_name:  {type: String, required: true, trim: true},
    mail: {type: String, required: true, lowercase: true, trim:true},
    tags: [TagModel]
}, { 
    collection: 'contacts' 
});

module.exports = mongoose.model('ContactModel', contactSchema);;
