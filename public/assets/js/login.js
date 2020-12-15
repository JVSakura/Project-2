class Login {

    constructor(container, dashboard) {
        console.log("Login")

        this.element = document.createElement("div")
        this.element.id = "login"
        container.appendChild(this.element)

        this.subContainer = document.createElement("div")
        this.subContainer.id = "login-subcontainer"
        this.element.appendChild(this.subContainer)

        this.pad = document.createElement("div")
        this.subContainer.appendChild(this.pad)

        this.tile = document.createElement("div")
        this.tile.id = "login-tile"
        this.subContainer.appendChild(this.tile)

        this.email = document.createElement("input")
        this.email.id = "login-email"
        this.email.className = "login-input"
        this.email.type = "input"
        this.email.placeholder = "Enter Email"
        this.tile.appendChild(this.email)

        this.password = document.createElement("input")
        this.password.id = "login-pass"
        this.password.className = "login-input"
        this.password.type = "password"
        this.password.placeholder = "Enter Password"
        this.tile.appendChild(this.password)

        this.message = document.createElement("div")
        this.message.id = "login-message"
        this.message.innerHTML = "Invalid Email or Password"
        this.tile.appendChild(this.message)

        this.submitBtn = document.createElement("button")
        this.submitBtn.id = "login-submit"
        this.submitBtn.className = "btn"
        this.submitBtn.innerHTML = "Login"
        this.tile.appendChild(this.submitBtn)

        this.submitBtn.onclick = (e) => {
            console.log("logging in...")

            axios.post("http://localhost:8000/api/login", {
                email: this.email.value,
                password: this.password.value,
            })
            .then(res => {
                console.log(res)

                if (res.status == 200) {
                    console.log(res.data.user)
                    dashboard.show(res.data.user)
                } else {
                    this.showMessage()
                }

            })
            .catch(err => {
                console.log(err)
                this.showMessage()
            })
        }

        V.add((w, h, sw) => {
            this.subContainer.style.marginTop = (h-this.tile.clientHeight)/2 + "px"
        })
    }

    showMessage = () => {
        const tween = new Tween(this.message, .5, {opacity:1, ease:Sine.easeOut})
    }

    show = () => {
        console.log("show")

        this.message.style.opacity = 0;

        this.element.style.width = "100%"
        this.element.style.height = "100%"
        this.element.style.opacity = 0;
        const tween1 = new Tween(this.element, .5, {opacity:1, ease:Sine.easeOut})

        this.pad.style.height = "100px"
        const tween2 = new Tween(this.pad, .5, {height:0, ease:Expo.easeOut})
    }

    hide = () => {
        console.log("hide")
    }

    reset = () => {
        console.log("reset")

        this.element.style.width = "1px"
        this.element.style.height = "1px"
        this.element.style.opacity = 0;
    }

}