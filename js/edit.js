var btn_up = document.getElementById('upload');
var btn_ed = document.getElementById('edit');

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
    
    // console.log(newMovie);
    
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
        })

})

let newId = 0;

btn_ed.addEventListener('click', event =>{
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

    let edit_movie = {
        Title: newTitle,
        Director: newDirector,
        Year: newYear,
        Genre: newGenre,
        Synopsis: newSynopsis,
        Poster: newPoster,
        id: newId
    }

    let requestOptions = {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(edit_movie)
    }

    fetch('http://127.0.0.1:5000/movies')
        .then( res => res.json())
        .then( movies => {
            console.log(movies);
            data = movies

    let movie_edit = movies.filter( movie => movie.id == newId);
    let idEdit = movie_edit[0].id;

    fetch(`http://127.0.0.1:5000/movies/edit/${idEdit}`, requestOptions)
        .then( resp => resp.json())
        .catch( error => alert(error))
        .then( data =>{
            console.log("Data is: ", data);
        })
    })
})