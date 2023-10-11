const orderForm = document.getElementById('orderForm');
const categoriesContainer = document.querySelector('.categories');
const productsContainer = document.querySelector('.products');
const productsInfoContainer = document.querySelector('.product-info');
const productName = document.getElementById('product-name'); 
const buyButton = document.querySelector('.buy-button');

const categoriesExample = [
    { id: 1, name: 'Clothes', products: ['Dresses', 'Tops', 'Jeans', 'Skirts'] },
    { id: 2, name: 'Shoes', products: ['Boots', 'Loafers', 'Sneakers', 'Ballet flats'] },
    { id: 3, name: 'Accessories', products: ['Belts', 'Gloves', 'Necklaces', 'Rings'] }
];
function generateCategories() {
    categoriesExample.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category.name;
        categoryButton.addEventListener('click', () => showProducts(category.products));
        categoriesContainer.appendChild(categoryButton);
    });
}
function showProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.textContent = product;
        productItem.addEventListener('click', () => showProductInfo(product));
        productsContainer.appendChild(productItem);
    });
}
function showProductInfo(product) {
    productName.textContent = `Product: ${product}`;
    productsInfoContainer.style.display = 'block';
    buyButton.addEventListener('click', () => showOrderForm());
}

function showOrderForm() {
    orderForm.style.display = 'block';
}

function confirmOrder() {
    const customerName = document.getElementById('customerName').value;
     const city = document.getElementById('city').value;
    const shippingLocation = document.getElementById('shippingLocation').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const quantity = document.getElementById('quantity').value;
    const orderComment = document.getElementById('orderComment').value;

    if (customerName && city && shippingLocation && paymentMethod && quantity) {
      
        alert(` Order Information:
            Product: ${productName.textContent}
            Customer: ${customerName}
            City: ${city}
            Shipping Location: ${shippingLocation}
            Payment Method: ${paymentMethod}
            Quantity: ${quantity}
            Comment: ${orderComment}
        `);
orderForm.reset();
        orderForm.style.display = 'none';
        productsInfoContainer.style.display = 'none';
    } else {
        alert('Please fill in all required fields.');
    }
}

generateCategories();

