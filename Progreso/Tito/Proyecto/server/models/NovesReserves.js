
module.exports = (sequelize, DataTypes) =>{

    const NovesReserves = sequelize.define("NovesReserves", {
        fechaEntrada:{
            type: DataTypes.DATEONLY, 
            allowNull:false, 
        },
        fechaSalida:{
            type: DataTypes.DATEONLY,
            allowNull:false, 
        },
        numPersonas:{
            type: DataTypes.INTEGER,
            allowNull:true, 
        },
        claveHabitacion:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Id_R_Cliente:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Id_R_Habitacion:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
    return NovesReserves;
}