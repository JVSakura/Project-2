exports.validateCreateItemRequest = (body) => {
    console.log(body)
    let errs = ""
    if (body.name == null || body.name == "") {
        errs += "invalid name "
    }
    if (body.link == null || body.link == "") {
        errs += "invalid link "
    }
    if (body.price == null || isNaN(body.price)) {
        errs += "invalid price "
    }
    if (body.userId == null || isNaN(body.userId)) {
        errs += "invalid user id "
    }
    if (errs.length > 0) {
        throw new Error(errs)
    }
}