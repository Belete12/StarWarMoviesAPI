async function getCharacterDetails() {
    try {     
      const response = await fetch('https://swapi.dev/api/people/');
      const data = await response.json();
      const movies = data.results;

      movies.forEach(movie => {
        var table = document.createElement('thead');
        const mylist = movie.films;
        const type = mylist.join(",\n");
        table.innerHTML = `<tr><td>${movie.name} </td> <td>${movie.gender} </td> <td>${movie.homeworld} </td> <td>${type} </td> </tr>`
        document.getElementById('movieList').appendChild(table);
      });
    } catch (error) {
      console.error(error);
    }
  } // end function
  

  getCharacterDetails();