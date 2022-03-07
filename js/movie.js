queryString = window.location.search;
urlParams = new URLSearchParams(queryString);
id = urlParams.get('id')

fetch('http://127.0.0.1:5000/movies/'+id)
    .then(response => response.json())
    .then (data => {
        let element = document.getElementById('movie')
        element.innerHTML = `
        <div class ="main_box">
            <div class="media_box">
                <img class="media" src=${data.Poster}>
                <iframe class="trailer" width="560" height="400" src="${data.Trailer}"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="info_box">
            <p>${data.Title}</p>
            <p>${data.Year}</p>
            <p>${data.Director}</p>
            <p>${data.Genre}</p>
            <p>${data.Synopsis}</p>
            <p>${data.Cast}</p>
        `;
})
