const accumulatorResult = () => {
	//initializing a variable to be equal to the (#results) P-tag's textcontent
	let counter = document.querySelector('#results').textContent;
	//initializing a variable to be equal to button(#add-one)
	let button = document.querySelector('#add-one');
	//                 ^
	//                 |
	//button now holds |

	//connecting addEventListener into button with event type "click",
	//while also  calling function "e" (accumulatorResult)

	button.addEventListener('click', () => {
		// In-Line function to contain new conditions
		//adding +1 to counter each click, and since counter is equal to
		// text content of p tag it will add +1 to the textContent
		counter++;
		//initializing results to equal p tag results which from our accumulator result function ; holds p tag textContent
		const results = document.querySelector('#results');
		//changing the p tag- now "results" to equal counter
		//so whenever button is pressed counter will ++ storing inside textContent for accumulation.
		results.textContent = counter;
	});
};
accumulatorResult();
