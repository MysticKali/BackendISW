const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const reservaRoutes = require('./routes/reservaRoutes');
const userRoutes = require('./routes/userRoutes');
const emailRoutes = require('./routes/emailRoutes');

app.use(cors())
app.use(express.json());
app.options('*',cors());
app.use('/api',reservaRoutes);
app.use('/api',userRoutes);
app.use('/api',emailRoutes);

app.listen(process.env.PORT,() =>{
    console.log('server started')
    console.log('el proyecto esta corriendo en el puerto ->',process.env.PORT)
});

mongoose.set('useFindAndModify',false);
mongoose.set('useNewUrlParser',true);
mongoose.set('useCreateIndex',true);
mongoose.set('useUnifiedTopology',true);

mongoose.connect(process.env.DB,(err)=>{
    if (err) {
        return console.log('Error al conectar con la base de datos->',err)
    }return console.log('conectado a la bd')
});