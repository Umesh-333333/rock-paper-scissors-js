function computerchoice(){
  var systemchoice=Math.floor(Math.random()*3);
  var computermove='';
  if (systemchoice===0){
      var computermove='rock';
  }
  
  if (systemchoice===1){
    var computermove='paper';
  }

  if (systemchoice===2){
     var computermove='scissor';
  }
  console.log(computermove);
  return computermove;
}


let resultt='';

function result(userchoice,computermove,score){
    if(userchoice===computermove){
       score.Tie+=1;
        resultt='Its a Tie';
       updateScoreElement(userchoice,computermove);
       alert(`It's a draw \nWins:${score.Win} Loses:${score.Lose} Ties:${score.Tie} `);
      
    }
  
     if( (userchoice==='rock') && (computermove==='paper') ){
      score.Lose+=1;
      resultt='You Lose';
       updateScoreElement(userchoice,computermove);
       alert(`You choose rock and computer choose paper \n YOU LOSE \nWins:${score.Win} Loses:${score.Lose} Ties:${score.Tie}`);
       
    }

     if((userchoice==='rock') && (computermove==='scissor')){
       score.Win+=1;
       resultt='You Won';
        updateScoreElement(userchoice,computermove);
       alert(`You choose rock and computer choose Scissor \n YOU Won \nWins:${score.Win} Loses:${score.Lose} Ties:${score.Tie}`);
       
    }

     if((userchoice==='paper') && (computermove==='rock')){
      score.Win+=1;
      resultt='You Won';
       updateScoreElement(userchoice,computermove);
       alert(`You choose Paper and computer choose Rock \n YOU Won \nWins:${score.Win} Loses:${score.Lose} Ties:${score.Tie}`);
       
    }

    if( (userchoice==='paper') && (computermove==='scissor') ){
      score.Lose+=1;
       resultt='You Lose';
       updateScoreElement(userchoice,computermove);
       alert(`You choose Paper and computer choose Scissor \n YOU LOSE \nWins:${score.Win} Loses:${score.Lose} Ties:${score.Tie}`);
      
    }

     if( (userchoice==='scissor') && (computermove==='rock') ){
      score.Lose+=1;
      resultt='You Lose';
       updateScoreElement(userchoice,computermove);
       alert(`You choose Scissor and computer choose Rock \n YOU LOSE \nWins:${score.Win} Loses:${score.Lose} Ties:${score.Tie}`);
      
    }

     if( (userchoice==='scissor') && (computermove==='paper') ){
      score.Win+=1;
       resultt='You Won';
       updateScoreElement(userchoice,computermove);
       alert(`You choose Scissor and computer choose paper \n YOU WON \nWins:${score.Win} Loses:${score.Lose} Ties:${score.Tie}`);
        
    }
}

var score={
  Win:0,
  Lose:0,
  Tie:0
}

let score1=JSON.parse(localStorage.getItem('score'));

localStorage.setItem('score',JSON.stringify(score));

function reset(score){
  score.Win=0,
  score.Lose=0,
  score.Tie=0
  // updateScoreElement();
  resetmoves();
  alert(`Wins:${score.Win} Loses:${score.Lose} Ties:${score.Tie}`);
  localStorage.removeItem('score1');
  return score;
}

function resetmoves(){
   document.querySelector('.js-score')
 .innerHTML=`Wins :${score.Win} , Loses :${score.Lose} , Ties :${score.Tie}`;

}

function updateScoreElement(userchoice,computermove){
  document.querySelector('.js-result')
  .innerHTML=`${resultt}`;
 
   document.querySelector(".js-moves")
   .innerHTML=`YOU
        <img src="${userchoice}-emoji.png" class="move-icon">
        <img src="${computermove}-emoji.png" class="move-icon">
        COMPUTER  
   `;

 document.querySelector('.js-score')
 .innerHTML=`Wins :${score.Win} , Loses :${score.Lose} , Ties :${score.Tie}`;

 
}