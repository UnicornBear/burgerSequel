// import ORM to creatae functions that will interact with the database
var orm = require('../config/orm.js');

// create the burger obj
var burger = {

    // select All
    selectAll: function(cb) {
      orm.selectAll('burgers', function(res) {
        cb(res);
      });
    },

    // insert one
    // the variables cols and vals are arrays
    insertOne: function(cols, vals, cb) {
      orm.insertOne('burgers', cols, vals, function(res) {
        cb(res);
      });
    },

    // update one
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne('burgers', objColVals, condition, function(res) {
        cb(res);
      });
    }
};

// export ORM
module.exports = burger;