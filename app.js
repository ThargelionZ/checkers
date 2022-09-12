
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
let checkerSelectedLocation = "";

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
            pieceSelected = false;
            checkerSelectedLocation = "";
            console.log(checkerSelectedLocation);
        }
        // If it's not already selected, add the is-selected class
        else {
            $(".black-checker").removeClass("is-selected");
            $(checkerElement).addClass("is-selected");
            pieceSelected = true;
            checkerSelectedLocation = checkerElement.parent().attr("id");
            console.log(checkerSelectedLocation);
        }
    }
});
$(".white-checker").click(function() {
    let checkerElement = $(this);
    getMovesListDriver(checkerElement.parent().attr("id"), "white", false);

    // Check to make sure that it's white's turn to select a checker
    if(!isBlackTurn){
        // Check to see if the current element is selected, and remove is-selected class if it is
        if($(checkerElement).hasClass("is-selected")){
            $(checkerElement).removeClass("is-selected");
            pieceSelected = false;
            checkerSelectedLocation = "";
            console.log(checkerSelectedLocation);
        }
        // If it's not already selected, add the is-selected class
        else {
            $(".white-checker").removeClass("is-selected");
            $(checkerElement).addClass("is-selected");
            pieceSelected = true;
            checkerSelectedLocation = checkerElement.parent().attr("id");
            console.log(checkerSelectedLocation);
        }
    }
});

/*
    Clicking a square
 */
$(".square").click(function() {
    let squareElement = $(this);

    // Only do something if the square is empty
});

function getMovesListDriver(checkerLocation, checkerColor, isKing) {
    // movesList will be a list of locations (ids) where the checker can move
    let movesList = [];
    getMovesList(checkerLocation, checkerColor, isKing, movesList);
    return movesList;
}

/*
    getMovesList - Checks to see if there are any given moves at a specific location

    @param checkerlocation - The location of the checker being checked (ex: "r1c1")
    @param checkerColor - The color of the checker being checked
    @return - A boolean indicating if there are moves or not for the given checker
 */
function getMovesList(checkerLocation, checkerColor, isKing, movesList) {
    let checkerRow = parseInt(checkerLocation.substring(1, 2));
    let checkerCol = parseInt(checkerLocation.substring(3));
    let diagLeftSquareId = '';
    let diagRightSquareId = '';

    let upDiagLeftSquareId = '';
    let upDiagRightSquareId = '';
    let downDiagLeftSquareId = '';
    let downDiagRightSquareId = '';

    if(isKing && checkerColor === 'white'){
        // Set move locations if they exist (up-diag-left, up-diag-right, down-diag-left, down-diag-right)
        if((checkerRow - 1) > 0 && (checkerCol - 1) > 0) {
            upDiagLeftSquareId = 'r' + (checkerRow - 1) + 'c' + (checkerCol - 1);
        }
        if((checkerRow - 1) > 0 && (checkerCol + 1) < 9) {
            upDiagRightSquareId = 'r' + (checkerRow - 1) + 'c' + (checkerCol + 1);
        }
        if((checkerRow + 1) < 9 && (checkerCol - 1) > 0) {
            downDiagLeftSquareId = 'r' + (checkerRow + 1) + 'c' + (checkerCol - 1);
        }
        if((checkerRow + 1) < 9 && (checkerCol + 1) < 9) {
            downDiagRightSquareId = 'r' + (checkerRow + 1) + 'c' + (checkerCol + 1);
        }

        // If move location exists, check to see if a checker is present
        if(upDiagLeftSquareId !== '') {
            // Check to see if checker is located inside square
            if($("#" + upDiagLeftSquareId).find("div").length === 0) {
                movesList.push(upDiagLeftSquareId);
            } else {
                let squareChildren = $("#" + upDiagLeftSquareId).children();
                let checkerClass = squareChildren[0].className;

                // If the checker is black, check surrounding locations to see if jump is possible
                if(checkerClass !== 'white-checker') {
                    return getMovesList(upDiagLeftSquareId, "black", false, movesList);
                }
            }
        }
        if(upDiagRightSquareId !== '') {
            // Check to see if checker is located inside square
            if($("#" + upDiagRightSquareId).find("div").length === 0) {
                movesList.push(upDiagRightSquareId);
            } else {
                let squareChildren = $("#" + upDiagRightSquareId).children();
                let checkerClass = squareChildren[0].className;

                // If the checker is black, check surrounding locations to see if jump is possible
                if(checkerClass !== 'white-checker') {
                    return getMovesList(upDiagRightSquareId, "black", false, movesList);
                }
            }
        }
        if(downDiagLeftSquareId !== '') {
            // Check to see if checker is located inside square
            if($("#" + downDiagLeftSquareId).find("div").length === 0) {
                movesList.push(downDiagLeftSquareId);
            } else {
                let squareChildren = $("#" + downDiagLeftSquareId).children();
                let checkerClass = squareChildren[0].className;

                // If the checker is black, check surrounding locations to see if jump is possible
                if(checkerClass !== 'white-checker') {
                    return getMovesList(downDiagLeftSquareId, "black", false, movesList);
                }
            }
        }
        if(downDiagRightSquareId !== '') {
            // Check to see if checker is located inside square
            if($("#" + downDiagRightSquareId).find("div").length === 0) {
                movesList.push(downDiagRightSquareId);
            } else {
                let squareChildren = $("#" + downDiagRightSquareId).children();
                let checkerClass = squareChildren[0].className;

                // If the checker is black, check surrounding locations to see if jump is possible
                if(checkerClass !== 'white-checker') {
                    return getMovesList(downDiagRightSquareId, "black", false, movesList);
                }
            }
        }
    } else if(isKing && checkerColor === 'black') {
        // Set move locations if they exist (up-diag-left, up-diag-right, down-diag-left, down-diag-right)
        if((checkerRow - 1) > 0 && (checkerCol - 1) > 0) {
            upDiagLeftSquareId = 'r' + (checkerRow - 1) + 'c' + (checkerCol - 1);
        }
        if((checkerRow - 1) > 0 && (checkerCol + 1) < 9) {
            upDiagRightSquareId = 'r' + (checkerRow - 1) + 'c' + (checkerCol + 1);
        }
        if((checkerRow + 1) < 9 && (checkerCol - 1) > 0) {
            downDiagLeftSquareId = 'r' + (checkerRow + 1) + 'c' + (checkerCol - 1);
        }
        if((checkerRow + 1) < 9 && (checkerCol + 1) < 9) {
            downDiagRightSquareId = 'r' + (checkerRow + 1) + 'c' + (checkerCol + 1);
        }

        // If move location exists, check to see if a checker is present
        if(upDiagLeftSquareId !== '') {
            // Check to see if checker is located inside square
            if($("#" + upDiagLeftSquareId).find("div").length === 0) {
                movesList.push(upDiagLeftSquareId);
            } else {
                let squareChildren = $("#" + upDiagLeftSquareId).children();
                let checkerClass = squareChildren[0].className;

                // If the checker is white, check surrounding locations to see if jump is possible
                if(checkerClass !== 'black-checker') {
                    return getMovesList(upDiagLeftSquareId, "white", false, movesList);
                }
            }
        }
        if(upDiagRightSquareId !== '') {
            // Check to see if checker is located inside square
            if($("#" + upDiagRightSquareId).find("div").length === 0) {
                movesList.push(upDiagRightSquareId);
            } else {
                let squareChildren = $("#" + upDiagRightSquareId).children();
                let checkerClass = squareChildren[0].className;

                // If the checker is white, check surrounding locations to see if jump is possible
                if(checkerClass !== 'black-checker') {
                    return getMovesList(upDiagRightSquareId, "white", false, movesList);
                }
            }
        }
        if(downDiagLeftSquareId !== '') {
            // Check to see if checker is located inside square
            if($("#" + downDiagLeftSquareId).find("div").length === 0) {
                movesList.push(downDiagLeftSquareId);
            } else {
                let squareChildren = $("#" + downDiagLeftSquareId).children();
                let checkerClass = squareChildren[0].className;

                // If the checker is white, check surrounding locations to see if jump is possible
                if(checkerClass !== 'black-checker') {
                    return getMovesList(downDiagLeftSquareId, "white", false, movesList);
                }
            }
        }
        if(downDiagRightSquareId !== '') {
            // Check to see if checker is located inside square
            if($("#" + downDiagRightSquareId).find("div").length === 0) {
                movesList.push(downDiagRightSquareId);
            } else {
                let squareChildren = $("#" + downDiagRightSquareId).children();
                let checkerClass = squareChildren[0].className;

                // If the checker is white, check surrounding locations to see if jump is possible
                if(checkerClass !== 'black-checker') {
                    return getMovesList(downDiagRightSquareId, "white", false, movesList);
                }
            }
        }
    } else if(!isKing && checkerColor === 'white') {
        // Set move locations if they exist (up-diag-left, up-diag-right)
        if((checkerRow - 1) > 0 && (checkerCol - 1) > 0) {
            diagLeftSquareId = 'r' + (checkerRow - 1) + 'c' + (checkerCol - 1);
        }
        if((checkerRow - 1) > 0 && (checkerCol + 1) < 9) {
            diagRightSquareId = 'r' + (checkerRow - 1) + 'c' + (checkerCol + 1);
        }

        // If move location exists, check to see if a checker is present
        if(diagLeftSquareId !== '') {
            // Check to see if checker is located inside square
            if($("#" + diagLeftSquareId).find("div").length === 0) {
                movesList.push(diagLeftSquareId);
            } else {
                let squareChildren = $("#" + diagLeftSquareId).children();
                let checkerClass = squareChildren[0].className;

                // If the checker is black, check surrounding locations to see if jump is possible
                if(checkerClass !== 'white-checker') {
                    return getMovesList(diagLeftSquareId, "white", false, movesList);
                }
            }
        }
        if(diagRightSquareId !== '') {
            // Check to see if checker is located inside square
            if($("#" + diagRightSquareId).find("div").length === 0) {
                movesList.push(diagRightSquareId);
            } else {
                let squareChildren = $("#" + diagRightSquareId).children();
                let checkerClass = squareChildren[0].className;

                // If the checker is black, check surrounding locations to see if jump is possible
                if(checkerClass !== 'white-checker') {
                    return getMovesList(diagRightSquareId, "white", false, movesList);
                }
            }
        }
    } else {
        // if not the king and checker color is black (move down only)

        // Set move locations if they exist (down-diag-left, down-diag-right)
        if((checkerRow + 1) < 9 && (checkerCol - 1) > 0) {
            diagLeftSquareId = 'r' + (checkerRow + 1) + 'c' + (checkerCol - 1);
        }
        if((checkerRow + 1) < 9 && (checkerCol + 1) < 9) {
            diagRightSquareId = 'r' + (checkerRow + 1) + 'c' + (checkerCol + 1);
        }

        // If move location exists, check to see if a checker is present
        if(diagLeftSquareId !== '') {
            // Check to see if checker is located inside square
            if($("#" + diagLeftSquareId).find("div").length === 0) {
                movesList.push(diagLeftSquareId);
            } else {
                let squareChildren = $("#" + diagLeftSquareId).children();
                let checkerClass = squareChildren[0].className;

                // If the checker is white, check surrounding locations to see if jump is possible
                if(checkerClass !== 'black-checker') {
                    return getMovesList(diagLeftSquareId, "black", false, movesList);
                }
            }
        }
        if(diagRightSquareId !== '') {
            // Check to see if checker is located inside square
            if($("#" + diagRightSquareId).find("div").length === 0) {
                movesList.push(diagRightSquareId);
            } else {
                let squareChildren = $("#" + diagRightSquareId).children();
                let checkerClass = squareChildren[0].className;

                // If the checker is white, check surrounding locations to see if jump is possible
                if(checkerClass !== 'black-checker') {
                    return getMovesList(diagRightSquareId, "black", false, movesList);
                }
            }
        }
    }
}

/*
    addMoves - Helper method for getMovesList to condense adding moves
 */
function addMoves() {

}

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

