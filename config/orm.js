// import (require) the mysql connection
var connection = require ('./connection.js');

// helper function for SQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

 // helper function to convert object key/value pairs to SQL syntax
 function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

  // ORM
  // create the ORM object to perform SQL queries 
  var orm = {

    // queries all burgers from the table
    selectAll: function(tableInput, cb) {
      // Construct the query string that returns all rows from the target table
      var queryString = "SELECT * FROM " + tableInput + ";";
  
      // Perform the database query
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        // Return results in callback
        cb(result);
      });
    },



    // creates a new burger to the table
    // vals -- an array of values that we want to save to cols
    // cols -- the columns we want to insert the values into
    insertOne: function(table, cols, vals, cb) {
      // Construct the query string that inserts a single row into the target table
      var queryString = "INSERT INTO " + table;

      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      // console.log(queryString);
  
      // Perform the database query
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        // Return results in callback
        cb(result);
      });
    },
    
    // updates record in the table
    // objColVals -- the columns and values that you want to update
    updateOne: function(table, objColVals, condition, cb) {
      // Construct the query string that updates a single entry in the target table
      var queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      // console.log(queryString);
  
      // Perform the database query
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        // Return results in callback
        cb(result);
      });
    }
};

// export the ORM object
module.exports = orm;