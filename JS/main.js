/*----- constants -----*/

/*----- app's state (variables) -----*/
    let board;  

/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/

// Creates the Board
    function render() {
        board.forEach(function(mark, index){
        console.log(mark, index);
        });
    };
    function init() {
        board = [
        '', '', '',
        '', 'Hello', '',
        '', '', ''
        ];
        render();
    };

    

/*----- MAIN-----*/
    
    init();
 