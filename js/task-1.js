function makeTransaction(quantity, price, customerCredits) {
    if (price * quantity > customerCredits) {
        return `Insufficient funds!`; 
    }
    else {
        return `You ordered ${quantity} droids worth ${price*quantity} credits!`;
    }
}