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

function game(){ //Simulate a round of the game and keep score for 5 rounds.
    let menu=prompt("Want to play?:y/n").toLowerCase();
    let playercount=0;
    let aicount=0;

    
    
        if(menu=="y"||menu==""){
            
            for (i=0;i<5;i++) { 
            playRound();
            }
        }
    
        else {
            
            console.log("ok,werido.");
            
        }
    

    function pointKalkylator(playercount,aicount){

        
        if (aicount==1){
            aicount++;
        }
        
        else if(playercount==1){
            playercount++;
        }
        
    }

    function pointResult(){
        
        if (playercount>aicount ) {
                console.log("Player has won a 5 round game of Rock,Paper,Scissors! Score="+playercount+":"+aicount);
            }
        else if (aicount>playercount ) {
            console.log("Ai has won a 5 round game of Rock,Paper,Scissors! Score="+playercount+":"+aicount);
            }
        else if (aicount==0 || playercount==0 ) {
            
            }
        else{
            console.log("It's a draw! Score="+playercount+":"+aicount)
            }  
    }

    
    function playRound(playerSelection,computerSelection){
        var playerSelection=prompt("Rock,Paper or Scissors").toLowerCase();
        var computerSelection=computerPlay();

        
        if(playerSelection =="rock" && computerSelection =="Paper"){
             aicount++;
             console.log("Rock got caught in the paper!!!.AI wins this round.Score="+playercount+":"+aicount);

        }
        else if(playerSelection=="paper" && computerSelection=="Rock"){
             playercount++;
             console.log("Rock got caught in the paper!!!.Human wins this round.Score="+playercount+":"+aicount);

        }
        else if(playerSelection=="scissors" && computerSelection=="Paper"){
             playercount++;
             console.log("Scissors shred the paper!!!.Human wins this round.Score="+playercount+":"+aicount);

        }
        else if(playerSelection=="paper" && computerSelection=="Scissors"){
             aicount++;
             console.log("Scissors shred the paper!!!.AI wins this round.Score="+playercount+":"+aicount);

        } 
        else if(playerSelection=="scissors" && computerSelection=="Rock"){
             aicount++;
             console.log("Rock broke the scissors.AI wins this round.Score="+playercount+":"+aicount);

        }
        else if(playerSelection=="rock" && computerSelection=="Scissors"){
             playercount++;
             console.log("Rock broke the scissors.Human wins this round.Score="+playercount+":"+aicount);

        }   
        else{
            console.log("Draw.No one won this round." +playerSelection+""+computerSelection+ "Score="+playercount+":"+aicount);
        }
        
        pointKalkylator();

    }
    pointResult();


}


game();
//console.log(playRound(playerSelection,computerSelection));