async function getCharacterDetails() {
    try {     
      const response = await fetch('https://swapi.dev/api/people/');
      const data = await response.json();
      const movies = data.results;

      movies.forEach(movie => {
        var table = document.createElement('thead');
        table.innerHTML = `<tr><td>${movie.name} </td> </tr>`
        document.getElementById('ListItem').appendChild(table);
      });
    } catch (error) {
      console.error(error);
    }
  } // end function
  

  getCharacterDetails();