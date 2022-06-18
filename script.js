const gameBoard = (function() {
    const gridArray = [];

})();





chooseX = () => {
    let chosen = document.querySelectorAll(':hover')
    let array = Array.from(chosen);
    let idName = array.pop()
    idName.innerHTML = "X"
 }

 chooseO = () => {
    let chosen = document.querySelectorAll(':hover')
    let array = Array.from(chosen);
    let idName = array.pop()
    idName.innerHTML = "O"
 }




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




 removeListener = (funct) => {
     document.querySelector('.grid_container').removeEventListener('click', funct)
 }

 

   

