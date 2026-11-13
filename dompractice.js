function makeAlert(){

    let name = "Student"
    alert(`Hello, ${name} from my script file!`)

}

let countstart = prompt("Where should countdown start?")
let countTracker = countstart

let h1 = document.getElementById("mainheader")
console.log(h1);
 


function countdown(){
    //alert(--countTracker)
    //console.log(--countTracker);
    document.getElementById("clickheader").textContent = --countTracker
    if (countTracker === 0) {
        alert("Countdown complete")
        document.getElementById("countdownbtn").disabled = true
        document.body.style.backgroundColor = "lightblue";

    } 
}