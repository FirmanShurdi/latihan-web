"use strict";

var express = require('express');

var router = express.Router();

var axios = require('axios'); // GET: Menampilkan semua produk


router.get('/', function _callee(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get('https://dummyjson.com/products'));

        case 3:
          response = _context.sent;
          res.render('products', {
            title: 'List Products',
            products: response.data.products
          });
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching products:', _context.t0.message);
          res.status(500).send('Error fetching products');

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // GET: Menampilkan detail produk berdasarkan ID

router.get('/:id', function _callee2(req, res) {
  var id, response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(axios.get("https://dummyjson.com/products/".concat(id)));

        case 4:
          response = _context2.sent;
          res.render('product-detail', {
            title: 'Product Detail',
            product: response.data
          });
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.error("Error fetching product ID ".concat(id, ":"), _context2.t0.message);
          res.status(500).send('Error fetching product detail');

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
router.put('/:id', function _callee3(req, res) {
  var id, title, price, description, response;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          title = req.body.title;
          price = req.body.price;
          description = req.body.description;
          _context3.prev = 4;
          _context3.next = 7;
          return regeneratorRuntime.awrap(axios.put('https://dummyjson.com/products/' + id, {
            title: title,
            price: price,
            description: description
          }));

        case 7:
          response = _context3.sent;
          console.log('Produk berhasil diupdate:', response.data);
          res.redirect('/products/' + id);
          _context3.next = 16;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](4);
          console.error('Gagal update produk:', _context3.t0);
          res.status(500).send('Terjadi kesalahan saat update produk.');

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[4, 12]]);
});
module.exports = router;
//# sourceMappingURL=products.dev.js.map
