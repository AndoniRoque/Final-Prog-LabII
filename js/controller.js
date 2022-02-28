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

        for (let i=0; i < 5; i++){
            console.log(num);
            main_bar(movies[num].Title, movies[num].Year, movies[num].Director, movies[num].Genre, movies[num].Synopsis, movies[num].Poster);
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
    let cont = document.createElement('div');
    cont.classList.add('movie_info');

    let cont_img = document.createElement('div');
    cont_img.classList.add('poster_main');

    let img = document.createElement('img');
    img.src = poster;
    cont_img.appendChild(img);

    let hTitle = document.createElement('h2');
    hTitle.classList.add('Title');

    let txtTitle = document.createTextNode('Title: ' + title);

    let info = document.createElement('div');
    info.classList.add('tech_file');

    let pYear = document.createElement('p');
    let txtYear = document.createTextNode("Year: " + year);
    let pDirector = document.createElement('p');
    let txtDirector = document.createTextNode("Director: " + director);
    let pGenre = document.createElement('p');
    let txtGenre = document.createTextNode("Genre: " + genre);
    let pSynopsis = document.createElement('p');
    let txtSnopsis = document.createTextNode("Synopsis: " + synopsis);

    hTitle.appendChild(txtTitle);
    pDirector.appendChild(txtDirector);
    pYear.appendChild(txtYear);
    pGenre.appendChild(txtGenre);
    pSynopsis.appendChild(txtSnopsis);

    info.appendChild(hTitle);
    info.appendChild(pDirector);
    info.appendChild(pYear);
    info.appendChild(pGenre);
    info.appendChild(pSynopsis);

    cont.appendChild(cont_img);
    cont.appendChild(info);
    let c = document.getElementById('titles');
    c.appendChild(cont);
}