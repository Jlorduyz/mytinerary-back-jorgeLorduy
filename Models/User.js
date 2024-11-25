import { Schema, model} from 'mongoose'

let collection = 'users'
let schema = new Schema({
    name :{type: String, required: true},
    lastname :{type: String, required: true},
    email :{type: String, required: true},
    password:{type: String, required: true},
    photoURL : {type: String, required: true},
    country:{type: String, required: true, default: 'Colombia'},
    online:{type: Boolean, default: true},

})

let User = model(collection, schema);

export default User;
