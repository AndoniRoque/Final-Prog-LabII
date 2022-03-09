queryString = window.location.search;
urlParams = new URLSearchParams(queryString);
id = urlParams.get('id')

fetch('http://127.0.0.1:5000/directors/'+id)
    .then(response => response.json())
    .then (data => {
        let element = document.getElementById('director')
        element.innerHTML = `
        <div class ="main_box">
            <div class="media_box">
                <img class="media" src=${data.picture}>
            </div>
            <div class="info_box">
                <p>${data.name}</p>
                <p>${data.birth}</p>
                <p>${data.country}</p>
            </div>
        `;
})
