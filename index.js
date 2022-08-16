'use strict';

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

//Implement Sectet number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
//document.querySelector('.number').textContent = secretNumber;

/*const x = function(){
    console.log(23);
}*/

//handling click events

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    /*document.querySelector('.message').textContent = 'Correct Number. Congratulations🎆🎊';*/

    //when there is no input
    if(!guess){ //logic gate = true or false
    //document.querySelector('.message').textContent =
    //'🙄 No Number!';
    displayMessage('🙄 No Number!'); //new one
    
    //when player wins
    } else if(guess === secretNumber){
       // document.querySelector('.message').textContent = 'Correct Number. Congratulations🎆🎊';
        displayMessage('Correct Number. Congratulations🎆🎊');
        
        //display number
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }else if(guess !== secretNumber) {
        if (score > 1){
            //document.querySelector('.message').textContent = guess > secretNumber ? 'Too High😜' : 'Too Low☹';
            displayMessage(guess > secretNumber ? 'Too High😜' : 'Too Low☹');
            score--;
        document.querySelector('.score').textContent = score;}else{
            //document.querySelector('.message').textContent = 'You lost the game 😨😭';
            displayMessage('You lost the game 😨😭');
            document.querySelector('.score').textContent = 0;
        }
    }

        //when guess is too High
    /*}else if (guess > secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = 'Too High😜';
        //score = score - 1;
        score--;
        document.querySelector('.score').textContent = score;}else{
            document.querySelector('.message').textContent = 'You lost the game 😨😭';
            document.querySelector('.score').textContent = 0;
        }

        //when guess is too Low
    }else if (guess < secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = 'Too Low☹';
        //score = score - 1;
        score--;
        document.querySelector('.score').textContent = score;}else{
            document.querySelector('.message').textContent = 'You lost the game 😨😭';
            document.querySelector('.score').textContent = 0;
        }
    }*/
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //document.querySelector('.message').textContent = 'Start Guessing...';
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    
    document.querySelector('body').style.backgroundColor = 'rgb(4, 73, 69)';
    document.querySelector('.number').style.width = '15rem';
});

