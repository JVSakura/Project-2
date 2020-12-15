class Dashboard {

    constructor(container) {
        console.log("Dashboard")

        this.element = document.createElement("div")
        this.element.id = "dashboard"
        container.appendChild(this.element)

        this.header = document.createElement("div")
        this.header.id = "dashboard-header"
        this.element.appendChild(this.header)

        this.userName = document.createElement("div")
        this.userName.id = "dashboard-user"
        this.userName.innerHTML = "User Name"
        this.header.appendChild(this.userName)

        this.logoutBtn = document.createElement("button")
        this.logoutBtn.id = "dashboard-logout-btn"
        this.logoutBtn.className = "btn"
        this.logoutBtn.innerHTML = "Logout"
        this.header.appendChild(this.logoutBtn)

        this.budget = document.createElement("div")
        this.budget.id = "dashboard-budget"
        this.element.appendChild(this.budget)

        this.overview = document.createElement("div")
        this.budget.appendChild(this.overview)

        this.total = document.createElement("div")
        this.total.id = "dashboard-budget-total"
        this.total.className = "dashboard-overview"
        this.total.innerHTML = "$100.00"
        this.overview.appendChild(this.total)

        this.balance = document.createElement("div")
        this.balance.id = "dashboard-budget-balance"
        this.balance.className = "dashboard-overview"
        this.balance.innerHTML = "$0.00"
        this.overview.appendChild(this.balance)

        this.add = document.createElement("div")
        this.add.id = "dashboard-add"
        this.budget.appendChild(this.add)

        this.itemName = document.createElement("input")
        this.itemName.id = "dashboard-add-item-name"
        this.itemName.className = "dashboard-input"
        this.itemName.type = "input"
        this.itemName.placeholder = "Item Name"
        this.add.appendChild(this.itemName)

        this.itemLink = document.createElement("input")
        this.itemLink.id = "dashboard-add-item-link"
        this.itemLink.className = "dashboard-input"
        this.itemLink.type = "input"
        this.itemLink.placeholder = "Item Link"
        this.add.appendChild(this.itemLink)

        this.recipientName = document.createElement("input")
        this.recipientName.id = "dashboard-add-recipient-name"
        this.recipientName.className = "dashboard-input"
        this.recipientName.type = "input"
        this.recipientName.placeholder = "Recipient Name"
        this.add.appendChild(this.recipientName)

        this.price = document.createElement("input")
        this.price.id = "dashboard-add-price"
        this.price.className = "dashboard-input"
        this.price.type = "input"
        this.price.placeholder = "Item Price ($)"
        this.add.appendChild(this.price)

        this.addBtn = document.createElement("button")
        this.addBtn.id = "dashboard-add-item-btn"
        this.addBtn.innerHTML = "Add"
        this.add.appendChild(this.addBtn)

        this.divider = document.createElement("div")
        this.divider.id = "dashboard-divider"
        this.budget.appendChild(this.divider)

        this.items = document.createElement("div")
        this.items.id = "dashboard-items"
        this.budget.appendChild(this.items)

        this.itemsSubContainer = document.createElement("div")
        this.itemsSubContainer.id = "dashboard-items-subcontainer"
        this.items.appendChild(this.itemsSubContainer)

        this.addBtn.onclick = (e) => {
            console.log("add item")

            // Add the item to the list
            const item = new Item(this.itemsSubContainer, {
                name: this.itemName.value,
                link: this.itemLink.value,
                recipient: this.recipientName.value,
                price: this.price.value,
            })

            // Add the item to the db
            axios.post("http://localhost:8000/api/items", {
                name: this.itemName.value,
                link: this.itemLink.value,
                recipient: this.recipientName.value,
                price: this.price.value,
                userId: this.user.id,
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

             // Reset input fields
             this.itemName.value = ""
             this.itemLink.value = ""
             this.recipientName.value = ""
             this.price.value = ""
        }

        this.logoutBtn.onclick = (e) => {
            window.open("index.html", "_blank")
        }
    }

    show = (user) => {
        console.log("show")

        this.element.style.width = "100%"
        this.element.style.height = "100%"
        this.element.style.opacity = 0;
        const tween1 = new Tween(this.element, .5, {opacity:1, ease:Sine.easeOut})

        this.budgetValue = user.budget;
        this.balanceValue = 0;
        this.user = user;
        this.total.innerHTML = "$" + user.budget;
        this.userName.innerHTML = user.firstName + " " + user.lastName
    }
}