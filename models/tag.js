var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
    name: {type: String, trim: true, required: true}
}, {
    collection: 'tags'
});

module.exports = mongoose.model('TagModel', tagSchema);
