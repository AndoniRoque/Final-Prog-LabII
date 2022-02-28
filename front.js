var objUsers = [
	{
		username: "Juan",
		password: "Bajo"
	},
	{
		username: "Carlos",
		password: "Berger"
	},
	{
		username: "Andoni",
		password: "Roque"
	},
    {
		username: "Juancito",
		password: "Fullana"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objUsers.length; i++) {
		if(username == objUsers[i].username && password == objUsers[i].password) {
			window.location.href = "index.html";
			return
		}
	}
	console.log("incorrect username or password")
}

  fetch('http://127.0.0.1:5000/movies/last')
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
