console.log("Up and running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardID;
var cardsInPlay = [];
cardsInPlay.push(cards[cardID]);

var checkForMatch = function (){
if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){alert("You found a match");
} else {alert("Sorry, try again")}
//if (cardsInPlay[0] === cardsInPlay[1]){
//	console.log("You found a match!");
//}else{console.log("Sorry, try again.");
//}
};
var flipCard = function (cardID){
checkForMatch();
// if else was originally here
console.log("User flipped " + cards[cardID].rank);
console.log(cards[cardID].cardImage);
console.log(cards[cardID].suit);
};
flipCard(0);
flipCard(2);

//console.log("User flipped" + cardOne);
//console.log("User flipped" + cardThree);

//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

//var cards = ["queen", "queen", "king", "king"];
//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped king");
//cardsInPlay.push(cardOne);
//console.log("User flipped queen");
//alert('User flipped queen');

//cardsInPlay.push(cards[cardID]);