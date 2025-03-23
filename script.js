function getHumanChoice() {
  let input = prompt('Write Rock, Paper, or Scissor' , '').toUpperCase()
  // in the above variable as u can see we set any of the entries to upper case so it wont be case sensitive


  if (input === 'ROCK') {
    return 'ROCK'
} else if (input === 'PAPER') {
    return 'PAPER'
 } else if(input === 'SCISSOR') {
    return 'SCISSOR'
  }
  else{
    alert('wrong input, try again');
    return getHumanChoice();
  }
}

function getComputerChoice(min,max) {
  max = Math.floor(max) 
  randomIndex = Math.floor(Math.random() * max)

  if (randomIndex === 0) {
   return "ROCK"
  } else if( randomIndex === 1) {
   return 'PAPER'
  } else {
     return 'SCISSOR'
    }
}

function playRound(humanChoice, computerChoice) {

   if (humanChoice === computerChoice) {
    return 'tie'
  } else  if (humanChoice === 'ROCK' && computerChoice === 'PAPER') {
    return 'you lose'
  } else if (humanChoice === 'ROCK' && computerChoice === 'SCISSOR') {
    return 'you win'
  } else if (humanChoice === 'SCISSOR' && computerChoice === 'PAPER') {
    return 'you win'
  } else if (humanChoice === 'SCISSOR' && computerChoice === 'ROCK') {
    return 'you lose'
  } else if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
    return 'you win'
  } else if (humanChoice === 'PAPER' && computerChoice === 'SCISSOR') {
    return 'you lose'
  } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(0,3);


// Call playRound(), store its result in a variable, and use that variable in your if/else conditions.

let humanScore = 0
let computerScore = 0

let result = playRound(humanSelection,computerSelection)


function playGame() {  

  if (result === 'you win') {
    humanScore ++
    return humanScore
  } else if (result === 'you lose') {
     computerScore ++ 
     return computerScore
  } else {
    return  0
  }

}

console.log(playRound(humanSelection,computerSelection))
console.log(playGame())

const humanSelection2 = getHumanChoice()
const computerSelection2 = getComputerChoice(0,3)

let result2 = playRound(humanSelection2,computerSelection2)

function playGame2() {
  if (result2 === 'you win') {
    humanScore ++
    return humanScore
  } else if (result2 === 'you lose') {
     computerScore ++ 
     return computerScore
  } else {
    return  0
  }
}

console.log(result2)
console.log(playGame2())

const humanSelection3 = getHumanChoice()
const computerSelection3 = getComputerChoice(0,3)

let result3 = playRound(humanSelection3,computerSelection3)

function playGame3() {
  if (result3 === 'you win') {
    humanScore ++
    return humanScore
  } else if (result3 === 'you lose') {
     computerScore ++ 
     return computerScore
  } else {
    return  0
  }
}

console.log(result3)
console.log(playGame3())

const humanSelection4 = getHumanChoice()
const computerSelection4 = getComputerChoice(0,3)

let result4 = playRound(humanSelection4,computerSelection4)

function playGame4() {
  if (result4 === 'you win') {
    humanScore ++
    return humanScore
  } else if (result4 === 'you lose') {
     computerScore ++ 
     return computerScore
  } else {
    return  0
  }
}

console.log(result4)
console.log(playGame4())

const humanSelection5 = getHumanChoice()
const computerSelection5 = getComputerChoice(0,3)

let result5 = playRound(humanSelection5,computerSelection5)

function playGame5() {
  if (result5 === 'you win') {
    humanScore ++
    return humanScore
  } else if (result5 === 'you lose') {
     computerScore ++ 
     return computerScore
  } else {
    return  0
  }
}

console.log(result5)
console.log(playGame5())

function showWinner() {

  if (humanScore > computerScore){
   return 'you win'
  } else if(humanScore < computerScore) {
    return 'you lost'
  } else{return 'tied'}

}

console.log(showWinner())