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

      }); //endfor loop
    } catch (error) {
      console.error(error);
    }
  } // end function

  getCharacterDetails();

  //Filiter actors Name

  function displayText()  {
    const input = document.getElementById("SearchName");

    const table = document.getElementById("movieList");

    const filterData = input.value.toUpperCase();

    const actorName = table.getElementsByTagName("tr");

    for (let i = 0; i < actorName.length; i++) {

      const tableData = actorName[i].getElementsByTagName("td")[0];

      if (tableData) {
        const data= tableData.textContent || tableData.innerText;

        if(data.toUpperCase().indexOf(filterData) > -1){

          actorName[i].style.display = "";
        }
        else{
          actorName[i].style.display = "none";
      }    
      } //end if
    }//end forloop
    } //end Func



