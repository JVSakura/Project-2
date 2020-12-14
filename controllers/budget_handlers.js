const helpers = require("./helpers.js")

exports.createbudget = async (req, res, budget) => {
  console.log(`{"endpoint":"CREATE_ITEM","message":"request-received"}`)

  // Validate the request
  try {

    helpers.validateCreatebudgetRequest(req.body)

  } catch (e) {
    console.log(err)

    res.send({
    code: 400,
    status: "Bad Request",
    message: "invalid request param"
    })

    return
  }

  // Check if there is an existing item
  // let existingbudget;
  // try {

  //   existingbudget = await budget.findOne({
  //     where: {
  //       name: req.body.name,
  //     }
  //   })

  // } catch (err) {
  //   console.log(err)

  //   res.send({
  //     code: 500,
  //     status: "Internal Server Error",
  //   })

  //   return
  // }

  //line 23 - 41 checks if adding duplicate records

  // If the item exists, throw an error
  // if (existingItem != null) {
  //   console.log("item already exists")

  //   res.send({
  //     code: 409,
  //     status: "Conflict",
  //     message: "item already exists",
  //   })

  //   return
  // }

  // Create item
  let createRes;
  try {

    createRes = await budget.create({
      date: req.body.date,
      description: req.body.description,
      expenseType: req.body.expenseType,
      value: req.body.value,
    })

  } catch(err) {
    console.log(err)

    res.send({
      code: 500,
      status: "Internal Server Error",
    })

    return
  }

  // Handle success
  res.send({
    code: 200,
    status: "Ok",
    message: "item created",
    item: {
      id: createRes.id,
      date: req.body.date,
      description: req.body.description,
      expenseType: req.body.expenseType,
      value: req.body.value,
    }
  })

}
  


exports.listbudget = async (req, res, budget) => {
  console.log(`{"endpoint":"LIST_BUDGET","message":"request-received"}`)

  let budget;
  try {

      budget = await budget.findAll()

  } catch (err) {
      console.log(err)

      res.send({
      code: 500,
      status: "Internal Server Error",
      })

      return
  }

  // Handle success
  res.send({
      code: 200,
      status: "Ok",
      message: "budget listed",
      budget: budget,
  })

}

exports.deletebudget = async (req, res, budget) => {
  console.log(`{"endpoint":"DELETE_BUDGET","message":"request-received"}`)

  try {

      budget = await budget.destroy({
      where: {
          id: req.params.id,
      }
      })

  } catch (err) {
      console.log(err)

      res.send({
      code: 500,
      status: "Internal Server Error",
      })

      return
  }

  // Handle success
  res.send({
      code: 200,
      status: "Ok",
      message: "budget deleted",
  })
}