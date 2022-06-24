
// gameboard module
gameBoard = (() => {
         
         let gameboard = [];
         

         const axis1 = document.querySelector('[data-axis="1"]');
         const axis2 = document.querySelector('[data-axis="2"]');  
         const axis3 = document.querySelector('[data-axis="3"]');
         const axis4 = document.querySelector('[data-axis="4"]'); 
         const axis5 = document.querySelector('[data-axis="5"]');
         const axis6 = document.querySelector('[data-axis="6"]');  
         const axis7 = document.querySelector('[data-axis="7"]');
         const axis8 = document.querySelector('[data-axis="8"]');
         const axis9 = document.querySelector('[data-axis="9"]');

        declareWinner = (one, two, three, sign) => {
            if (one.textContent === sign && two.textContent === sign && three.textContent === sign){    // Place this a seperate module
                revealWinner(sign);
                let x = document.getElementById('win').childElementCount;
                  if (x <= 1) {
                      newGame()
                   }
                   
            }
           
        }

        resetValues = () => {
                let nodeList = document.querySelectorAll('.squares');   // effectively resets the game by removing all text content from divs
                let gridArray = Array.from(nodeList);
                  for (let i = 0; i < gridArray.length; i++) {
                       gridArray[i].textContent = "";
                   }
                   document.getElementById('win').style.display = "none";
                   document.querySelector('p').textContent = '';
                   
                   document.getElementById('win').removeChild(document.querySelector('p'));
                   gameboard = [];
                   // document.getElementById('win').removeChild(document.querySelector('.newGame')) 
                   
                   
                  
        }        
    
        newGame = () => {
            let button = document.createElement('button');
            document.getElementById('win').appendChild(button);
            button.classList.add('newGame');
            button.textContent = "Play again?"
            button.addEventListener('click', resetValues);
            
            
        }
        

         choose = (winMark, loseMark) => {

            let chosen = document.querySelectorAll(':hover')
            let tempArray = Array.from(chosen);
            let gridSquare = tempArray.pop()
            let text = gridSquare.textContent;
            let axis = gridSquare.getAttribute('data-axis')
            gameboard.push(axis);
            console.log(gameboard)
            gridSquare.innerHTML = winMark
            if (text === loseMark) {
                gridSquare.innerHTML = loseMark;
            } 
            declareWinner(axis1, axis2, axis3, winMark)
            declareWinner(axis4, axis5, axis6, winMark)
            declareWinner(axis7, axis8, axis9, winMark)
            declareWinner(axis1, axis4, axis7, winMark)
            declareWinner(axis2, axis5, axis8, winMark)
            declareWinner(axis3, axis6, axis9, winMark)
            declareWinner(axis7, axis5, axis3, winMark)
            declareWinner(axis9, axis5, axis1, winMark)
        }  
        
        chooseX = () => {
            choose('X', 'O');
        }

        chooseO = () => {
            choose('O', 'X')
        }
            
        
         revealWinner = (player) => {
            let winnerDisplay = document.getElementById('win');
            winnerDisplay.style.display = 'flex';
            let para = document.createElement('p');
            winnerDisplay.appendChild(para);
            para.textContent = `${player} wins!`;
          //  document.querySelector('body').style.backgroundColor = 'grey';
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




const playerFactory = (name) => {
    return {
        name
    }
}
 
// create method to get input text of player names and insert below
createPlayer = (name1, name2) => {

    const player1 = playerFactory(name1)
    const player2 = playerFactory(name2)
}
        
         
        







// call functions from modules 
gameBoard.addListeners();




        

