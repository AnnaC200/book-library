const Sequelize = require ('sequelize')

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT} = process.env;


const setUpDatabase = () => {
    const connection = new Sequelize( DB_NAME, DB_USER, DB_PASSWORD, {
        host:DB_HOST,
        port: DB_PORT,
        dialect: "mysql",
        logging: false
    })
    // gives sequelize permission to alter our tables to fit the models that we are going to create
    connection.sync({alter: true})
    return {}
}

module.exports = setUpDatabase()
