let btn = document.querySelectorAll(".box");
let newBtn = document.querySelector("#Reset");
let msgContainer = document.querySelector(".msgContainer")
let msg = document.querySelector(".msg");
// console.log("Button MSG: ", msg.innerText);
let first = true;
let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const restart = () => {
    first = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
  for (let box of btn){
    box.disabled = true ;
  }
}
enableBoxes = () =>{
    for(let box of btn){
        box.disabled = false;
        box.innerText = "";
    }
}

btn.forEach((btns)=> {
    btns.addEventListener("click",() =>{
        if(first){
            btns.innerText = "X";
            first = false;
         }
         else{
            btns.innerText = "O";
            first = true;
         }
         btns.disabled = "true";
         checkWinner();
    });
});

const showWinner = (Winner) => {
    msg.innerText = `Congratulation, Winner is ${Winner}`;
    console.log("MSG: ", Winner)
    msgContainer.classList.remove("hide");
    console.log("Message: ", )
    disableBoxes();
}


const checkWinner = () => {
    for( let pattern of winPatterns){
        let pos1val = btn[pattern[0]].innerText;
        let pos2val = btn[pattern[1]].innerText;
        let pos3val = btn[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos1val === pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
        }
    } 
}  
newBtn.addEventListener("click",restart);