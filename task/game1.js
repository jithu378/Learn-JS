let player1 = 3;
let player2 = 4;

if(player1 == 1 && player2 == 1 ||player1 == 2 && player2 == 2 ||player1 == 3 && player2 == 3){
    console.log("Draw");
} else {
    if(player1 == 1 && player2 == 2 || player1 == 2 && player2 == 3 || player1 == 3 && player2 == 1){
        console.log("Player 2 wins");
    }else if(player1 == 1 && player2 == 3 || player1 == 2 && player2 == 1 || player1 == 3 && player2 == 2){
        console.log("Player 1 wins");
    }else {
        console.log("Invalid choice!");
    }
}