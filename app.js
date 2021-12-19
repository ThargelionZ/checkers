
/*
Written by Myles Parker
 */

/*
Create the game board as 2D array
Game board written starting from top to bottom

Key
b - black checker
w - white checker
B - black king checker
W - white king checker
 */

let gameboard = [
    ["", "b", "", "b", "", "b", "", "b"],
    ["b", "", "b", "", "b", "", "b", ""],
    ["", "b", "", "b", "", "b", "", "b"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["w", "", "w", "", "w", "", "w", ""],
    ["", "w", "", "w", "", "w", "", "w"],
    ["w", "", "w", "", "w", "", "w", ""],
];

// Check for whose turn it is
let isBlackTurn = false;
let pieceSelected = false;

/*
    Switching selected checkers
 */
$(".black-checker").click(function() {
    let checkerElement = $(this);

    // Check to make sure that it's black's turn to select a checker
    if(isBlackTurn){
        // Check to see if the current element is selected, and remove is-selected class if it is
        if($(checkerElement).hasClass("is-selected")){
            $(checkerElement).removeClass("is-selected");
        }
        // If it's not already selected, add the is-selected class
        else {
            $(".black-checker").removeClass("is-selected");
            $(checkerElement).addClass("is-selected");
        }
    }
});
$(".white-checker").click(function() {
    let checkerElement = $(this);

    // Check to make sure that it's black's turn to select a checker
    if(!isBlackTurn){
        // Check to see if the current element is selected, and remove is-selected class if it is
        if($(checkerElement).hasClass("is-selected")){
            $(checkerElement).removeClass("is-selected");
        }
        // If it's not already selected, add the is-selected class
        else {
            $(".white-checker").removeClass("is-selected");
            $(checkerElement).addClass("is-selected");
        }
    }
})

/*
 selectPiece

 Selects a piece to be played

 param id - The id of the square of the piece selected
 */

function selectPiece(){

}

function move(){

}


    // Check if space is occupied
    // Check whose turn it is
    // Check for available spots to move
        // If space is occupied, check to see by which color
        // Check next diagonal space if it exists to see if that space is unoccupied

