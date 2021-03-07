const form = document.getElementById('form')

form.addEventListener('submit', e => {
  const icon = document.getElementById('icon')
  const text = document.getElementById('text')
  const btn = document.getElementById('btn')
  const email = document.getElementById('email')
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  if (!pattern.test(email.value)) {
    e.preventDefault()
    text.innerText = 'Pleace provide valid email'
    icon.classList.add('danger')
    email.classList.add('danger')
  }

  if (email.value.length <= 0) {
    e.preventDefault()
    text.innerText = 'The email field is empty. Please enter an email'
    icon.classList.add('danger')
    email.classList.add('danger')
  }
})
