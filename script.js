document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');

    let cart = [];

    // --- Sample Product Data ---
    const products = [
        { id: 1, name: 'Coffee', price: 5.00 },
        { id: 2, name: 'Tea', price: 4.50 },
        { id: 3, name: 'Sandwich', price: 9.20 },
        { id: 4, name: 'Salad', price: 8.50 },
        { id: 5, name: 'Muffin', price: 3.50 },
        { id: 6, name: 'Juice', price: 4.00 },
        { id: 7, name: 'Water', price: 2.00 },
        { id: 8, name: 'Cake Slice', price: 6.00 },
        { id: 9, name: 'Cookie', price: 2.50 },
    ];

    // --- Functions ---

    /**
     * Renders all products to the product grid.
     */
    function renderProducts() {
        productGrid.innerHTML = ''; // Clear existing products
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product-item';
            productElement.dataset.id = product.id;
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
            `;
            productElement.addEventListener('click', () => addProductToCart(product));
            productGrid.appendChild(productElement);
        });
    }

    /**
     * Adds a product to the cart and updates the display.
     * @param {object} product - The product object to add.
     */
    function addProductToCart(product) {
        cart.push(product);
        renderCart();
    }

    /**
     * Renders the current cart items and calculates the total.
     */
    function renderCart() {
        cartItemsList.innerHTML = ''; // Clear existing cart items
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'cart-item';
            listItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
            `;
            cartItemsList.appendChild(listItem);
            total += item.price;
        });

        cartTotalSpan.textContent = total.toFixed(2);
    }

    /**
     * Handles the checkout process.
     */
    function handleCheckout() {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        
        // In a real application, you would process the payment here.
        alert(`Thank you for your purchase! Total: $${cartTotalSpan.textContent}`);

        // Clear the cart
        cart = [];
        renderCart();
    }

    // --- Initial Setup ---

    renderProducts();
    checkoutButton.addEventListener('click', handleCheckout);
});