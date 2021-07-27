let form = document.forms[0]

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  let daat = await fetch('/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: e.target.name.value,
      age: e.target.age.value,
    }),
  })
  location.href = '/'
})
