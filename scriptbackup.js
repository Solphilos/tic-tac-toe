
// gameboard module
const gameBoard = (function() {
         

         let gameboardX = [];
         let gameboardO = [];
         const axis1 = document.querySelector('[data-axis="1"]');
         const axis2 = document.querySelector('[data-axis="2"]');  
         const axis3 = document.querySelector('[data-axis="3"]');
         const axis4 = document.querySelector('[data-axis="4"]'); 
         const axis5 = document.querySelector('[data-axis="5"]');
         const axis6 = document.querySelector('[data-axis="6"]');  
         const axis7 = document.querySelector('[data-axis="7"]');
         const axis8 = document.querySelector('[data-axis="8"]');
         const axis9 = document.querySelector('[data-axis="9"]');


function declareWinner(one, two, three, winner) {
if (one.textContent === 'X' && two.textContent === 'X' && three.textContent === 'X') {    // this works. make it a seperate module. 
    alert(`${winner} wins!`)
}
}




         chooseX = () => {
            let chosen = document.querySelectorAll(':hover')
            let tempArray = Array.from(chosen);
            let gridSquare = tempArray.pop()
            let text = gridSquare.textContent;
            let axis = gridSquare.getAttribute('data-axis')
            gameboardX.push(axis);
            console.log(gameboardX)
                   
             gridSquare.innerHTML = "X"
            if (text === 'O') {
                gridSquare.innerHTML = 'O';
            } 
            declareWinner(axis1, axis2, axis3, 'X')
            
        }   
            
        
         chooseO = () => {
            let chosen = document.querySelectorAll(':hover')
            let tempArray = Array.from(chosen);
            let gridSquare = tempArray.pop()
            let text = gridSquare.textContent;
            let axis = gridSquare.getAttribute('data-axis')
            gameboardO.push(axis);
            console.log(gameboardO)  
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



const gamePlay = (function() {
    
})()

gameBoard.addListeners();




 //   if data-axis 1  = 'x' and
 //      data-axis 2  = 'x' and
 //      data-axis 3  = 'x'
 //      return 'X wins!'

  //   if data-axis 4 = 'x' and
 //      data-axis 5  = 'x' and
 //      data-axis 6  = 'x'
 //      return 'X wins!'

//   if data-axis 7  = 'x' and
 //      data-axis 8  = 'x' and
 //      data-axis 9  = 'x'
 //      return 'X wins!'

  //   if data-axis 1 = 'x' and
 //      data-axis 4  = 'x' and
 //      data-axis 7  = 'x'
 //      return 'X wins!'

  //   if data-axis 2  = 'x' and
 //      data-axis 5  = 'x' and
 //      data-axis 8  = 'x'
 //      return 'X wins!'

  //   if data-axis 3 = 'x' and
 //      data-axis 6 = 'x' and
 //      data-axis 9 = 'x'
 //      return 'X wins!'

//   if data-axis 7  = 'x' and
 //      data-axis 5 = 'x' and
 //      data-axis 3  = 'x'
 //      return 'X wins!'

  //   if data-axis 9 = 'x' and
 //      data-axis 5  = 'x' and
 //      data-axis 1  = 'x'
 //      return 'X wins!'


        

