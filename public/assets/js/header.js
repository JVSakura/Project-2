class Header {

    constructor(container, login) {
        console.log("Header")

        const element = document.createElement("div")
        element.id = "header"
        container.appendChild(element)

        const loginBtn = document.createElement("button")
        loginBtn.id = "login-btn"
        loginBtn.className = "btn"
        loginBtn.innerHTML = "Login"
        element.appendChild(loginBtn)

        loginBtn.onclick = (e) => {
            console.log("login")
            login.show()
        }
    }

}