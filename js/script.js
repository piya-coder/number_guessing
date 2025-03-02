let player1 = document.querySelector(".player1");
let player1btn = document.querySelector(".player1btn");
let error = document.querySelector(".error");
let player = document.querySelector(".player")
let player2 = document.querySelector(".player2")
let player2btn = document.querySelector(".player2btn")
let chances = document.querySelector(".chances")
let span = document.querySelector("span")
let img = document.querySelector("img")
let player3 = document.querySelector(".player3")
let player3btn = document.querySelector(".player3btn")

let count = 5
let count2 = 5

//player one start here
player1btn.addEventListener("click", function() {
    console.log(player1.value);

    if (isNaN(player1.value)) {
        error.innerHTML = " please enter a number "


    } else {
        error.innerHTML = "";
        if (player1.value > 10 || player1.value < 1) {
            error.innerHTML = " please enter a number less than 10 "
        } else {

            error.innerHTML = ""
            player.innerHTML = " Plyer - 2"
            player1.style.display = "none"
            player1btn.style.display = "none"
            player2.style.display = "inline-block"
            player2btn.style.display = "inline-block"
            span.innerHTML = count
            chances.style.display = "block"


        }
    }

});
//player two start here
player2btn.addEventListener("click", function() {

    if (isNaN(player2.value)) {
        error.innerHTML = " please enter a number "


    } else {
        error.innerHTML = "";
        if (player2.value > 10 || player2.value < 1) {
            error.innerHTML = " please enter a number less than 10 "
        } else {
            if (count > 1) {
                count--;
                span.innerHTML = count;


                if (player2.value == player1.value) {
                    winner("player two wins the game ");
                }
            } else {

                player.innerHTML = " Plyer - 3";
                player2.style.display = "none";
                player2btn.style.display = "none";
                player3.style.display = "inline-block";
                player3btn.style.display = "inline-block";
                span.innerHTML = count2;
                chances.style.display = "block";

            }
        }
    }

});
// player three start here 
player3btn.addEventListener("click", function() {
    if (isNaN(player3.value)) {
        error.innerHTML = " please enter a number ";
    } else {
        error.innerHTML = "";
        if (player3.value > 10 || player3.value < 1) {
            error.innerHTML = " please enter a number less than 10 ";
        } else {
            if (count2 > 1) {
                count2--;
                span.innerHTML = count2;

                if (player3.value == player1.value) {

                    winner("player three wins the game ");
                }
            } else if (player2.value >= player1.value && player3.value >= player1.value) {

                winner("player two and three win the game")
                    // player.innerHTML = "player-1";
                    // player2.style.display = "none";
                    // player2btn.style.display = "none";
                    // player3.style.display = "inline-block";
                    // player3btn.style.display = "inline-block";



            } else {
                winner("player one wins the game")
            }
        }
    }
});
// winner functionality start here
function winner(winners) {
    player.innerHTML = winners;
    player1.style.display = "none";
    player1btn.style.display = "none";
    player2.style.display = "none";
    player2btn.style.display = "none";
    chances.style.display = "none";
    img.style.display = "block"
}