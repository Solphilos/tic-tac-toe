
//////////////////////////////////////////////////////////////////// gameboard module

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

    declareWinner = (one, two, three, sign) => {                            //  if 3 in a row, reveal winner. 
        if (one.textContent === sign && two.textContent === sign && three.textContent === sign){    
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
    }        
    
    newGame = () => {
        let button = document.createElement('button');
        document.getElementById('win').appendChild(button);
        button.classList.add('newGame');
        button.textContent = "Play again?"
        button.addEventListener('click', resetValues);
    }
        

    choose = (winMark, loseMark) => {                       // this needs to be broken down and put into a new module
        let chosen = document.querySelectorAll(':hover')   // make nodelist with each hovered element
        let tempArray = Array.from(chosen);                // make array from nodelist
        let gridSquare = tempArray.pop()                   // gridSquare is last item in array; i.e. whichever square is chosen
        let text = gridSquare.textContent;                 // .........
        let axis = gridSquare.getAttribute('data-axis')    
        gameboard.push(axis);                              
        console.log(gameboard)                             
        gridSquare.innerHTML = winMark                    // .......... creates conditions for X or O to be placed in chosen square           
        if (text === loseMark) {                          // prevents player from choosen an already taken square 
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
            
        
    revealWinner = (player) => {                                   // creates a new window that reveals the winner 
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


////////////////////////////////////////////////////////// player module

playerModule = (() => {
    const playerFactory = (name) => {
        return {
            name
        }
    }
 
    // gets values from name submission form; onclick event
    createPlayer = () => {
        let name1 = document.getElementById('player1').value;
        let name2 = document.getElementById('player2').value;
        const player1 = playerFactory(name1)
        const player2 = playerFactory(name2)
        console.log(player1.name, player2.name)  // How to get these values over to revealWinner function? 
    }

  

})();

//////////////////////////////////////////////// display module

displayController = (() => {
    return {
        // removes name submission screen on clicking submit button
        submit: function() {
          document.querySelector('.submit').addEventListener('click', function() {
          document.querySelector('.start_box').style.display = 'none';
          });
        }
    }
})();


        

gameBoard.addListeners();

displayController.submit();

        

