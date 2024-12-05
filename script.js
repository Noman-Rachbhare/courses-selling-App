// Elements
const courseList = document.getElementById('course-list');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const clearCartButton = document.getElementById('clear-cart');

// State
let cart = [];
let total = 0;

// Preloaded courses
const preloadedCourses = [
    { name: 'JavaScript Basics', price: 50 },
    { name: 'HTML & CSS', price: 40 },
    { name: 'React for Beginners', price: 60 },
    { name: 'Node.js Essentials', price: 70 },
    { name: 'Python for Data Science', price: 80 }
];

// Load preloaded courses
preloadedCourses.forEach(course => addCourseToList(course.name, course.price));

// Add course to list
function addCourseToList(name, price) {
    const li = document.createElement('li');
    li.innerHTML = `
        ${name} - $${price.toFixed(2)}
        <button onclick="addToCart('${name}', ${price})">Add to Cart</button>
        <button onclick="removeFromCart('${name}', ${price})">Remove from Cart</button>
    `;
    courseList.appendChild(li);
}

// Add to cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Remove from cart
function removeFromCart(name, price) {
    const index = cart.findIndex(item => item.name === name && item.price === price);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

// Clear cart
function clearCart() {
    cart = [];
    updateCart();
}

// Update cart
function updateCart() {
    cartCount.textContent = cart.length;
    total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
}

// Attach event listener to the clear cart button
clearCartButton.addEventListener('click', clearCart);
