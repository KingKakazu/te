let cart = [];

function addToCart(product, price) {
    const item = cart.find(i => i.product === product);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ product, price, quantity: 1 });
    }
    alert(`${product} has been added to the cart.`);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    if (cartItems) {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.product} - $${item.price} x ${item.quantity}`;
            cartItems.appendChild(itemElement);
            total += item.price * item.quantity;
        });
        totalPrice.textContent = total.toFixed(2);
    }
}

function checkout() {
    alert('Checkout not implemented.');
}
