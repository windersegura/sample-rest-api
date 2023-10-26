module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: '123',
  DB: 'testdb',
  dialect: 'postgres',
  pool: { // is optional, is used for sequelize
    max: 5, // max number of connections
    min: 0, // min number of connections
    acquire: 30000, // max time in ms that connection can be idle before released
    idle: 10000 // max time in ms tha pool will try to get connection before throwing error
  }
}
