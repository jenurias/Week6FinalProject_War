/*
    Week 6 Final Project
    Create card game: War
    Jennifer Urias
    Promineo Tech
    May 2022
*/

// Create variables for the game 

const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds']
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen','King', 'Ace']
const cardValueMap = {'2' : 2,
                  '3' : 3,
                  '4' : 4,
                  '5' : 5,
                  '6' : 6,
                  '7' : 7,
                  '8' : 8,
                  '9' : 9,
                  '10' : 10,
                  'Jack' : 11,
                  'Queen' : 12,
                  'King' : 13,
                  'Ace' : 14
                }

// Create a class for the cards with all the combos of suits and values 

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

/*
    Create a class for the players utilizing PlayerOne and PlayerTwo for the game
    The score will always start at 0 and playerHand will determine which stack of 
    cards each player has
*/
class Player {
    constructor(name) {
        this.name = name;       
        this.score = 0;         
        this.playerHand = [];   
    }

    addplayerHand  (deck) {
        this.playerHand = deck; 
    }
}

var playerOne = new Player('Lilo');
var playerTwo = new Player('Stitch');

/*
    Create a class for the deck of cards with a way to shuffle and remove a card from the total deck
    utilizing newCard/oldCard during shuffle to decipher what new card to assign a player and which
    card to "burn" once it has been played
*/
class Deck {
    constructor(cards = new newDeck()) {    
        this.cards = cards;
    }
    get numberOfCards() {       
            return this.cards.length; 
    }
    
    shuffleDeck() {                 
        this.numberOfCards
            for (let i = this.numberOfCards - 1; i >= 0; i--) { 
                const newCard = Math.floor(Math.random() * (this.numberOfCards)); 
                const oldCard = this.cards[newCard];        
                this.cards[newCard] = this.cards[i];        
                this.cards[i] = oldCard;                    
            }
    }
}

// Create a new function to create a new deck for each game which will show all 52 card combinations of suits and values
function newDeck() { 
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value); 
        });
    });
}

// Create function to start the game by dealing the cards to both players
function dealNewGame(playerOne, playerTwo) {     
    const deck = new Deck();                
    deck.shuffleDeck();                         
    console.log(deck.cards.length);         
    playerOne.addplayerHand(deck.cards.slice(0, 26));     
    playerTwo.addplayerHand(deck.cards.slice(26)); 
    console.log(playerOne.playerHand.length); 
    console.log(playerTwo.playerHand.length);
}


/*
    Create the rounds of play and loop through until all cards have been dealt and played == cards gone from both decks
    Player with the highest card value wins the round and the total score will be calculated
*/
function endOfRound(playerOne, playerTwo) {
    for (let i = 0; i < 26; i++) {  
        if (cardValueMap[playerOne.playerHand[i].value] > cardValueMap[playerTwo.playerHand[i].value]) { 
            console.log(`${playerOne.name} draws the ${playerOne.playerHand  [i].value} of ${playerOne.playerHand[i].suit}`);
            console.log(`${playerTwo.name} draws the ${playerTwo.playerHand  [i].value} of ${playerTwo.playerHand  [i].suit}`);
            console.log(`${playerOne.name} wins this round!`);
            playerOne.score += 1;
            console.log(`The current score is ${playerOne.score} to ${playerTwo.score} \n`);
        } else if (cardValueMap[playerOne.playerHand [i].value] < cardValueMap[playerTwo.playerHand   [i].value]) { 
            console.log(`${playerOne.name} draws the ${playerOne.playerHand  [i].value} of ${playerOne.playerHand[i].suit}`);
            console.log(`${playerTwo.name} draws the ${playerTwo.playerHand  [i].value} of ${playerTwo.playerHand  [i].suit}`);
            console.log(`${playerTwo.name} wins this round!`);
            playerTwo.score += 1;
            console.log(`The current score is ${playerOne.score} to ${playerTwo.score} \n`);
        } else {
            console.log(`It's a tie, try again!`); 
            console.log(`The current score is ${playerOne.score} to ${playerTwo.score} \n`) ;
        }
    }
}

// Create function to show results of the game
function endResults(playerOne, playerTwo) {
    if (playerOne.score > playerTwo.score) {
        console.log (`${playerOne.name} is the winner winner chicken dinner!`);
    } else if (playerOne.score < playerTwo.score) {
        console.log (`${playerTwo.name} wins the match!`);
    } else {
        console.log('No winners tonight. Game ended in a tie!');
    }
}

// In order for the game to print, we have to call the functions
dealNewGame(playerOne, playerTwo);
endOfRound(playerOne, playerTwo);
endResults(playerOne, playerTwo);
