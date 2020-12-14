axios.get('/api/items')
  .then(({ data: items }) => {
    console.log(items)
    items.forEach(item => {
      let itemElem = document.createElement('div')
      itemElem.innerHTML = `
        <li class="list-group-item">${item.name}</li>
        <li class="list-group-item">${item.action}</li>
        <li class="list-group-item">${item.price}</li>
        <div>
          <button class="btn btn-success done" data-id=${item.id}>✓</button>
          <button class="btn btn-danger delete" data-id=${item.id}>X</button>
        </div>
      `
      document.getElementById('items').append(itemElem)
    })
    let totalBudget = 0
    items.forEach(({ price }) => {
      totalBudget += price
    })
    console.log(totalBudget)
    document.getElementById('month-budget').innerText = '$' + totalBudget
  })
  .catch(err => console.log(err))

document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()
  let listObj = {
    name: document.getElementById('name').value,
    action: document.getElementById('description').value,
    price: document.getElementById('price').value
  }
  axios.post('/api/items', listObj)
    .then(({ data: newItem }) => {
      console.log(newItem)
      let itemElem = document.createElement('ul')
      itemElem.innerHTML = `
        <li class="list-group-item">${newItem.name}</li>
        <li class="list-group-item">${newItem.action}</li>
        <li class="list-group-item">${newItem.price}</li>
        <div>
          <button class="btn btn-success done" data-id=${newItem.id}>✓</button>
          <button class="btn btn-danger delete" data-id=${newItem.id}>X</button>
        </div>
      `
      document.getElementById('items').append(itemElem)
      document.getElementById('name').value = ''
      document.getElementById('description').value = ''
      document.getElementById('price').value = ''
    })
    .catch(err => console.log(err))
})


document.addEventListener('click', event => {

  if (event.target.classList.contains('delete')) {
    axios.delete(`/api/items/${event.target.dataset.id}`)
      .then(() => {
        window.location.reload()
      })
    console.log(event.target)
  }
})
document.addEventListener('click', event => {

  if (event.target.classList.contains('done')) {
    event.target.parentNode.parentNode.style.color = "green"
  }
})



