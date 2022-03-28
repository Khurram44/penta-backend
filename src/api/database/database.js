const mysql = require('mysql')

// create database connection
const dbConnection = mysql.createPool({
    host: "184.168.101.228",
    user :"Khurram7844",
    password: "Khurram7844",
    database:"pentaDB"
})

// calling to connect
function connection(){
dbConnection.getConnection(function(error){
    if(error) throw error
    console.log("database connected succesfully")
})
dbConnection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      connection();                         
    } else {                                      
        connection();                                 
    }
  });
}
connection()
module.exports = dbConnection