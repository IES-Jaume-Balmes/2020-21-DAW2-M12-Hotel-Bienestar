
module.exports = (sequelize, DataTypes) =>{

    const Valoraciones = sequelize.define("Valoraciones", {
        Rating:{
            type: DataTypes.DOUBLE,
            allowNull:false, 
        },
        Comentario:{
            type: DataTypes.STRING,
            allowNull:false, 
        },
    });
    return Valoraciones;
}