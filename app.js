//add event listener which runs new game
window.addEventListener("load", newGame());

// event listener for the Play again button
document.getElementById("btn").addEventListener("click", function() {
    window.location.reload();
});

// this function will generate random number between 2 and 6
// represent the div yeti will hide in/div will gain an Id of "yeti" 

function newGame() {
    var randNum = Math.floor(Math.random() * 6 + 2);
    document.getElementsByTagName("div")
    [randNum].setAttribute("id", "yeti");
    document.getElementById("yeti").addEventListener("click", function(){
        alert("Rowrrr! You Lose!!!");
        //document.getElementbyId("audio").play() for sound
        })
}
