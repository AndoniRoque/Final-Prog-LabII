let directors = [];

fetch('http://127.0.0.1:5000/')
    .then( res => res.json())
    .then( movies => {

        pos = movies.length - 1;
        i = 0;

        while (pos >= 0){
            i++;
            if (i <= 10){
                latest_added(movies[pos].Title, movies[pos].Year, movies[pos].Poster);
                pos = pos - 1;
            }
            else{
                break;
            }
        }
    })

fetch('http://127.0.0.1:5000/directors')
    .then( res => res.json())
    .then( _directors => {
        directors = _directors;
    })

fetch('http://127.0.0.1:5000/movies/random')
    .then( res => res.json())
    .then( movies => {

        for (let i=0; i < movies.length; i++){
            const movie = movies[i]
            let cont = document.getElementById('titles');

            const director = directors.filter(_director => {
                return _director.id == movie.director_id
            })[0]

            cont.innerHTML +=
                `<div class="movie_info">
                    <div class="poster_main">
                        <a href="./movie.html?id=${movie.id}">
                            <img src=${movie.Poster}>
                        </a>
                    </div>
                    <div class="tech_file" onclick="redirect(${movie.id})">
                        <a href="./movie.html?id=${movie.id}">
                            <p class="hide"> <strong> Title: </strong>${movie.Title}</p>
                            <p> <b> Director: </b> ${director.name} </p>
                            <p> <b> Year: </b> ${movie.Year}</p>
                            <p> <b> Synopsis: </b> ${movie.Synopsis}</p>
                        </a>
                    </div>
                </div>
                <hr class="separator">`
        }
    })

function latest_added(title, year, poster){

    let cont = document.createElement('div');
    cont.classList.add('latest_added');

    let pTitle = document.createElement('p');
    pTitle.classList.add('movie_title');

    let img = document.createElement('img');
    img.classList.add('poster');
    img.src = poster;
    cont.appendChild(img);

    let txtTitle = document.createTextNode(title + " (" + year +")");

    pTitle.appendChild(txtTitle);
    cont.appendChild(pTitle);

    let c = document.getElementById('side_bar');
    c.appendChild(cont);
}
