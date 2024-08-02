let userscore = 0;
let compscore =0;
const choice = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");
let reset = document.querySelector("#resetbtn");

reset.addEventListener("click", ()=>{

    userscore = 0;
    compscore = 0;

    user_score.innerText = userscore;
    comp_score.innerText = compscore;
    msg.innerText = "play your game";
});

const drawgame = ()=>{
    console.log("Game is Draw");
    msg.innerText = "The game is Drawn";
    msg.style.backgroundColor = "yellow";
}

const genCompChoice =()=>{
   const option =   ["rock", "paper", "scissor"];
   const randIdx = Math.floor(Math.random()*3);
   return option[randIdx];
}

const showWinner =(userwin)=>{
    if(userwin){
        userscore++;
        console.log("You win");
        user_score.innerText = userscore;
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        console.log("You lose");
        comp_score.innerText = compscore;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userChoise)=>{
    const compChoice = genCompChoice();

    if(userChoise === compChoice)
    {
        drawgame();
    }
    else{
        let userwin = true;
        if(userChoise === "rock")
        {
            userwin = compChoice === "paper"? false : true;

        }
        else if(userChoise === "paper")
        {
            userwin = compChoice === "scissor"? false : true;
        }
        else{
            userwin = compChoice === "rock"? false : true;
        }
        showWinner(userwin);
    }

    
}
choice.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
});