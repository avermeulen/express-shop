module.exports = function () {
    let currentPrice = 0;
    let grandTotal = 0;

    function buy(qty) {
        grandTotal += (currentPrice * qty);
    }

    function setPrice(price){
        currentPrice = price;
    }

    function settings(){
        return {
            currentPrice,
            grandTotal
        }
    }

    return {
        setPrice,
        buy,
        settings
    }
}