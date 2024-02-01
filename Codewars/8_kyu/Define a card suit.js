// Description:
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// My Solution:
function defineSuit(card) {
    return card[card.length - 1] === '♣' ? 'clubs' :
        card[card.length - 1] === '♦' ? 'diamonds' :
            card[card.length - 1] === '♥' ? 'hearts' : 'spades'
}

