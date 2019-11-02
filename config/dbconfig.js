const mysql = require('promise-mysql')
const dbConfig = { 
    host: 'db-sopt-server.cmvicyxzzfke.ap-northeast-2.rds.amazonaws.com', 
    port: 3306, 
    user: 'admin', 
    password: 'young0327', 
    database: 'sopkathon', 
    dateStrings: 'date', }
module.exports = mysql.createPool(dbConfig)
