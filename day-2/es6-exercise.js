// Viết chương trình kiểm tra điểm số học sinh:
let score = 9;

if (score >= 9) {
  console.log("Xuất sắc");
}
else if (score >= 7) {
  console.log("Giỏi");
}
else if (score >= 5) {
  console.log("Khá");
}
else if (score >= 3) {
  console.log("Trung bình");
}
else {
  console.log("Yếu");
}

// Viết vòng lặp in ra bảng cửu chương 7.
for (let i = 1; i <= 9; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// Tạo hàm square(n) trả về bình phương của n.
function square(n) {
  return n ** n;
}
log("Bình phương của 5 là:", square(5));

// Tạo arrow function isEven(n) trả về true nếu là số chẵn.
const isEven = (n) => n % 2 === 0;
console.log("Số 4 là chẵn:", isEven(4));
