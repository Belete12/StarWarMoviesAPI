// Function to fetch and display Star Wars movies
// Fetch data from the API
// Parse the JSON data from the response
// Extract the list of movies

async function getStarWars() {
    try {     
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();
      const movies = data.results;

      movies.forEach(movie => {
        var table = document.createElement('thead');
        table.innerHTML = `<tr><td>${movie.title} </td> <td>${movie.title} </td> </tr>`
        document.getElementById('movieList').appendChild(table);
      });
    } catch (error) {
      console.error(error);
    }
  } // end function
  

  getStarWars();