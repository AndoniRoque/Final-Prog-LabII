var btn_up = document.getElementById('upload');

btn_up.addEventListener('click', event =>{
    event.preventDefault();
    let formData = document.getElementById('formData');
    let inputs = formData.getElementsByTagName('input');

    let newTitle = inputs[0].value;
    let newDirector = inputs[1].value;
    let newYear = inputs[2].value;
    let newGenre = inputs[3].value;
    let newSynopsis = inputs[4].value;
    let newPoster = inputs[5].value;
    
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