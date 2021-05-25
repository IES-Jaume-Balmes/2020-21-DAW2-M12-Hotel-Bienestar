
module.exports = (sequelize, DataTypes) =>{

    const Reserva = sequelize.define("Reserva", {
        adults:{
            type: DataTypes.INTEGER,//mirar un datatype per a int
            allowNull: false,
        },
        children:{
            type: DataTypes.INTEGER,//mirar un datatype per a int
            allowNull: true,
        },
        checkIn:{
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        checkOut:{
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        claveHabitacion:{
            type: DataTypes.INTEGER,
            allowNull:true,
        }
    });

    Reserva.associate = (models)=>{
        Reserva.hasMany(models.Comments, {
            onDelete: "cascade",
        });
    };
    Reserva.associate = (models)=>{
        Reserva.hasMany(models.Clientes,{
            onDelete: "cascade",
        });
    };
    return Reserva;
}