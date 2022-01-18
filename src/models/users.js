const  db = require('mongoose');

const UserSchema  = db.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});


module.exports = db.model('User', UserSchema);