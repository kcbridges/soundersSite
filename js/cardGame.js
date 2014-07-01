
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
	skc = new team("Sporting Kansas City");
	fire = new team("Chicago Fire");
	quakes = new team("San Jose Earthquakes")

	clint = new card("Clint Dempsey", sounders, 10, 6);
	yedlin = new card("DeAndre Yedlin", sounders, 6, 8);
	omarGonzalez = new card("Omar Gonzalez", galaxy, 3, 10);
	landonDonovan = new card("Landon Donovan", galaxy, 8, 8);
	thierryHenry = new card("Thierry Henry", nyrb, 10, 5);
	timCahill = new card("Tim Cahill", nyrb, 7, 7);
	mattBesler = new card("Matt Besler", skc, 5, 9);
	mikeMagee = new card("Mike Magee", fire, 8, 6);
	wondo = new card("Chris Wondolowski", quakes, 10, 5);
	robbieKeane = new card("Robbie Keane", galaxy, 9, 7);
	oba = new card("Obafemi Martins", sounders, 9, 5);


	//=============================
	//end creation of game objects
	//=============================

function Game() {

	function Deck() {
		this.cards = [clint, yedlin, omarGonzalez, landonDonovan, thierryHenry, timCahill, mattBesler,
		mikeMagee, wondo, robbieKeane, oba];
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

	//TODO: find out how to make sure you can't get duplicate cards (ie, take the out of the array)
	while (player1.hand.length <= 4) {
	    player1.hand.push(stdDeck.cards[Math.floor(Math.random() * stdDeck.count())]);
	  }
	while (player2.hand.length <= 4) {
	    player2.hand.push(stdDeck.cards[Math.floor(Math.random() * stdDeck.count())]);
	  }


	alert("You have a hand of " + JSON.stringify(player1.hand))

	prompt("Choose which card to use...")
}
















