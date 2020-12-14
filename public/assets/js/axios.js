axios.get('/api/budget')
  .then(( {data: budget}) => {
    console.log(budget)
    budget.forEach(budget => {
      let budgetElem = document.createElement('div')
      budgetElem.innerHTML = `
        <p>${budget.date}</p>
        <p>${budget.description}</p>
        <p>${budget.expenseType}</p>
        <p>${budget.value}</p>
      `
      document.getElementById('budget').append(budgetElem)
    })
  })
  .catch(err => console.log(err))

  document.getElementById('addbudget').addEventbudgetener('click', event => {
    event.preventDefault()
    let budgetObj = {
      date: document.getElementById('date').value,
      description: document.getElementById('description').value,
      expenseType: document.getElementById('expenseType').value,
      value: document.getElementById('value').value
    }
    axios.post('/api/budget', budgetObj)
      .then(({data: newbudget}) => {
        console.log(newbudget)
        let budgetElem = document.createElement('div')
        budgetElem.innerHTML = `
        <p>${budget.date}</p>
        <p>${budget.description}</p>
        <p>${budget.expenseType}</p>
        <p>${budget.value}</p>
      `
        document.getElementById('budget').append(budgetElem)
        document.getElementById('date').value = ''
        document.getElementById('description').value = ''
        document.getElementById('expenseType').value = ''
        document.getElementById('value').value = ''
      })
      .catch(err => console.log(err))
  })