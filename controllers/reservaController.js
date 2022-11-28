const Reserva = require('../models/reserva');

const createReserva = (req,res) =>{
    const{usuario,year,month,day,tipo,hora} = req.body;
    const newReserva = new Reserva({
        usuario,
        year,
        month,
        day,
        tipo,
        hora
    });
    newReserva.save((err, reserva)=>{
        if(err){
            return res.status(400).send({message: "Error al crear reserva"})
        }
        return res.status(200).send(reserva)
    });
}
const getReservas =(req,res)=>{
    Reserva.find({},(err,reservas)=>{
        if(err){
            return res.status(400).send({message: "Error al obtener las reservas"})
        }
        return res.status(200).send(reservas)
    })
}
const getSpecificReservas =(req,res)=>{
    const {id} = req.params;
    Reserva.findById(id).populate({ path: 'user' }).exec((err, reservas) =>{
        if(err){
            return res.status(400).send({message: "Error al obtener las reservas"})
        }
        if(!reservas){
            return res.status(404).send({message: "No existe la reserva"})
        }
        return res.status(200).send(reservas)
    })
}
const updateReserva =(req,res)=>{
    const {id} = req.params;
    Reserva.findByIdAndUpdate(id,req.body,(err,reservas)=>{
        if(err){
            return res.status(400).send({message: "Error al obtener las reservas"})
        }
        if(!reservas){
            return res.status(404).send({message: "No existe la reserva"})
        }
        return res.status(200).send(reservas)
    })
}
const deleteSpecificReserva =(req,res)=>{
    const {id} = req.params;
    Reserva.findByIdAndDelete(id,(err,reservas)=>{
        if(err){
            return res.status(400).send({message: "Error al obtener las reservas"})
        }
        if(!reservas){
            return res.status(404).send({message: "No existe la reserva"})
        }
        return res.status(200).send(reservas)
    })
}

module.exports ={
    createReserva,
    getReservas,
    getSpecificReservas,
    updateReserva,
    deleteSpecificReserva
}