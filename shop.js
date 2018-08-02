module.exports = function Shop() {
    
    let currentPrice = 5.54;
    let grandTotal = 0;
    let qty = 0;

    function setPrice(price){
        currentPrice = price;
    }

    function buy(qtyBought) {
        grandTotal += (qtyBought * currentPrice);
        qty = qtyBought;
    }

    function settings(){
        return {
            grandTotal,
            qty,
            currentPrice
        }
    }

    function clear(){
        grandTotal = 0;
        qty = 0;
        currentPrice = 0;
    }

    return {
        setPrice,
        buy,
        clear,
        settings
    }
}