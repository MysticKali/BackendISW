const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendmail = (req,res)=>{
    const{message}=req.body
    const Admin = 'claudia.villagran1901@alumnos.ubiobio.cl'
    const token = process.env.pw
    const mail ='claudia.villagran1901@alumnos.ubiobio.cl'
    if(!token){
        return res.status(400).send({message: "No se ha insertado contraseña"})
    }
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: Admin,
            pass: token
        }
    })
    let directory = ['mystickali49@gmail.com','villagranleiva@gmail.com']
    const mailOptions = {
        from: `Admin ${mail}`,
        to: directory,
        subject: 'Comprobante de reserva',
        text: `Se ha realizado el envío ${message}`,
        html: `<h1>Tienes una reserva registrada</h1>
                <p>${message}</p>`
    }
    transport.sendMail(mailOptions,(err,info)=>{
        if(err){
            return res.status(400).send({message: "Error al enviar correo"})
        }
            return res.status(200).send({message: "Mensaje enviado" })
    })
    transport.verify().then(()=>{
        console.log('Servidor de correos habilitado')
    }).catch(error =>{
        console.log('Error al utilizar servidor')
    })
}

module.exports=sendmail