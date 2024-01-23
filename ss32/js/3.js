function Student(id, name) {
    this.id = id;
    this.name = name;
}
function getStudentInformation() {
    let numStudents = prompt("Nhập số lượng sinh viên:");
    numStudents = parseInt(numStudents);
    if (isNaN(numStudents) || numStudents <= 0) {
        console.log("Số lượng sinh viên không hợp lệ. Vui lòng nhập số lượng dương.");
        return;
    }
    let studentsArray = [];
    for (let i = 0; i < numStudents; i++) {
        let id = prompt("Nhập ID của sinh viên thứ " + (i + 1) + ":");
        let name = prompt("Nhập tên của sinh viên thứ " + (i + 1) + ":");
        let student = new Student(id, name);
        studentsArray.push(student);
    }
    console.log("\nThông tin của các sinh viên:");
    studentsArray.forEach(function(student, index) {
        console.log("Sinh viên thứ " + (index + 1) + ":");
        console.log("ID:", student.id);
        console.log("Tên:", student.name);
        console.log("\n");
    });
}
getStudentInformation();
