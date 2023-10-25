// display questions
function updateUserData(id, question) {
    const userDataDiv = document.getElementById("userData");
    // Create new elements for ID and Question
    const idElement = document.createElement("p");
    const questionElement = document.createElement("p");
    // Set the content for the new elements
    idElement.textContent = `User ID: ${id}`;
    questionElement.textContent = `User Question: ${question}`;
    // Append the new elements to the userDataDiv
    userDataDiv.appendChild(idElement);
    userDataDiv.appendChild(questionElement);
  }
  function showUserInfo(data) {
    const userId = data.user.id;
    const apiUrl = `http://thesis.test/api/question/${userId}`;
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("API Response Data:", data); // Log the API response for inspection
        if (data.length >= 1) {
          for (let i = 0; i < data.length; i++){
            const id = data[i].id;
            const question = data[i].question;
            updateUserData(id, question); 
          }
        } else {
          console.error("Data is missing 'id' or 'question' properties:", data);
        }
        // let id = data[0].id;
        // let question = data[0].question;
        // console.log(id);
        // console.log(question);
      })
      .catch(error => {
        console.error("Fetch Error:", error);
      });
  }
  