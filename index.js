const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Shop = require('./shop');
const ShopRoutes = require('./shop-routes');

// initialize some instances
const app = express();
const shop = Shop();
const shopRoutes = ShopRoutes(shop);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', shopRoutes.index);
app.post('/set-price', shopRoutes.setPrice);
app.post('/buy', shopRoutes.buy);

app.listen(3010, function () {
    console.log('started on: ', this.address().port);
});
