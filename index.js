const express = require('express');

const app = express();
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

let currentPrice = 0;
let grandTotal = 0;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.render('home', {
        currentPrice,
        grandTotal
    });
});

app.post('/set-price', function(req, res){
    let price = req.body.price;
    currentPrice = price;
    res.redirect('/');
});

app.post('/buy', function(req, res){
    let qty = req.body.qty;
    grandTotal += (currentPrice * qty);
    res.redirect('/');
});

app.listen(3010, function(){
    console.log("started on: ", this.address().port);
})