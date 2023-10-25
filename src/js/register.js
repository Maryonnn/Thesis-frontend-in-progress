//register
const formRegister = document.querySelector('.register');
async function register(event) {
  event.preventDefault();
  const formData = new FormData(formRegister);
  try {
    const response = await fetch('http://thesis.test/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData))
    });
    if (!response.ok) {
      // Handle non-OK response
      const errorText = await response.text();
      console.log(`Error: ${response.status} - ${errorText}`);
      return;
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
formEl.addEventListener('submit', register);
