'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	if (!guess) {
		//no input
		document.querySelector('.message').textContent = '⛔️ No Number!';
		//players win
	} else if (guess === secretNumber) {
		document.querySelector('.message').textContent = '🎉 Correct Number!';

		document.querySelector('.number').textContent = secretNumber;

		//setting highscore as score
		document.querySelector('.highscore').textContent = score;

		//changin body color
		document.querySelector('body').style.backgroundColor = '#60b347';
		//increase the width of number
		document.querySelector('.number').style.width = '30rem';
	} else if (guess > secretNumber) {
		//if guess is so high
		if (score > 1) {
			document.querySelector('.message').textContent = '📈 Too High!';
			score--;
			//changin body color
			document.querySelector('body').style.backgroundColor = 'red';
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = '😢 You lost the game!';
			document.querySelector('.score').textContent = 0;
		}
		//when guess is low
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '📉 Too Low!';
			score--;
			document.querySelector('body').style.backgroundColor = 'red';
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = '😢 You lost the game!';
			document.querySelector('.score').textContent = 0;
		}
	}
});
document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	document.querySelector('.message').textContent = 'Start Guessing...';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.score').textContent = score;
	document.querySelector('.highscore').textContent = 0;
	document.querySelector('.number').textContent = '?';
	// document.querySelector('.input').textContent=
	//'' because we want empty value
	document.querySelector('.guess').value = '';
});
