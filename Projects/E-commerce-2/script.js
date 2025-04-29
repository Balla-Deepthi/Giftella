const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 1000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Headphones", category: "electronics", price: 200, image: "https://via.placeholder.com/150" },
    { id: 3, name: "T-Shirt", category: "clothing", price: 30, image: "https://via.placeholder.com/150" }
];

const productContainer = document.getElementById("products");
const categoryFilter = document.getElementById("category");

function displayProducts(filter = "all") {
    productContainer.innerHTML = "";
    let filteredProducts = products.filter(product => filter === "all" || product.category === filter);
    
    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button onclick="addToWishlist(${product.id})">Wishlist</button>
        `;
        productContainer.appendChild(productElement);
    });
}

categoryFilter.addEventListener("change", () => displayProducts(categoryFilter.value));

displayProducts(); // Initial load
let cart = [];
let wishlist = [];

function addToCart(id) {
    let item = products.find(p => p.id === id);
    cart.push(item);
    updateCartCount();
}

function addToWishlist(id) {
    let item = products.find(p => p.id === id);
    if (!wishlist.some(p => p.id === id)) {  // Prevent duplicates
        wishlist.push(item);
    }
    updateWishlistCount();
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function updateWishlistCount() {
    document.getElementById("wishlist-count").innerText = wishlist.length;
}
function addToCart(id) {
    let item = products.find(p => p.id === id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function addToWishlist(id) {
    let item = products.find(p => p.id === id);
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlist.some(p => p.id === id)) {  // Prevent duplicates
        wishlist.push(item);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
}

function updateWishlistCount() {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    document.getElementById("wishlist-count").innerText = wishlist.length;
}

// Ensure counts are updated when the page loads
updateCartCount();
updateWishlistCount();


