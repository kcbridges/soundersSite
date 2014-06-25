

//player vars
var brad = "brad evans"
var deand = "deandre yedlin"
var fredy = "fredy montero"
var clint = "clint dempsey"
var oba = "obafemi martins"
var ozzie = "osvaldo alonso"
var kasey = "kasey keller"
var eddie = "eddie johnson"
var mauro = "mauro rosales"

//question objects
//message: what displays to the user
//a1, a2, a3: answers (each object can have up to three correct answers, and I could add more if I wnated)
//congrats: what displays when the user gets the question right

function question(message, a1, a2, a3, congrats) {
	this.message = message;
	this.a1 = a1;
	this.a2 = a2;
	this.a3 = a3;
	this.congrats = congrats;
	this.report = function() {
		return(this.message);
	}
	this.check = function() {
		if (userAnswer == this.a1 || userAnswer == this.a2 || userAnswer == this.a3) {
			alert(this.congrats);
		}
	}


}

q1 = new question("1. Which Sounder was called to the USMNT World Cup Training Camp but did not get picked for the final World Cup team?", brad, undefined, undefined,  "Correct! But don't get too cocky yet..."); 
q2 = new question("2. Which Sounder has the team record for assists in a season?", mauro, undefined, undefined, "Wow, you're pretty good. But can you answer the next question?"); 
q3 = new question("3. Who scored the first goal of the Sounders MLS era?", fredy, undefined, undefined, "Perfecto!");
q4 = new question("4. Name one of the 2014 Designated Players.", ozzie, oba, clint, "Great work!");
q5 = new question("5. Which famous Sounders goalkeeper now works as an announcer for the Sounders?", kasey, undefined, undefined, "Very true!");
q6 = new question("6. Which team member is affectionately known as the Honey Badger?", ozzie, undefined, undefined, "Correct!");
qBonus = new question("BONUS QUESTION: How many total games has Osvaldo Alonso appeared in for the Sounders (as of June 3rd 2014)?", 153, 
	"one hundred fifty three", "one hundred and fifty three", "WOW, great job! I wouldn't have guessed it myself!");
q7 = new question("7. How many Open Cups have the Seattle Sounders won?", 3, "three", undefined, "It should have been four... but alas, you are correct.");
q8 = new question("8. Which former player is now a Designated Player at DC United?", eddie, undefined, undefined, "This is true, and perhaps for the best...")
q9 = new question("9. Which player is known for doing backflips when he scores goals?", oba, undefined, undefined, "That's why the call it 'obaflips'!!!")
q10 = new question("10. Name a player who has had the number 17 during his tenure with the Sounders.", fredy, deand, undefined, "Yes - Fredy Montero was the original bearer of the number - Deandre Yedlin took it when Clint Dempsey joined the team and wanted Deandre's number 2.")

//the standard incorrect message
var incorrect = "I'm sorry, that answer is incorrect."

//object array - of the questions
var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

//gets how many questions are in the array... easily extensible to add more questions.
var questionArrayLength = questionArray.length

//declares var 'right' so that you can count how many answers were right
var right = 0

function soundersGuessGame() {

	for (var i = 0; i < questionArrayLength; i++) {

		var userAnswer = prompt(questionArray[i].message).toLowerCase();

		if (userAnswer == questionArray[i].a1 || userAnswer == questionArray[i].a2 || userAnswer == questionArray[i].a3) {
			alert(questionArray[i].congrats);
			console.log(right++);

			if (userAnswer == ozzie && questionArray[6]) {
				questionArray.splice(6, 0, qBonus);
				questionArrayLength = questionArray.length;
			}
			
		}
		else {
			for (tries = 1; tries < 2; tries++) {
				alert("Wrong! Try again.");

				var userAnswer = prompt(questionArray[i].message).toLowerCase();

				if (userAnswer == questionArray[i].a1 || userAnswer == questionArray[i].a2 || userAnswer == questionArray[i].a3) {
					alert(questionArray[i].congrats);
					console.log(right++);
				}

				else {
					alert(incorrect)
				}
			}
		}
	}

		
	//this is just a cute bonus question
	var qfinal = prompt("And... final question: Who is your all-time favorite Sounder???")
		alert("Great answer! All Sounders are great Sounders!")
		console.log(right++);
		alert("You got " + right + " out of 10 correct.")
		//There are 11 possible right answers, due to the bonus "final question." So it's not a bug if it says 11 out of 10 correct.
		if (right > 7) {
			alert("You are a Sounders genius!")
		}
		else if (right >=5 && right <= 7) {
			alert("You did okay. There is some more you could learn though.")
		}
		else
		{
			alert("You really don't know very much about the Sounders, unfortunately...")
		}
}

