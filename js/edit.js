var btn_up = document.getElementById('upload');

btn_up.addEventListener('click', event =>{
    event.preventDefault();
    let formData = document.getElementById('formData');
    let inputs = formData.getElementsByTagName('input');
    let select_d = document.getElementById('director');
    let select_g = document.getElementById('genre');

    let newTitle = inputs[0].value;
    let newDirector = select_d.options[select_d.selectedIndex].value;
    let newYear = inputs[1].value;
    let newGenre = select_g.options[select_g.selectedIndex].value;
    let newSynopsis = inputs[2].value;
    let newPoster = inputs[3].value;
    
    let newMovie = {
        Title: newTitle,
        Director: newDirector,
        Year: newYear,
        Genre: newGenre,
        Synopsis: newSynopsis,
        Poster: newPoster
    }
    
    console.log(newMovie);
    
    let requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newMovie)
    }

    fetch('http://127.0.0.1:5000/movies', requestOptions)
        .then(resp => resp.json())
        .catch( error => alert(error))
        .then(datos =>{
            console.log(datos);
            // btn_up.click(event);
        })

})