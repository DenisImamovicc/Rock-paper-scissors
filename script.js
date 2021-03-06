const startReset= document.querySelector(".startResetButton")
    startReset.addEventListener("click",function() {
        const everyRoundScore=document.querySelector(".everyRoundScore")
        const fiveRoundScore=document.querySelector(".fiveRoundScore") 
        game();

        let Anouncment="Winner gets to five rounds first!";
        fiveRoundScore.textContent = "";

        let result="Press Start to play";
        everyRoundScore.textContent = "Choose formation!";
    });

    function game(){ //Simulate a round of the game and keep score for 5 rounds.
    let playercount=0;
    let aicount=0;

    const Rock =document.querySelector(".Rock");
    const Paper =document.querySelector(".Paper");
    const Scissors =document.querySelector(".Scissors");

    const everyRoundScore=document.querySelector(".everyRoundScore")
    const fiveRoundScore=document.querySelector(".fiveRoundScore")

    Rock.addEventListener("click", function() {

        if (playercount==5 && aicount<playercount) {
        playRound(NaN);
        let Anouncment="Player won the game";
        fiveRoundScore.textContent = Anouncment;

        }
        else if (aicount==5 && playercount<aicount ) {
        playRound(NaN);
        let Anouncment="AI won the game";
        fiveRoundScore.textContent = Anouncment;

        } 
        else{
        let Anouncment;
        fiveRoundScore.textContent = Anouncment;
        playRound("Rock");
        everyRoundScore.textContent = result;
        fiveRoundScore.textContent = Anouncment;

            if(playercount==5 && aicount<playercount){
            let Anouncment="Player won the game";
            fiveRoundScore.textContent = Anouncment;
            }
            else if(aicount==5 && playercount<aicount){
            let Anouncment="AI won the game";
            fiveRoundScore.textContent = Anouncment;
            }
            else{
            console.log();
            }
        } 
    }); 

    Paper.addEventListener("click", function() {

        if (playercount==5 && aicount<playercount) {
        playRound(NaN);
        let Anouncment="Player won the game";
        fiveRoundScore.textContent = Anouncment;

        }
        else if (aicount==5 && playercount<aicount ) {
        playRound(NaN);
        let Anouncment="AI won the game";
        fiveRoundScore.textContent = Anouncment;

        } 
        else{
        let Anouncment;
        fiveRoundScore.textContent = Anouncment;
        playRound("Paper");
        everyRoundScore.textContent = result;
        fiveRoundScore.textContent = Anouncment;

            if(playercount==5 && aicount<playercount){
            let Anouncment="Player won the game";
            fiveRoundScore.textContent = Anouncment;
            }
            else if(aicount==5 && playercount<aicount){
            let Anouncment="AI won the game";
            fiveRoundScore.textContent = Anouncment;
            }
            else{
            console.log();
            }
        } 
    }); 

    Scissors.addEventListener("click", function() {

        if (playercount==5 && aicount<playercount) {
        playRound(NaN);
        let Anouncment="Player won the game";
        fiveRoundScore.textContent = Anouncment;

        }
        else if (aicount==5 && playercount<aicount ) {
        playRound(NaN);
        let Anouncment="AI won the game";
        fiveRoundScore.textContent = Anouncment;

        } 

        else{
            let Anouncment;
            fiveRoundScore.textContent = Anouncment;
            playRound("Scissors");
            everyRoundScore.textContent = result;
            fiveRoundScore.textContent = Anouncment;

            if(playercount==5 && aicount<playercount){
            let Anouncment="Player won the game";
            fiveRoundScore.textContent = Anouncment;
            }
            else if(aicount==5 && playercount<aicount){
            let Anouncment="AI won the game";
            fiveRoundScore.textContent = Anouncment;
            }
            else{
            console.log();
            }
        } 
    }); 

    function computerPlay(){ //Randomly return rock paper or scissors.
        var robotChoiceMaker=Math.floor(Math.random() * 3); 
            if (robotChoiceMaker==0){
            var robotChoice="Rock";
            return robotChoice;
            }

            else if (robotChoiceMaker==1){
            var robotChoice="Paper";
            return robotChoice;
            }

            else {
            var robotChoice="Scissors";
            return robotChoice;
            }

    }

    function pointKalkylator(playercount,aicount){

        if (aicount==1){
        aicount++;
        }

        else if(playercount==1){
        playercount++;
        }
    }

    function playRound(playerSelection,computerSelection){
        var playerSelection;
        var computerSelection=computerPlay();

        if(playerSelection =="Rock" && computerSelection =="Paper"){
        aicount++;
        result="Rock got caught in the paper!!!.AI wins this round.Score="+playercount+":"+aicount;
        }
        else if(playerSelection=="Paper" && computerSelection=="Rock"){
        playercount++;
        result="Rock got caught in the paper!!!.Human wins this round.Score="+playercount+":"+aicount;

        }
        else if(playerSelection=="Scissors" && computerSelection=="Paper"){
        playercount++;
        result="Scissors shred the paper!!!.Human wins this round.Score="+playercount+":"+aicount;

        }
        else if(playerSelection=="Paper" && computerSelection=="Scissors"){
        aicount++;
        result="Scissors shred the paper!!!.AI wins this round.Score="+playercount+":"+aicount;

        } 
        else if(playerSelection=="Scissors" && computerSelection=="Rock"){
        aicount++;
        result="Rock broke the scissors.AI wins this round.Score="+playercount+":"+aicount;

        }
        else if(playerSelection=="Rock" && computerSelection=="Scissors"){
        playercount++;
        result="Rock broke the scissors.Human wins this round.Score="+playercount+":"+aicount;

        } 
        else{
        result="Draw.No one won this round." +playerSelection+""+computerSelection+ "Score="+playercount+":"+aicount;
        }
        pointKalkylator();
    }
}
