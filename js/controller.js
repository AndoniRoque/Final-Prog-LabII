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

        let num = Math.floor(Math.random() * movies.length - 2);

        if (num < 0){
            num = num * -1;
        }
        
        console.log("the random number is: " + num)

        for (let i=0; i < 3; i++){
            console.log(num)
            get_poster(movies[num].Poster)
            main_bar(movies[num].Title, movies[num].Year, movies[num].Director, movies[num].Genre, movies[num].Synopsis);
            num += 1;
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

function main_bar(title, year, director, genre, synopsis, poster){
    console.log("PELICULAS: " + title + year + director + genre + synopsis + poster);
}

function get_poster(image){
    console.log(image)
    let cont = document.createElement('div');
    cont.classList.add('poster_main');

    let img = document.createElement('img');
    img.src = image;
    cont.appendChild(img);

    let c = document.getElementById('main_bar');
    c.appendChild(cont);

}

