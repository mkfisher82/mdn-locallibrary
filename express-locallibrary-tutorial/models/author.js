var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema (
    {
        firstName: {type: String, required: true, max: 100},
        familyName: {type: String, required: true, max: 100},
        dateOfBirth: {type: Date},
        dateOfDeath: {type: Date}
    }
);

// Virtual for author's full firstName
AuthorSchema
.virtual('name')
.get( function() {
    return this.familyName + ', ' + this.firstName;
});

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get( function() {
    return '/catalog/author/' + this._id;
});

//Export model
model.exports = mongoose.model('Author', AuthorSchema);
