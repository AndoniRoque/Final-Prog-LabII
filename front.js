// Loop through Array of Objects
var objPeople = [
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

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			window.location.href = "index.html";
			return
		}
	}
	console.log("incorrect username or password")
}
