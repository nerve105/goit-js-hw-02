function checkForSpam(message) {
    return (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')
    );
}
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("Get the best SALE offers now!")); // true
console.log(checkForSpam("SPAM messages are blocked")); // true
console.log(checkForSpam("Buy now")); // false
