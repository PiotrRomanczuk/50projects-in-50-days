const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

API_URL = 'https://icanhazdadjoke.com/';

jokeBtn.addEventListener('click', generateJoke);

// FetchData();
generateJoke();

// Fetching data by ASYNC//AWAIT

async function generateJoke() {
	const config = {
		headers: {
			Accept: 'application/JSON',
		},
	};

	const res = await fetch(API_URL, config);
	const data = await res.json();

	jokeEl.innerHTML = data.joke;
}

// Fetching data with Fetch => then => catch

// function FetchData() {
// 	const config = {
// 		headers: {
// 			Accept: 'application/JSON',
// 		},
// 	};

// 	fetch(API_URL, config)
// 		.then((response) => response.json())
// 		// .then((data) => console.log(data))
// 		// .then((data) => console.log(data.joke))
// 		.then((data) => {
// 			jokeEl.innerHTML = data.joke;
// 		})
// 		.catch((err) => console.log(err));
// }
