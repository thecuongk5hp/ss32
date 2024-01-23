function Product(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
let product1 = new Product(1, "XIaomi", 7099, 2);
console.log("Thông tin của sản phẩm:");
console.log("ID:", product1.id);
console.log("Tên:", product1.name);
console.log("Giá:", product1.price);
console.log("Số lượng:", product1.quantity);
