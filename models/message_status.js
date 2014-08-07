var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageStatusSchema = new Schema({
    name: String
}, {
    collection: 'message_status'
});

module.exports = mongoose.model('MessageStatusModel', messageStatusSchema);
