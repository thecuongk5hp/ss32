class Information {
    constructor(id, name, phone, address) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
}
function getUserInput() {
    let id = prompt("Nhập ID:");
    let name = prompt("Nhập tên:");
    let phone = prompt("Nhập số điện thoại:");
    let address = prompt("Nhập địa chỉ:");

    let userInformation = new Information(id, name, phone, address);

    console.log("Thông tin cá nhân:");
    console.log("ID: " + userInformation.id);
    console.log("Tên: " + userInformation.name);
    console.log("Số điện thoại: " + userInformation.phone);
    console.log("Địa chỉ: " + userInformation.address);
}
getUserInput();

