let score=JSON.parse(localStorage.getItem('score')) || {
                        wins:0,
                        ties:0,
                        lose:0
                      };
      
/*if(score===null){
    score={
        wins:0,
        ties:0,
        lose:0
        };
    }*/
document.querySelector('.displayScore').innerHTML=`
    wins: ${score.wins},  lose: ${score.lose},  ties: ${score.ties}`;
    
let computerPick;
function computer(){
    const ranNum=Math.random();
    if(ranNum>=0 && ranNum<1/3){
        computerPick='rock'
    }
    else if(ranNum>=1/3 && ranNum<2/3){
        computerPick='paper';
    }
    else{
        computerPick='scissors';
    }
    return computerPick;
}
function result(playerChoice,computerPick){
    let result;
    if(playerChoice==='rock'){
        if(computerPick==='paper')
        result='You lose';
        else if(computerPick==='rock')
        result='Tie';
        else
        result='You win';
    }
    else if(playerChoice==='scissors'){
        if(computerPick==='rock')
        result='You lose';
        else if(computerPick==='scissors')
        result='Tie';
        else
        result='You win';
    }
    else{
        if(computerPick==='scissors')
        result='You lose';
        else if(computerPick==='paper')
        result='Tie';
        else
        result='You win';
    }
    if(result==='You win')
        score.wins+=1;
    else if(result==='You lose')
        score.lose+=1;
    else
        score.ties+=1;
    
    localStorage.setItem('score',JSON.stringify(score));
    
    document.querySelector('.displayResult').innerHTML=result;
    document.querySelector('.displaySelection').innerHTML=`you <img src="images/${playerChoice}-emoji.png"> <img src="images/${computerPick}-emoji.png"> computer`;
    document.querySelector('.displayScore').innerHTML=`
    wins: ${score.wins},  lose: ${score.lose},  ties: ${score.ties}`;
}
function reset(){
    document.querySelector('.displayResult').innerHTML='';
    document.querySelector('.displaySelection').innerHTML='';
    document.querySelector('.displayScore').innerHTML=`
    wins: ${score.wins},  lose: ${score.lose},  ties: ${score.ties}`;
}