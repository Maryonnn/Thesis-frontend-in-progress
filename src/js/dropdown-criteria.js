//dropdown rubrics
function rubricsdrp(data) {
    const userId = data.user.id;
    const apiUrl = `http://thesis.test/api/rubrics/${userId}`;
  
    fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("API Response Data:", data); 
      if (data.length >= 1) {
        drpdownrubrics(data); a
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  
  function drpdownrubrics(data) {
    const dropdown = document.createElement("select");
  
    for (let i = 0; i < data.length; i++) {
      const option = document.createElement("option");
      option.text = data[i].rubrics; 
      option.value = data[i].id; 
      dropdown.appendChild(option);
    }
  
    const container = document.getElementById("dropdownrubrics");
    container.appendChild(dropdown);
  }