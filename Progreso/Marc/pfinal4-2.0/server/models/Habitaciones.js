
module.exports = (sequelize, DataTypes) =>{

    const Habitaciones = sequelize.define("Habitaciones", {
        nombre:{
            type: DataTypes.STRING,
            allowNull:false, 
        },
        numHabitacion:{
            type: DataTypes.INTEGER,
            allowNull:false, 
        },
        numCamas:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Baño:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        PrecioBase:{
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        Estado:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Imagen:{ 
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Habitaciones;
}