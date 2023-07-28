async function fetchAndDisplayUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const users = data.slice(0, 5);

    const nameElement = document.getElementById("name");
    nameElement.innerHTML = "";

    users.forEach((user) => {
      const name = user.name;
      const nameElement = document.createElement("p");
      nameElement.textContent = `Hai ${name}`;
      document.getElementById("name").appendChild(nameElement);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    const nameElement = document.getElementById("name");
    nameElement.textContent = "Error fetching data:";
  }
}

fetchAndDisplayUsers();
