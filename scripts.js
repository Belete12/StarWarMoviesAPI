// Function to fetch and display Star Wars movies
// Fetch data from the API
// Parse the JSON data from the response
// Extract the list of movies


async function getStarWars() {
    try {     
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error(error);
    }
  }
  