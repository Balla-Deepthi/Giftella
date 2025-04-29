let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const wishlistContainer = document.getElementById("wishlist-items");

function displayWishlist() {
    wishlistContainer.innerHTML = "";

    wishlist.forEach((item, index) => {
        const wishlistItem = document.createElement("div");
        wishlistItem.classList.add("product");
        wishlistItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <button onclick="addToCartFromWishlist(${index})">Add to Cart</button>
            <button onclick="removeFromWishlist(${index})">Remove</button>
        `;
        wishlistContainer.appendChild(wishlistItem);
    });
}

function addToCartFromWishlist(index) {
    let item = wishlist[index];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    removeFromWishlist(index);
}

function removeFromWishlist(index) {
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    displayWishlist();
}

displayWishlist();
