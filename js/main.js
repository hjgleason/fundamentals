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
var cardId = [];
var cardsInPlay = [];
var cardImage = [];
var checkForMatch = function (){
	cardsInPlay.push("cards[cardId].rank");
	console.log(cardsInPlay);
	if(cardsInPlay.length === 2){if (cardsInPlay[0] === cardsInPlay[1]){alert("You found a match");
	}else {alert("Sorry, try again")};
}
	//if (cardsInPlay[0] === cardsInPlay[1]){
	//	console.log("You found a match!");
	//}else{console.log("Sorry, try again.");
	//}
	};
var flipCard = function (){
	var cardId = this.getAttribute("data-id");
	this.setAttribute("src" , cards[cardId].cardImage);
	checkForMatch();
	// if else was originally here
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};
var createBoard = function (){
	for (var i = 0; i < cards.length; i++){
	var cardElement = document.createElement("img");
	cardElement.setAttribute("src","images/back.png");
	cardElement.setAttribute("data-id", i);
	//data-id.setAttribute('index',i);
	document.getElementsByTagName("cardElement")[0];
	//document.getElementsByClassName("game-board")[0].appendChild("cardElement");
	//document.getElementsByClassName('game-board')[0].appendChild('cardElement');
	document.getElementsByClassName("gameBoard")[0];
	gameBoard.appendChild(cardElement);
	cardElement.addEventListener("click",flipCard);
	//addEventListeners("click", flipCard);
	};
};
createBoard();

//cardImage.setAttribute("cardImage", cards);
//console.log(cards[cardId].cardImage);

//flipCard(0);
//flipCard(2);

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