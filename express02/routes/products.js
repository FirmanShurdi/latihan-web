const express = require('express');
const router = express.Router();
const axios = require('axios');

// GET: Menampilkan semua produk
router.get('/', async (req, res) => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      res.render('products', { 
        title: 'List Products', 
        products: response.data.products 
      });
    } catch (error) {
      console.error('Error fetching products:', error.message);
      res.status(500).send('Error fetching products');
    }
  });
  
  // GET: Menampilkan detail produk berdasarkan ID
  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      res.render('product-detail', { 
        title: 'Product Detail', 
        product: response.data 
      });
    } catch (error) {
      console.error(`Error fetching product ID ${id}:`, error.message);
      res.status(500).send('Error fetching product detail');
    }
  });
  
  router.put('/:id', async function(req, res) {
    var id = req.params.id;
    var title = req.body.title;
    var price = req.body.price;
    var description = req.body.description;
  
    try {
      var response = await axios.put('https://dummyjson.com/products/' + id, {
        title: title,
        price: price,
        description: description
      });
  
      console.log('Produk berhasil diupdate:', response.data);
      res.redirect('/products/' + id);
    } catch (error) {
      console.error('Gagal update produk:', error);
      res.status(500).send('Terjadi kesalahan saat update produk.');
    }
  });
  
  module.exports = router;
