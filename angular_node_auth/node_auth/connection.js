const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'980333',
    database:'angular_node_auth'
});

connection.connect((error)=>{
    if(error) console.log(error);
    else console.log('Connected!!!')
})

module.exports = connection;