document.getElementById('submitLogin').addEventListener('click', event => {
  event.preventDefault()
  let email = document.getElementById('exampleInputEmail1').value
  let passwordHash = document.getElementById('exampleInputPassword1').value
  axios.get('/api/login', { email, passwordHash })
    .then(data => {
      window.location.replace('/budget.html')
    })
    .catch(err => {
      console.log(err)
    })
})
