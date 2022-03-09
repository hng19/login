// Khi người dùng bấm vào nút “Login” thì thực hiện các chức năng sau:

// Kiểm tra xem có trường nào được để trống hay không, nếu có thì thông báo (sử dụng alert)
// Nếu người dùng đã điền đầy đủ thông tin thì kiểm tra với thông tin đó, có trùng với user nào không?
// Nếu có thông báo “Đăng nhập thành công”
// Nếu không thông báo “Tài khoản hoặc mật khẩu không chính xác”
const users = [
    {
        username: "bob",
        password: "123"
    },
    {
        username: "alice",
        password: "456"
    },
]
const inputUserName = document.getElementById("username")
const inputPassword = document.getElementById("password")
const btnLogin = document.getElementById("btn-login")

btnLogin.addEventListener("click", function () {
    //B1: Lấy ra nội dung trong ô input
    let username = inputUserName.value
    let password = inputPassword.value

    //B2: Kiểm tra nội dung
    if (!username || !password) { //username=="" || password == ""
        alert("Nội dung không được để trống")
        return
    }

    //B3: Kiểm tra đăng nhập
    let isLogin = ""
    for (let i = 0; i < username.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            isLogin = true
            break
        }
        else{
            isLogin =false
            break
        }
    }

    isLogin
        ? alert("Đăng nhập thành công")
        : alert("Tài khoản hoặc mật khẩu không chính xác")
})