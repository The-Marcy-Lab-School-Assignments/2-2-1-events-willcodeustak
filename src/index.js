const accumulatorResult = (e) => {
	let counter = document.querySelector('#results').textContent;
	let button = document.querySelector('#add-one');

	// document.querySelector('#add-one')
	button.addEventListener('click', (e) => {
		counter++;
		// console.log(counter);
		const results = document.querySelector('#results');
		results.textContent = counter;
	});
};
accumulatorResult();
