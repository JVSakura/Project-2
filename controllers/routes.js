const budgetHandlers = require("./budget_handlers.js")
const usersHandlers = require("./users_handlers.js")

exports.create = (app, budget, Users) => {

  // CreateItem 
  app.post("/api/budget", (req, res) => {
    budgetHandlers.createItem(req, res, budget)
  })

  // ListItems
  app.get("/api/budget", (req, res) => {
    budgetHandlers.listItems(req, res, budget)
  })

  // DeleteItem 
  app.delete("/api/budget/:id", (req, res) => {
    budgetHandlers.deleteItem(req, res, budget)
  })

  // Login
  app.get("/api/login", (req, res) => {
    usersHandlers.login(req, res, Users)
  })

  // CreateUser
  app.post("/api/users", (req, res) => {
    usersHandlers.createUser(req, res, Users)
  })

  // UpdateUser
  app.put("/api/users", (req, res) => {
  })

}