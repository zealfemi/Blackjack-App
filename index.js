let player = {
    name: "Mackie",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector(".cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent +=  + cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        isAlive = true
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        player.chips += 20
        hasBlackJack = true
    } else {
        message = "You're out of the game!";
        player.chips -= 10
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard()
    sum += thirdCard
    cards.push(thirdCard)

    renderGame()
    }
}

function getRandomCard() {
    let randomNum = Math.floor( Math.random() * 13 ) + 1
    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}
