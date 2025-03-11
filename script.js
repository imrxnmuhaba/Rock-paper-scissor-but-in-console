function getComputerChoice(min,max) {
   max = Math.floor(max) 
   min = Math.ceil(min)
   robot = Math.floor(Math.random() * max)

   if (robot === 0) {
    return console.log("Rock")
   } else if( robot === 1) {
    return console.log('Paper')
   } else if (robot === 2){
      console.log('scissor')
   }
}

getComputerChoice(0,3)

let input = prompt('Write Rock, Paper, or Scissor' , '').toUpperCase()

// in the above variable as u can see we set any of the entries to upper case so it wont be case sensitive

function getHumanChoice() {
  if (input === 'ROCK') {
    console.log('Rock')
  } else if (input === 'PAPER') {
    console.log('Paper')
  } else if(input === 'SCISSOR') {
    console.log('Scissor')
  }else{
    prompt('wrong input, please write only : Rock, Paper, or Scissor')
  }
}

// getHumanChoice()

const humanScore = 0
const computerScore = 0

function playRound(humanChoice, computerChoice) {
  
  if (humanChoice === 'Rock' && computerChoice === 'Paper') {
    console.log('lose')
  } else if (humanChoice === 'Rock' && computerChoice === 'Scissor') {
    console.log('lose')
  } else if (humanChoice === 'Scissor' && computerChoice === 'Paper') {
    console.log('win')
  } else if (humanChoice === 'Scissor' && computerChoice === 'Rock') {
    console.log('lose')
  } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
    console.log('win')
  } else if (humanChoice === 'Paper' && computerChoice === 'Scissor') {
    console.log('lose')
  } else if (humanChoice === computerChoice) {
    console.log('tie')
  } 

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(computerSelection,humanSelection);

// console.log(getComputerChoice(0,3))
// console.log(getHumanChoice())