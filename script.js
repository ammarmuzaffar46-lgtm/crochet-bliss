// Data as seen in the images
const database = [
    { id: 1, name: "Rose bag with beats", price: 2800, cat: "Bags", img: "images/bag1.jpg" },
    { id: 2, name: "Rose bag with chain", price: 2500, cat: "Bags", img: "images/bag2.jpg" },
    { id: 3, name: "Puff bag", price: 1800, cat: "Bags", img: "images/bag3.jpg" },
    { id: 4, name: "Sunflower", price: 400, cat: "Flowers", img: "images/flower1.jpg" },
    { id: 5, name: "2 Rose", price: 1000, cat: "Flowers", img: "images/flower2.jpg" },
    { id: 6, name: "Multi flowers", price: 2000, cat: "Flowers", img: "images/flower3.jpg" },
    { id: 7, name: "Rose Gajra", price: 850, cat: "Gajras", img: "images/gajra1.jpg" },
    { id: 8, name: "Events Gajra", price: 1500, cat: "Gajras", img: "images/gajra2.jpg" },
    { id: 9, name: "Bridal deal", price: 2000, cat: "Gajras", img: "images/gajra3.jpg" },
    { id: 10, name: "Stars keychain", price: 350, cat: "Keychains", img: "images/keychain1.jpg" },
    { id: 11, name: "Flower keychain", price: 450, cat: "Keychains", img: "images/keychain2.jpg" },
    { id: 12, name: "Tulip keychain", price: 500, cat: "Keychains", img: "images/keychain3.jpg" },
    { id: 13, name: "Bouquet", price: 3500, cat: "Gifts", img: "images/gift1.jpg" },
    { id: 14, name: "Bouquet", price: 2200, cat: "Gifts", img: "images/gift2.jpg" },
    { id: 15, name: "Bouquet", price: 3000, cat: "Gifts", img: "images/gift3.jpg" }
];

let myBasket = [];

// Load Items
window.onload = () => { displayProducts(database); };

function displayProducts(arr) {
    const grid = document.getElementById('productDisplay');
    grid.innerHTML = arr.map(item => `
        <div class="card">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <span class="price-tag">Rs. ${item.price}</span>
            <button class="buy-btn" onclick="addToBasket('${item.name}', ${item.price})">Add to Cart</button>
        </div>
    `).join('');
}

// 1. Working Search Bar
function searchFn() {
    let val = document.getElementById('mainSearch').value.toLowerCase();
    let filtered = database.filter(i => i.name.toLowerCase().includes(val));
    displayProducts(filtered);
}

// 2. Working Categories
function filterItems(cat, el) {
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
    el.classList.add('active');
    
    let filtered = (cat === 'all') ? database : database.filter(i => i.cat === cat);
    displayProducts(filtered);
}

// 3. Working Cart
function openCart() {
    document.getElementById('sideCart').classList.toggle('active');
}

function addToBasket(n, p) {
    myBasket.push({ n, p });
    renderBasket();
}

function renderBasket() {
    document.getElementById('count-badge').innerText = myBasket.length;
    const list = document.getElementById('cartList');
    const totalDisp = document.getElementById('totalPrice');
    
    let total = myBasket.reduce((s, i) => s + i.p, 0);
    totalDisp.innerText = "Rs. " + total;

    if(myBasket.length === 0) {
        list.innerHTML = '<p class="empty">No items yet.</p>';
    } else {
        list.innerHTML = myBasket.map(i => `
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; padding:10px; background:#fcf6f4; border-radius:10px;">
                <span>${i.n}</span>
                <strong>Rs. ${i.p}</strong>
            </div>
        `).join('');
    }
}

// 4. WhatsApp Order
function whatsappOrder() {
    if(myBasket.length === 0) return alert("Select some items first!");
    let msg = `New Order from Crochet Bliss! 🌸\nItems: ${myBasket.map(x => x.n).join(", ")}\nTotal: Rs. ${myBasket.reduce((s, i) => s + i.p, 0)}`;
    window.open(`https://wa.me/923180535144?text=${encodeURIComponent(msg)}`);
}