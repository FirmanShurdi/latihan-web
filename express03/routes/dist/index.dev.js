"use strict";

var express = require('express');

var router = express.Router();

var db = require('../db');

router.get('/', function (req, res) {
  var sql = "\n    SELECT products.id, products.name, products.price, categories.name AS category\n    FROM products\n    LEFT JOIN categories ON products.category_id = categories.id\n  ";
  db.query(sql, function (err, results) {
    if (err) throw err;
    res.render('home', {
      products: results
    });
  });
});
module.exports = router;
//# sourceMappingURL=index.dev.js.map
