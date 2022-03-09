const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

fetch('http://127.0.0.1:5000/movies/'+id)
    .then(response => response.json())
    .then (movie => {
        fetch('http://127.0.0.1:5000/directors/'+movie.id)
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
                <p>${movie.Title}</p>
                <p>${movie.Year}</p>
                <p id="director">
                    <a href="./director.html?id=${director.id}">${director.name}</a>
                </p>
                <p>${movie.Genre}</p>
                <p>${movie.Synopsis}</p>
                <p>${movie.Cast}</p>
            `;
        })
    })
