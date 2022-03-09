queryString = window.location.search;
urlParams = new URLSearchParams(queryString);
genre = urlParams.get('genre');

fetch('http://127.0.0.1:5000/movies')
    .then(response => response.json())
    .then (data => {
        console.log("el genero buscado es:" + genre);
        
        for (i=0; i < data.length; i++){
            console.log("genero en data:" + data[i].Genre);
            if (genre == data[i].Genre){
                let cont = document.getElementById('genre_result');
                cont.innerHTML += `
                    <a href="./movie.html?id=${data[i].id}">
                        <div class=tech_file_genre> 
                            <p> <strong> Title: </strong> ${data[i].Title}.</p>
                            <p> <strong> Year: </strong> ${data[i].Year}. </p>
                            <p> <strong> Directed by: </strong> ${data[i].Director}. </p>
                        </div>
                    </a>
                `
            }
        }
    })