
module.exports = (sequelize, DataTypes) =>{

    const Empleados = sequelize.define("Empleados", {
        dniEmp:{
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
        contrasenya:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cargo:{
            type: DataTypes.STRING,//enum?
            allowNull: false,
        },
        puesto:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Empleados;
}