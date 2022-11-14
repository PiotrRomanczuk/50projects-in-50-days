// Using getElementById to get one particular DOM object of exact ID
// Using querySelectorAll to get all DOM objects of the same class

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// Checking the lenght of querySelector "circles" by console logging it
// console.log(circles.length);

let currentActive = 1;

next.addEventListener('click', () => {
	currentActive++;

	if (currentActive > circles.length) {
		currentActive = circles.length;
	}

	update();
	// console.log(currentActive);
});

prev.addEventListener('click', () => {
	currentActive--;

	if (currentActive < 1) {
		currentActive = 1;
	}

	update();
	// console.log(currentActive);
});

function update() {
	circles.forEach((circle, idx) => {
		if (idx < currentActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});

	const actives = document.querySelectorAll('.active');

	// console.log(progress.style.width);
	// (actives.length / circles.length) * 100;
}
