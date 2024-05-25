let cart = [];

function addToCart(productName, productPrice) {
    const cartItem = {
        productName,
        productPrice,
        quantity: 1
    };

    const existingItem = cart.find(item => item.productName === productName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(cartItem);
    }

    alert(`${productName} has been added to the cart!`);
}