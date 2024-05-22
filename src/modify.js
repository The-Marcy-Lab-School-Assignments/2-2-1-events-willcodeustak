// These are your event handlers
const clickCounterHandler = (event) => {
	console.log(event.target);
	const button = event.target;
	let clickCount = parseInt(button.dataset.clicks) || 0;
	clickCount++;
	let times = 'time.';
	if (clickCount > 1) {
		times = 'times!';
	}
	button.dataset.clicks = clickCount;
	button.textContent = `I've been clicked ${clickCount} ${times}`;
};

const handleKeydown = (event) => {
	// Get the key code from the event object
	const key = event.code;
	console.log(event);

	// Get the <p> tag with id 'keydown-tracker'
	const trackerElement = document.getElementById('keydown-tracker');

	// Update the text content of the trackerElement
	trackerElement.textContent = `You pressed ${key}`;
};

// We've started this one for you
const handleDelegation = (event) => {
	const resultSpan = document.querySelector('#delegation-result');
	if (event.target.id !== 'delegation') {
		//throw into for loop with condition to meet my requirements.
		resultSpan.textContent = event.target.textContent;
	}
	// 	const handleCountClick = (e) => {
	//   e.target.dataset.count++;
	//   e.target.innerText = e.target.dataset.count;
	// };
	// const counterButton = document.querySelector("#counter");
	// counterButton.addEventListener('click', handleCountClick);

	// const removeListenerButton = document.querySelector("#remove-listener");
	// removeListenerButton.addEventListener('click', (e) => {
	//   // To remove an event listener, provide the event type and the handler
	//   counterButton.removeEventListener('click', handleCountClick);
	// })

	// console.log(event.target.id);

	// if (event.target.matches('button')) {
	// 	resultSpan.textContent = event.target.textContent;
	// }
};

const addNewRandomNumber = () => {
	const li = document.createElement('li');
	li.textContent = Math.random();
	const ulRandom = document.querySelector('#random-numbers');
	ulRandom.append(li);
};

// Select the elements and attach your event handlers inside main
const main = () => {
	const delegationContainer = document.querySelector('#delegation');
	delegationContainer.addEventListener('click', handleDelegation);

	const mainHandler = document.querySelector('#click-button');
	mainHandler.addEventListener('click', clickCounterHandler);

	// const keyDown = document.querySelector('#keydown-tracker');
	// keyDown.addEventListener('keydown', handleKeydown);

	// Add the event listener to the body for keydown events
	document.body.addEventListener('keydown', handleKeydown);

	const buttonInLine = document.querySelector('#inline-example');
	buttonInLine.addEventListener('click', clickCounterHandler);
	//does not matter that button is used elsewhere
	//we are personally selecting #inline-examples buttons
	const button = document.querySelector('#add-random-num');
	button.addEventListener('click', addNewRandomNumber);

	// const removerButton = document.querySelector('#remove');
	// removerButton.addEventListener('click', handleDelegation);
	// removerButton.removeEventListener('click', handleDelegation);
	// const removeListenerButton = document.querySelector('#remove');
	// removeListenerButton.addEventListener('click', handleDelegation);
	// // To remove an event listener, provide the event type and the handler
	// removeListenerButton.removeEventListener('click', handleDelegation);
	document.querySelector('#remove').addEventListener('click', () => {
		const removeButton = document.querySelector('#delegation');
		removeButton.removeEventListener('click', handleDelegation);
	});
};

main();
