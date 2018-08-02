const express = require('express');

const app = express();
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const Shop = require('./shop');
const shop = Shop();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.render('home', shop.settings());
});

app.post('/buy', function(req, res){
    let qty = Number(req.body.qty);
    shop.buy(qty)
    res.redirect('/');
});

app.post('/set-price', function(req, res){
    let price = parseFloat(req.body.price);
    shop.setPrice(price);
    res.redirect('/');
});

app.post('/clear', function(req, res){
    shop.clear();
    res.redirect('/');
});

app.listen(3010, function(){
    console.log("started on: ", this.address().port);
})