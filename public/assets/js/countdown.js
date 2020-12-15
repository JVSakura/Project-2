class Countdown {

    constructor(container) {
        console.log("Countdown")

        const element = document.createElement("div")
        element.id = "countdown"
        container.appendChild(element)

        const subContainer = document.createElement("div")
        subContainer.id = "countdown-subcontainer"
        element.appendChild(subContainer)

        const header = document.createElement("div")
        header.id = "countdown-header"
        header.innerHTML = "Countdown"
        subContainer.appendChild(header)

        const subheader = document.createElement("span")
        subheader.id = "countdown-subheader"
        subheader.innerHTML = "To Christmas"
        subContainer.appendChild(subheader)

        const timestamp = document.createElement("div")
        timestamp.id = "countdown-timestamp"
        timestamp.innerHTML = "00:00:00:00"
        subContainer.appendChild(timestamp)

        const labels = document.createElement("div")
        labels.id = "countdown-labels"
        labels.innerHTML = "days : hours : minutes : seconds"
        subContainer.appendChild(labels)

        V.add((w, h, sw) => {
            subContainer.style.marginTop = (h - subContainer.clientHeight)/2 + "px"
        })
    }

}