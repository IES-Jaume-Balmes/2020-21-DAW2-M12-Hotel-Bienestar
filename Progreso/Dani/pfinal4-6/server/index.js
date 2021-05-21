const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers
const reservaRouter = require('./routes/Reserva')
app.use("/reserva", reservaRouter);

const commentsRouter = require('./routes/Comments')
app.use("/comments", commentsRouter);

const usersRouter = require('./routes/Users');
app.use("/auth", usersRouter);

const habitacionesRouter = require('./routes/Habitaciones');
app.use("/habitaciones", habitacionesRouter);

const clientesRouter = require('./routes/Clientes');
app.use("/clientes", clientesRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, () => {
        console.log("Servidor iniciado en el puerto 3001!");
    });
});
