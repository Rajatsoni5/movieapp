const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b1a0bf1fcmsh918ee15c7eb4136p1af368jsn271a3b59b342',
		'X-RapidAPI-Host': 'movies115.p.rapidapi.com'
	}
};

const main = document.getElementById("section");
const form = document.getElementById("form")	
const search = document.getElementById("query")

function run(){
	fetch('https://movies115.p.rapidapi.com/cartaz', options)
	.then(response => response.json())
	.then(response => console.log(response.Array))

	.catch(err => console.error(err));
}
run()