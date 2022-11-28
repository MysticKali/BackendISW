const User = require('../models/user');
const Reserva = require('../models/reserva');


const createUser=(req,res)=>{
    const {id} = req.params;
    const {nombre, apellido, rut, email, direccion, fechaNacimiento,contraseña, telefono, imagen, rol}=req.body
    const newUser = new User({
        nombre,
        apellido,
        rut,
        email,
        direccion,
        fechaNacimiento,
        contraseña,
        telefono,
        imagen,
        rol
    })
    newUser.save((err,user)=>{
        if(err){
            return res.status(400).send({message: "No se puedo crear al usuario"})
        }
        Reserva.findByIdAndUpdate(id,{ user: user}, (err, reserva)=>{
            if(err){
                return res.status(400).send({message: "No se puedo crear al usuario"})
            }
            if(!reserva){
                return res.status(404).send({ message: "No existe reserva"})
            }
            return res.status(201).send(user)
        })
        return res.status(201).send(user)
    })
}
const getUsers =(req,res)=>{
    User.find({},(err,user)=>{
        if(err){
            return res.status(400).send({message: "Error al obtener los usuarios"})
        }
        if(!user){
            return res.status(404).send({message: "No existen usuarios"})
        }
        return res.status(200).send(user)
    })
}
const getSpecificUser =(req,res)=>{
    const {id} = req.params;
    User.findById(id,req.body,(err,user)=>{
        if(err){
            return res.status(400).send({message: "Error al obtener al usuario"})
        }
        if(!user){
            return res.status(404).send({message: "No existe el usuario"})
        }
        return res.status(200).send(user)
    })
}
const updateUser =(req,res)=>{
    const {id} = req.params;
    User.findByIdAndUpdate(id,req.body,(err,user)=>{
        if(err){
            return res.status(400).send({message: "Error al actualizar usuario"})
        }
        if(!user){
            return res.status(404).send({message: "No existe el usuario"})
        }
        return res.status(200).send(user)
    })
}
const deleteSpecificUser =(req,res)=>{
    const {id} = req.params;
    User.findByIdAndDelete(id,(err,user)=>{
        if(err){
            return res.status(400).send({message: "Error al eliminar usuario"})
        }
        if(!user){
            return res.status(404).send({message: "No existe el usuario"})
        }
        return res.status(200).send(user)
    })
}


module.exports={
    createUser,
    getUsers,
    getSpecificUser,
    updateUser,
    deleteSpecificUser
}