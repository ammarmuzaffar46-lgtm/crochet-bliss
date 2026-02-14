const items = [
    { id: 1, name: "Rose bag with beats", price: 2800, cat: "bags", img: "images/bag1.jpg" },
    { id: 2, name: "Rose bag with chain", price: 2500, cat: "bags", img: "images/bag2.jpg" },
    { id: 3, name: "Puff bag", price: 1800, cat: "bags", img: "images/bag3.jpg" },
    { id: 4, name: "Sunflower", price: 400, cat: "flowers", img: "images/flower1.jpg" },
    { id: 5, name: "2 Rose", price: 1000, cat: "flowers", img: "images/flower2.jpg" },
    { id: 6, name: "Multi flowers", price: 2000, cat: "flowers", img: "images/flower3.jpg" },
    { id: 7, name: "Rose Gajra", price: 850, cat: "gajra", img: "images/gajra1.jpg" },
    { id: 8, name: "Events Gajra", price: 1500, cat: "gajra", img: "images/gajra2.jpg" },
    { id: 9, name: "Bridal deal", price: 2000, cat: "gajra", img: "images/gajra3.jpg" },
    { id: 10, name: "Stars keychain", price: 350, cat: "keychains", img: "images/keychain1.jpg" },
    { id: 11, name: "Flower keychain", price: 450, cat: "keychains", img: "images/keychain2.jpg" },
    { id: 12, name: "Tulip keychain", price: 500, cat: "keychains", img: "images/keychain3.jpg" },
    { id: 13, name: "Bouquet", price: 3500, cat: "gifts", img: "images/gift1.jpg" },
    { id: 14, name: "Bouquet", price: 2200, cat: "gifts", img: "images/gift2.jpg" },
    { id: 15, name: "Bouquet", price: 3000, cat: "gifts", img: "images/gift3.jpg" }



];

let cart = [];

function loadProducts(list) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = "";
    list.forEach(p => {
        grid.innerHTML += `
            <div class="card">
                <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/250?text=Handmade'">
                <h3>${p.name}</h3>
                <p>Rs. ${p.price}</p>
                <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}
function addToCart(id) {
    const product = items.find(item => item.id === id);
    cart.push(product);
    updateCart();
    document.getElementById('cart-sidebar').classList.add('open');
}

function updateCart() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total');
    const countEl = document.getElementById('cart-count');
    
    container.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        container.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>Rs. ${item.price}</span>
            </div>
        `;
    });
    
    totalEl.innerText = total;
    countEl.innerText = cart.length;
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
}

function filterItems(cat, btn) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (cat === 'all') loadProducts(items);
    else loadProducts(items.filter(i => i.cat === cat));
}
window.onload = () => loadProducts(items);

