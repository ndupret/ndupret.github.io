// Simulasi data produk telur
const eggProducts = [
    { id: 1, name: 'Telur Bentes', price: 14000, image: 'jk.jpg', whatsappNumber: '6281556614462' },
    { id: 2, name: 'Telur Utuh', price: 23000, image: 'sd.jpg', whatsappNumber: '6281556614462' },
    // Tambahkan produk lain sesuai kebutuhan
];

// Fungsi untuk menampilkan produk pada halaman
function displayProducts() {
    const productsContainer = document.getElementById('products');

    eggProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Harga: Rp ${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price}, '${product.whatsappNumber}')">Pesan</button>
        `;

        productsContainer.appendChild(productCard);
    });
}

function addToCart(productName, productPrice, whatsappNumber) {
    const message = `Saya ingin memesan ${productName} dengan harga Rp ${productPrice}.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}

// Panggil fungsi displayProducts saat DOM sudah dimuat
document.addEventListener('DOMContentLoaded', function () {
    displayProducts();
});
