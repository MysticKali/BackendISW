const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    rut:{
        type: Number,
        required: true,
        uniqued: true
    },
    email:{
        type: String,
        required: true,
        uniqued: true
    },
    direccion:{
        type: String,
        required: true
    },
    fechaNacimiento:{
        type: Date
    },
    contraseña:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true,
        uniqued: true
    },
    imagen:{
        type: String,
        default: "default.png"
    },
    rol:{
        type: Schema.Types.ObjectId,
        ref: 'roles',
        default: '6369808ca9b439f2be276952'
    }
});

module.exports = mongoose.model('user', UsersSchema);

