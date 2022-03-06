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
                    <div class="poster_main" onclick="redirect()">
                        <img src=${movies[num].Poster}>
                    </div>
                    <div class="tech_file" onclick="redirect(${movies[num].id})">
                        <p> <strong> Title: </strong>${movies[num].Title}</p> 
                        <p> <b> Director: </b> ${movies[num].Director} </p>
                        <p> <b> Year: </b> ${movies[num].Year}</p>
                        <p> <b> Synopsis: </b> ${movies[num].Synopsis}</p>
                    </div>
                </div>
                <hr class="separator">` 
            num++
            console.log(num)
            if (num >= movies.length){
                num = 0;
            }
            console.log(num)
        }

        let srch_btn = document.getElementById('srch_btn');
        let input = document.getElementById('search');
        let srch_select = document.getElementById('srch_selector');

        let srch_opt = srch_select.options[srch_select.selectedIndex].value;
        let srch_input = input.value;

        srch_btn.addEventListener('click', event => {
            found = false;
            i=0;
            console.log(srch_opt);
            if (srch_opt === "Directors"){
                while (found == false){
                    if (srch_input == movies[i].Director){
                        console.log("El director que buscas es: " + movies[i].Director);
                        found = true;
                    }
                    else{
                        i++;
                    }
                }
            }
            else if(srch_opt === "Genres"){
                while (found == false){
                    if (srch_input == movies[i].Genre){
                        console.log("El genero que buscas es: " + srch_input);
                        console.log("Podemos ofrecerte las siguientes peliculas en ese genero:");
                        for (t = 0; t < movies.length; t++){
                            if (srch_input == movies[t].Genre){
                                console.log(movies[t].Title);
                            }
                        }
                        found = true;
                    }
                    else{
                        i++;
                    }
                }
            }
            else if( srch_opt === "Movies"){
                while (found == false) {
                    if (srch_input == movies[i].Title){
                        console.log("La pelicula que buscas es: " + movies[i].Title);
                        found = true;
                    }
                    else {
                        i++;
                    }
                }

            }
        })
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

function redirect(id){
    window.location.href="front.html";
}