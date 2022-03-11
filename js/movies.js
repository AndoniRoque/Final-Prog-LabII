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

fetch('http://127.0.0.1:5000/movies/random')
    .then( res => res.json())
    .then( movies => {

        for (let i=0; i < movies.length; i++){
            let cont = document.getElementById('titles');
            cont.innerHTML +=
                `<div class="movie_info">
                    <div class="poster_main">
                        <a href="./movie.html?id=${movies[i].id}">
                            <img src=${movies[i].Poster}>
                        </a>
                    </div>
                    <div class="tech_file" onclick="redirect(${movies[i].id})">
                        <a href="./movie.html?id=${movies[i].id}">
                            <p> <strong> Title: </strong>${movies[i].Title}</p>
                            <p> <b> Director: </b> ${movies[i].Director} </p>
                            <p> <b> Year: </b> ${movies[i].Year}</p>
                            <p> <b> Synopsis: </b> ${movies[i].Synopsis}</p>
                        </a>
                    </div>
                </div>
                <hr class="separator">`
        }
    })

=======
>>>>>>> be258a09fd9e79f0f9259c38baa7c575c3c58886
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
