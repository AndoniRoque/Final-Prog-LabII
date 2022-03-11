fetch('http://127.0.0.1:5000/movies')
    .then( res => res.json())
    .then(movies => {
        fetch('http://127.0.0.1:5000/directors')
            .then( res => res.json())
            .then(directors => {

                let srch_btn = document.getElementById('srch_btn');
                let input = document.getElementById('search');
                let srch_select = document.getElementById('srch_selector');

                let srch_opt = srch_select.value;
                let srch_input = input.value;

                srch_btn.addEventListener('click', event => {
                    console.log('click');
                    console.log(srch_opt);
                    console.log(srch_input);
                    found = false;
                    i = 0;
                    
                    if (srch_opt === "Directors"){
                        console.log(srch_opt);
                        while (found == false){
                            if (srch_input == directors[i].name){
                                alert("El director que buscas es: " + directors[i].name);
                                id = directors[i].id;
                                console.log(id);
                                location.href="./director.html?id=" + id;
                                found = true;
                            }
                            else{
                                i++;
                                if (i == movies.length){
                                    alert("The director you are looking for doesn't exist");
                                }
                            }
                        }
                    }
                    else if(srch_opt === "Genres"){
                        while (found == false){
                            if (srch_input == movies[i].Genre){
                                genre = movies[i].Genre;
                                location.href="./genres.html?genre=" + genre;
                                found = true;
                            }
                            else{
                                i++;
                                if (i == movies.length){
                                    alert("The genre you are looking for doesn't exist");
                                }
                            }
                        }
                    }
                    else if( srch_opt === "Movies"){
                        while (found == false) {
                            if (srch_input == movies[i].Title){
                                id = movies[i].id;
                                location.href="./movie.html?id=" + id;
                                found = true;
                            }
                            else {
                                i++;
                                if (i == movies.length){
                                    alert("The movie you are looking for doesn't exist");
                                }
                            }
                        }

                    }
                })
            })
        
    })