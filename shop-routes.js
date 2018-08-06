module.exports = function ShopRoutes (shop) {
    function index (req, res) {
        res.render('home', shop.settings());
    }

    function setPrice (req, res) {
        let price = req.body.price;
        shop.setPrice(price);
        res.redirect('/');
    }

    function buy (req, res) {
        let qty = req.body.qty;
        shop.buy(qty);
        res.redirect('/');
    }

    return {
        buy,
        index,
        setPrice
    };
};
