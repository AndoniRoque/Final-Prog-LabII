const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

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
    let newURL = inputs[4].value;
    let newCast = inputs[5].value;
    let newOp = inputs[6].value;
    
    let newMovie = {
        Title: newTitle, 
        Year: newYear,
        director_id: id_director(newDirector),
        Genre: newGenre,
        Synopsis: newSynopsis,
        Poster: newPoster,
        Trailer: newURL,
        Cast: newCast,
        Opinion: newOp
    }
        
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
            alert("New movie uploaded successfuly");
        })

})

let newId = id;

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
        Director: id_director(newDirector),
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

function id_director(director){
    if (director == "John Hughes") {
        return 0;
    }
    else if (director == "Steven Spielberg") {
        return 1;
    }
    else if (director == "David Lynch") {
        return 2;
    }
    else if (director == "Wong Kar-Wai") {
        return 3;
    }
    else if (director == "Ridley Scott") {
        return 4;
    }
    else if (director == "Jerry Zucker") {
        return 5;
    }
    else if (director == "Zack Snyder") {
        return 6;
    }
    else if (director == "Steven Soderbergh") {
        return 7;
    }
    else if (director == "Chad Stahelski") {
        return 8;
    }
    else if (director == "Jason Goode") {
        return 9;
    } 
}