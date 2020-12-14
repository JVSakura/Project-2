const path = require('path')
const express = require("express")
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const port = 8000
const routes = require("./controllers/routes.js")

const models = require("./models")
models.sequelize.sync()
const budget = models.budget
const Users = models.users

app.listen(port, () => {
  console.log("listening on http://localhost:" + port)
})

routes.create(app, budget, Users)

//starts server - listen on end point for api request for front end
// line 15 listens for requests, 19 routes them, according to routes.js