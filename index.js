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