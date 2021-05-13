
module.exports = (sequelize, DataTypes) =>{

    const Reserva = sequelize.define("Reserva", {
        name:{
            type: DataTypes.STRING,
            allowNull:false, 
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false, 
        },
        phone:{
            type: DataTypes.STRING,
            allowNull:false, 
        },
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
    });
    //Asociem el posts table amb el comments table
    Reserva.associate = (models)=>{
        Reserva.hasMany(models.Comments, {
            onDelete: "cascade",
        });
    };
    return Reserva;
}