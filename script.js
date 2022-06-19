
// gameboard module
const gameBoard = (function() {
         
         // populates an array with divs selected thru hover event. Marks chosen square with an X or O.
         chooseX = () => {
            let chosen = document.querySelectorAll(':hover')
            let gameboard = Array.from(chosen);
            let gridSquare = gameboard.pop()
            let text = gridSquare.textContent;
            gridSquare.innerHTML = "X"
            // prevents player choosing spot already taken
            if (text === 'O') {
                gridSquare.innerHTML = 'O';
            }          
         }
        
         chooseO = () => {
            let chosen = document.querySelectorAll(':hover')
            let gameboard = Array.from(chosen);
            let gridSquare = gameboard.pop()
            let text = gridSquare.textContent;
            gridSquare.innerHTML = "O"
            if (text === 'X') {
                gridSquare.innerHTML = 'X';
            } 
         }
        
        
        
        removeListener = (funct) => {
             document.querySelector('.grid_container').removeEventListener('click', funct)
         }

         return {
             // creates buttons for choosing X or O gamepieces. 
            addListeners: function() {
                let choice;
            
                  document.querySelector('.choiceX').addEventListener('click', function() {
                       choice = 'x';
                       if (choice === 'x') {
                          document.querySelector('.grid_container').addEventListener('click', chooseX);
                         }
                         removeListener(chooseO)
                     })
            
                  document.querySelector('.choiceO').addEventListener('click', function() {
                       choice = 'o';
                       if (choice === 'o') {
                          document.querySelector('.grid_container').addEventListener('click', chooseO);
                         }
                         removeListener(chooseX)
                     })
                    }
         }
})();

//end of game/whos the winner? module
const gameEnd = (() => {
    
})();

gameBoard.addListeners();








 

   

