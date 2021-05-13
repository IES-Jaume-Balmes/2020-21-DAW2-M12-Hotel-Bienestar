
module.exports = (sequelize, DataTypes) =>{

    const Clientes = sequelize.define("Clientes", {
        dniCliente:{
            type: DataTypes.STRING,
            allowNull:false, 
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull:false, 
        },
        apellidos:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        pais:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        titularTarjeta:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        numTarjeta:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fechaExpTarjeta:{
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    });
    return Clientes;
}