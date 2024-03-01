let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;

function renderGame()
{ 

    document.getElementById("card").textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        document.getElementById("card").textContent += cards[i] + " ";
    }
    document.getElementById("sum").textContent = "Sum: " + sum;
     if(sum <= 20){
        document.getElementById("message").textContent = "Do you want to draw a new card ?";
     }
     else if(sum === 21){
         hasBlackJack = true;
        document.getElementById("message").textContent = "You've got Blackjack!";
        document.getElementById("player").textContent = "Congratulations";
     }
     else{
         isAlive = false;
        document.getElementById("message").textContent = "You're out of the game!";
        document.getElementById("player").textContent = "Game Over";
     }

}

function newCard(){
    if(isAlive === true && hasBlackJack === false) {
    cards.push(getRandomCard());
    sum += cards[cards.length - 1];
    renderGame();
    }
    
}

function startGame(){
    document.getElementById("player").textContent = "";
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
     renderGame();
}

function getRandomCard(){
    let x = Math.floor(Math.random() * 13) + 1;
    if(x === 1) return 11;
    else if(x > 10) return 10;
    else return x;
}

