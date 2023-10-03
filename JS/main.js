/*----- constants -----*/

/*----- app's state (variables) -----*/
    let board;  
    let turn = 'X';

/*----- cached element references -----*/
    const squares = Array.from(document.querySelectorAll('#board div'));
/*----- event listeners -----*/
    document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/

    // Creates the Board
    function render() {
        board.forEach(function(mark, index){
        squares[index].textContent = mark;
        });
    };
    // Initializing the board
    function init() {
        board = [
        '', '', '',
        '', '', '',
        '', '', ''
        ];
        render();
    };
    // Handingling Turns
    function handleTurn(event) {
        let idx = squares.findIndex(function(square) {
        return square === event.target;
        });
    };
   
    

/*----- MAIN-----*/
    
    init();
    

    
 