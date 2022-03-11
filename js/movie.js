const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

fetch('http://127.0.0.1:5000/movies/'+id)
    .then(response => response.json())
    .then (movie => {
        fetch('http://127.0.0.1:5000/directors/'+movie.director_id)
        .then(response => response.json())
        .then (director => {
            let element = document.getElementById('movie')
            element.innerHTML = `
            <div class ="main_box">
                <div class="media_box">
                    <img class="media" src=${movie.Poster}>
                    <iframe class="trailer" width="560" height="400" src="${movie.Trailer}"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="info_box">
                <div class=buttons>
                <button id="edit_btn" class="btns"> Edit Movie </button>
                <button id="del_btn" class="btns"> Delete Movie </button>
                </div>
                <p>${movie.Title}</p>
                <p>${movie.Year}</p>
                <p id="director">
                    <a href="./director.html?id=${director.id}">${director.name}</a>
                </p>
                <p>${movie.Genre}</p>
                <p>${movie.Synopsis}</p>
                <p>${movie.Cast}</p>
            `;
            let edit_btn = document.getElementById('edit_btn');

            edit_btn.addEventListener('click', event => {
                console.log(event);
                location.href="edit.html?id=" + id;
            })

            let del_btn = document.getElementById('del_btn');

            del_btn.addEventListener('click', event => {
                let requestOptions = {
                    method: 'DELETE',
                    headers: {'Content-type': 'application/json'}
                }
                let confirm_sign = confirm("You are about to delete this movie from the site, are you sure?");

                if (confirm_sign){
                    fetch('http://127.0.0.1:5000/movies/' + id, requestOptions)
                        .then( resp => resp.json())
                        .catch( error => alert(error))
                        .then( data => {
                            alert("The movie has been deleted");
                        })
                }
            })
        })
    })

