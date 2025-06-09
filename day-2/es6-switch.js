let role = "admin";

switch (role) {
  case "admin":
    console.log("Quản trị viên");
    break;
  case "editor":
    console.log("Biên tập viên");
    break;
  case "viewer":
    console.log("Người xem");
    break;
  case "member":
    console.log("Thành viên");
    break;
  case "user":
    console.log("Người dùng");
    break;
  default:
    console.log("Khách");
}