
module.exports = (sequelize, DataTypes) =>{

    const Empleados = sequelize.define("Empleados", {
        nombre:{
            type: DataTypes.STRING,
            allowNull:true, 
        },
        contrasenya:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    return Empleados;
}