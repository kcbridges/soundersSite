
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

sounders = new team("Seattle Sounders FC")
galaxy = new team("LA Galaxy")
nyrb = new team("New York Red Bulls")

clint = new card("Clint Dempsey", sounders, 10, 6)
yedlin = new card("DeAndre Yedlin", sounders, 6, 8)
omarGonzalez = new card("Omar Gonzalez", galaxy, 3, 10)
landonDonovan = new card("Landon Donovan", galaxy, 8, 8)
thierryHenry = new card("Thierry Henry", nyrb, 10, 5)

//=============================
//end creation of game objects
//=============================

function Game() {}

	function Deck() {
		this.cards = [clint, yedlin, omarGonzalez, landonDonovan, thierryHenry]

		this.shuffle = function() {
			var m = this.cards.length, t, rand;

			//while there are remaining elements to shuffle...
			while (m > 0) {
				//Pick a remianing element
				rand = Math.floor(Math.random() * m--);

				//and swap it with the current element
				t = this.cards[m]
				this.cards[m] = this.cards[rand];
				this.cards[rand] = t;
			}
		}
	}

//automatically shuffles the deck

Deck();

	function Play() {

		var player = function(hand) {
			this.hand = []
		}

		player1 = new player()

		function deal() {
			for (i = this.cards.length; i > 0; i--) {
				hand.concat(i)
			}	
		}
	}

Game();

}


//in this game, each player gets a randomly dealt hand.


Play();



