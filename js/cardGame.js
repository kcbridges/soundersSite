
//==============================
// creation of all game objects
//==============================
	function card(name, team, attackPower, defensePower) {
		this.name = name;
		this.team = team;
		this.attackPower = attackPower;
		this.defensePower = defensePower;
	}

	function team(teamName, logo) {
		this.teamName = teamName;
		//I may decide to give each team some interesting factors that would mean that whichever team
		//your player is from impacts the game (for example, coaching prowess, location, etc. 
		//for now, this object will simply include team name.
	}

	sounders = new team("Seattle Sounders FC");
	galaxy = new team("LA Galaxy");
	nyrb = new team("New York Red Bulls");

	clint = new card("Clint Dempsey", sounders, 10, 6);
	yedlin = new card("DeAndre Yedlin", sounders, 6, 8);
	omarGonzalez = new card("Omar Gonzalez", galaxy, 3, 10);
	landonDonovan = new card("Landon Donovan", galaxy, 8, 8);
	thierryHenry = new card("Thierry Henry", nyrb, 10, 5);

	//=============================
	//end creation of game objects
	//=============================


function Deck() {
	this.cards = [clint, yedlin, omarGonzalez, landonDonovan, thierryHenry];
	this.count = function() {
      return this.cards.length;
  }
}


function Player() {
	this.hand = [];
}

stdDeck = new Deck();


var player1 = new Player();
var player2 = new Player();

while (player1.hand.length <= 2) {
    player1.hand.push(stdDeck.cards[Math.floor(Math.random() * stdDeck.count())]);
  }
while (player2.hand.length <= 2) {
    player2.hand.push(stdDeck.cards[Math.floor(Math.random() * stdDeck.count())]);
  }













