//login
const formlogin = document.querySelector('.login');
async function login(event) {
  event.preventDefault();
  const formData = new FormData(formlogin);
  try {
    const response = await fetch('http://thesis.test/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    if (!response.ok) {
      // Handle server-side errors with an error message
      const errorText = await response.text();
      console.error(`Error: ${response.status} - ${errorText}`);
      return;
    }
    // Assuming the response contains user information, you can parse it
    const data = await response.json();
    showUserInfo(data);
    showUserrubrics(data);
    userdrp(data);
    rubricsdrp(data);
  } catch (error) {
    console.error(error);
  }
}
formlogin.addEventListener('submit', login);
