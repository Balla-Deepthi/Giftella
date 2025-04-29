let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

function displayCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("product");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    totalPrice.innerText = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function checkout() {
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}

displayCart();
