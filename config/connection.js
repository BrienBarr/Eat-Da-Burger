// Set up MySQL connection.
var mysql = require("mysql");

// If the server contains the JAWSDB_URL environmental variable, it connects to the JawsDB database.
if (process.env.JAWSDB_URL){
  var connection = mysq.createConnection(process.env.JAWSDB_URL);
}
// Else connect to the local database
else{
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Darwin@Maddy6",
    database: "burgers_db"
  });
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
