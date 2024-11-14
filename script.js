// Sample product data
const products = [
    { id: 1, name: 'Lips', price: 14, image: 'images/lip-gloss.jpg' },
    { id: 2, name: 'Face', price: 18, image: 'images/mascara.jpg' },
    { id: 3, name: 'Eyes', price: 25, image: 'images/foundation.jpg' },
    { id: 4, name: 'Nails', price: 20, image: 'images/blush-palette.jpg' },
    { id: 5, name: 'Skin Care', price: 22, image: 'images/eyeshadow.jpg' },
];
const  categories = [
    { id: 1, name: 'Lips', price: 14, image: 'images/lip-gloss.jpg' },
    { id: 2, name: 'Face', price: 18, image: 'images/mascara.jpg' },
    { id: 3, name: 'Eyes', price: 25, image: 'images/foundation.jpg' },
    { id: 4, name: 'Nails', price: 20, image: 'images/blush-palette.jpg' },
    { id: 5, name: 'Skin Care', price: 22, image: 'images/eyeshadow.jpg' },
];

let cart = [];

// Function to display products
function displayProducts(productArray) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products
    productArray.forEach(product => {
        const productElem = document.createElement('div');
        productElem.className = 'product-item';
        productElem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElem);
    });
}

// Function to add products to cart
function addToCart(id) {
    const product = products.find(prod => prod.id === id);
    cart.push(product);
    document.getElementById('cart-count').textContent = cart.length;
    alert(`${product.name} has been added to your cart.`);
}

// Function to search products
function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
}

// Event listener for search
document.getElementById('search-bar').addEventListener('input', searchProducts);

// Initialize the product display on page load
window.onload = () => {
    displayProducts(products);
};
