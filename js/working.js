/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

let openedCards = []
const cards = document.querySelectorAll('.card')
for (let card of cards){
		card.addEventListener("click", function(){
		card.classList.add('open', 'show')

		if (openedCards.length <= 1){
			openedCards.push(card.children[0].classList.value)
		}else{
			if(openedCards[0].localeCompare(card.children[0].classList.value) != 0){
			openedCards.shift()
			openedCards.push(card.children[0].classList.value)
		}
		}

		if(openedCards.length > 1 && openedCards[0].localeCompare(openedCards[1]) == 0){
			let matched = document.querySelectorAll(`.${openedCards[1].substring(3,openedCards[1].length)}`)
			matched.forEach(function(element,index){
				element.parentElement.classList.add('match')
			})
			openedCards.length = 0
		}else{

			//card.classList.remove('open', 'show')
		}







		/*if(openedCards[0] === openedCards[1]){
			card.classList.add('match')
		}
*/
		/*if (openedCards.length <= 1){
			openedCards.push(card.children[0])
		}else{
			//openedCards.push(card.children[0])
			if(openedCards.includes(card.children[0])){
			// match both cards in the list and empty the list
				card.classList.add('match')
		}else{
			//remove display and empty the list
			//document.querySelectorAll(openedCards[0]).parent.remove('open', 'show')
			card.classList.add('open', 'show');
		}
				//openedCards.length = 0
		}*/
		console.log("after local compare")
		console.log(openedCards[1])
		console.log(openedCards)
		console.log(openedCards.length)
		console.log("number of clicks")
		console.log(event.detail)
	})
}
