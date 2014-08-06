var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    author: Schema.Types.ObjectId,
    company: Schema.Types.ObjectId,    
    published_at: {type: Date, default: Date.now},
    deleted_at: {type: Date, default: null},
    deleted: {type: Boolean, default: false},
    title: String,
    body: String,
    link: String
}, { collection: 'messages' });

module.exports = mongoose.model('MessageModel', messageSchema);;
