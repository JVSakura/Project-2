const helpers = require("./helpers.js")

exports.createItem = async (req, res, Items) => {
  console.log(`{"endpoint":"CREATE_ITEM","message":"request-received"}`)

  // Validate the request
  try {

    helpers.validateCreateItemRequest(req.body)

  } catch (err) {
    console.log(err)

    res.status(400)
    res.send({
    code: 400,
    status: "Bad Request",
    message: "invalid request param"
    })

    return
  }

  // Check if there is an existing item
  let existingItem;
  try {

    existingItem = await Items.findOne({
      where: {
        name: req.body.name,
      }
    })

  } catch (err) {
    console.log(err)

    res.status(500)
    res.send({
      code: 500,
      status: "Internal Server Error",
    })

    return
  }

  // If the item exists, throw an error
  if (existingItem != null) {
    console.log("item already exists")

    res.status(409)
    res.send({
      code: 409,
      status: "Conflict",
      message: "item already exists",
    })

    return
  }

  // Create item
  let createRes;
  try {

    createRes = await Items.create({
      name: req.body.name,
      link: req.body.link,
      price: req.body.price,
      userId: req.body.userId,
      recipient: req.body.recipient,
    })

  } catch(err) {
    console.log(err)

    res.status(500)
    res.send({
      code: 500,
      status: "Internal Server Error",
    })

    return
  }

  // Handle success
  res.status(200)
  res.send({
    code: 200,
    status: "Ok",
    message: "item created",
    item: {
      id: createRes.id,
      name: req.body.name,
      link: req.body.link,
      price: req.body.price,
      userId: req.body.userId,
      recipient: req.body.recipient,
    }
  })

}
  


exports.listItems = async (req, res, Items) => {
  console.log(`{"endpoint":"LIST_ITEMS","message":"request-received"}`)

  let items;
  try {

      items = await Items.findAll()

  } catch (err) {
      console.log(err)

      res.status(500)
      res.send({
      code: 500,
      status: "Internal Server Error",
      })

      return
  }

  // Handle success
  res.status(200)
  res.send({
      code: 200,
      status: "Ok",
      message: "items listed",
      items: items,
  })

}

exports.deleteItem = async (req, res, Items) => {
  console.log(`{"endpoint":"DELETE_ITEM","message":"request-received"}`)

  try {

      items = await Items.destroy({
      where: {
          id: req.params.id,
      }
      })

  } catch (err) {
      console.log(err)

      res.status(500)
      res.send({
      code: 500,
      status: "Internal Server Error",
      })

      return
  }

  // Handle success
  res.status(200)
  res.send({
      code: 200,
      status: "Ok",
      message: "item deleted",
  })
}