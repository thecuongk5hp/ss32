let products = [
    {id: 1, name: 'iPhone 12', price: 20000000},
    {id: 2, name: 'iPhone 11', price: 10000000},
    {id: 3, name: 'Samsung Note 10', price: 50000000},
];
function sortProductsByPrice() {
    products.sort(function(a, b) {
        return a.price - b.price;
    });
}
function displayProducts() {
    console.log("Danh sách sản phẩm sau khi sắp xếp:");
    products.forEach(function(product) {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}`);
    });
}
sortProductsByPrice();
displayProducts();
