module.exports = (sequelize,dataTypes) =>{

    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allwNull : false,
            autoIncrement : true
        },
        title : {
            type: dataTypes.STRING(500),
            allwNull : false

        },
        rating : {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allwNull : false
        },
        awards : {
            type: dataTypes.INTEGER.UNSIGNED,
            allwNull : false,
            defaultValue : '0'
        },
        release_date :{
            type: dataTypes.DATE,
            allwNull : false
        },
        length : {
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        genre_id :{
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        created_at :{
            type: dataTypes.DATE,
            defaultValue : null
        }
    }
    let config = {
        tableName : "movies",
        timestamps : true, //si tiene las marca de tiempo no va 
        createdAt : 'created_at',//cuando la colum no se llama como lo espera sequelize
        updatedAt : 'updated_at',
        deleteAt : false
    }

    const Movie = sequelize.define(alias,cols,config)

    return Movie;
}