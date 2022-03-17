// Users "Data base"

var users = [
	{
		id: "0",
		username: "Juan",
		password: "Bajo"
	},
	{
		id: "1",
		username: "Carlos",
		password: "Berger"
	},
	{
		id: "2",
		username: "Andoni",
		password: "Roque"
	},
    {
		id: "3",
		username: "Juancito",
		password: "Fullana"
	}
]

//Login system

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < users.length; i++) {
		if(username == users[i].username && password == users[i].password) {
			window.location.href = "movies.html";
			return
		}
	}
	console.log("incorrect username or password")
}
//Creates the public mode with the 10 latest added movies

  fetch('http://127.0.0.1:5000/')
           .then( response => response.json())
           .then (data => {
			   data.forEach(element => {
				let grid = document.getElementById("grid")
				grid.innerHTML +=
				`<div class="poster">
					<img class="poster__img" src="${element.Poster}">
					<div class="poster__overlay poster__overlay--blur">
						<div class="poster__title">${element.Title}</div>
						<div class="poster__description">
							<p>${element.Synopsis}</p>
						</div>
					</div>
				</div>`
			   });
           })
