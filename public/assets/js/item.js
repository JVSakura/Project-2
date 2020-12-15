class Item {
    constructor(container, item) {
        this.element = document.createElement("div")
        this.element.className = "dashboard-item"
        container.appendChild(this.element)

        this.subContainer = document.createElement("div")
        this.subContainer.className = "dashboard-item-subcontainer"
        this.element.appendChild(this.subContainer)

        this.itemName = document.createElement("div")
        this.itemName.className = "dashboard-item-name"
        this.itemName.innerHTML = item.name
        this.subContainer.appendChild(this.itemName)

        this.itemLink = document.createElement("div")
        this.itemLink.className = "dashboard-item-link"
        this.itemLink.innerHTML = "<a href='" + item.link + "'>View Item</a>"
        this.subContainer.appendChild(this.itemLink)

        this.itemRecipient = document.createElement("div")
        this.itemRecipient.className = "dashboard-item-recipient"
        this.itemRecipient.innerHTML = item.recipient
        this.subContainer.appendChild(this.itemRecipient)

        this.itemPrice = document.createElement("div")
        this.itemPrice.className = "dashboard-item-price"
        this.itemPrice.innerHTML = "$" + item.price
        this.subContainer.appendChild(this.itemPrice)
    }
}