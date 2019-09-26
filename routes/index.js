var express = require('express');
var router = express.Router();
var axios = require('axios');

axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
  .then(function (response) {
    // console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })


router.get('/bit', function (req, res, next) {
  axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
    .then(function (response) {
      let json_ar = response.data;
      for (var i in json_ar) {
        json_ar[i].myPrice = Number(json_ar[i].price_usd).toFixed(3);
      }
      res.render('bit', {
        title: 'Crypto10',
        _ar: json_ar
      });
    })
    .catch(function (error) {
      console.log(error);
    })

});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Crypto10'
  });
});

module.exports = router;
