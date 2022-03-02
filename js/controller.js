fetch('http://127.0.0.1:5000/movies')
    .then( res => res.json())
    .then( movies => {
        clear_node('side_bar');

        pos = movies.length - 1;
        i = 0;

        while (pos >= 0){
            i = i + 1;
            if (i <= 10){
                // console.log(movies[pos].id);
                latest_added(movies[pos].Title, movies[pos].Year, movies[pos].Poster);
                pos = pos - 1;
            }
            else{
                break;
            }
        }

        let num = Math.floor(Math.random() * movies.length - 1);

        if (num < 0){
            num = num * -1;
        }

        for (let i=0; i < 6; i++){
            let cont = document.getElementById('titles');
            cont.innerHTML +=
                `<div class="movie_info">
                    <div class="poster_main">
                        <img src=${movies[num].Poster}>
                    </div>
                    <div class="tech_file">
                        <p> <strong> Title: </strong>${movies[num].Title}</p> 
                        <p> <b> Director: </b> ${movies[num].Director} </p>
                        <p> <b> Year: </b> ${movies[num].Year}</p>
                        <p> <b> Synopsis: </b> ${movies[num].Synopsis}</p>
                    </div>
                </div>` 
            num++
            console.log(num)
            if (num >= movies.length){
                num = 0;
            }
            console.log(num)
        }
    })

function clear_node(id){
    let c = document.getElementById(id);
    while (c.firstChild){
        c.removeChild(c.firstChild);
    }
}

function latest_added(title, year, poster){
    // console.log("Pelicula: ", title, " del año ", year, ". URL: ", poster);    

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