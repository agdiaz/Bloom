var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    author: {type: Schema.Types.ObjectId, required: true},
    company: {type: Schema.Types.ObjectId, required: true},    
    published_at: {type: Date, default: Date.now},
    deleted_at: {type: Date, default: null},
    deleted: {type: Boolean, default: false},
    title: {type: String, required: true, trim: true},
    body: {type: String, required: true},
    link: {type: String, default: "", lowercase: true, trim:true}
}, { 
    collection: 'messages' 
});

module.exports = mongoose.model('MessageModel', messageSchema);;
