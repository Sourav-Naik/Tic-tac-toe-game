let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let win =  document.querySelector("#winner");
let contain = document.querySelector("#container");
let a = "result";
let turnX = true;
let i=0;
const winPattern =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];




const winner =() => {
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        for(let win_ of pattern){
           if(
            (pos1val==="X"&&pos2val==="X"&&pos3val==="X")||(pos1val==="O"&&pos2val==="O"&&pos3val==="O")
            )
            {
                a = pos1val;
                console.log("winner");
                win.innerText=`Congratulation ${a} is Winner`;
                contain.innerText = `Starting New Game...`;
                contain.classList.add("hidden");
                win.classList.remove("hidden");
                reset.innerText = "New Game";
                
            }
        }
    }

}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(turnX===true&&a==="result"){
            box.innerText = "X";
            box.style.color ="rgb(186, 75, 162)";
            turnX = false;
        }
        else if (turnX === false&&a==="result"){
            box.innerText = "O";
            box.style.color ="rgb(95, 75, 186)";
            turnX = true;
        }
        box.disabled = true;
        i++;
        if (i===9){
            reset.innerText="New Game";
        }
        winner();
        console.log(i);
    } );
   
});



const res = () =>{
    
       contain.classList.remove("hidden");
        win.classList.add("hidden");
        i = 0;
        location.reload();
    turnX = true;
     
}

reset.addEventListener("click",res);
