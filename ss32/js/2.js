function Information(id, name, phone, address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
}
let information = new Information(1, "Thế Cường", "0966109666", "Hải Phòng");
console.log("Thông tin ban đầu:");
console.log("ID:", information.id);
console.log("Tên:", information.name);
console.log("Số điện thoại:", information.phone);
console.log("Địa chỉ:", information.address);
delete information.address;
information.email = "john.doe@example.com";
console.log("\nThông tin sau khi xóa address và thêm email:");
console.log("ID:", information.id);
console.log("Tên:", information.name);
console.log("Số điện thoại:", information.phone);
console.log("Email:", information.email);
