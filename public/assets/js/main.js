const init = () => {
    console.log("init")

    const app = document.getElementById("app")

    const v = new V()
    V.add((w, h, sw) => {
        app.style.height = h
    })

    const dashboard = new Dashboard(app)
    const login = new Login(app, dashboard)
    const header = new Header(app, login)
    const countdown = new Countdown(app)

    V.resize()
}
window.onload = init;