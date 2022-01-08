module.exports = (sequelize,dataTypes) =>{

    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey : true,
            allwNull : false,
            autoIncrement : true,
        },
        name : {
            type: dataTypes.STRING(100),
            allwNull : false,

        },
        ranking : {
            type: dataTypes.INTEGER.UNSIGNED,
            allwNull : false,
            unique : true,
        },
        active : {
            type: dataTypes.BOOLEAN,
            allwNull : false,
            defaultValue : '1'
        }
    }
    let config = {
        tableName : "genres",
        timestamps : true, //si tiene las marca de tiempo no va 
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deleteAt : false
    }

    const Genre = sequelize.define(alias,cols,config)

    return Genre;
}