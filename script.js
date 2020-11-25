const gameWindow = document.getElementById('gameWindow')
const victoryWindow = document.getElementById('victoryWindow')
const again = document.getElementById('again')
const x1 = document.getElementById('1')
const x2 = document.getElementById('2')
const x3 = document.getElementById('3')
const x4 = document.getElementById('4')
const x5 = document.getElementById('5')
const x6 = document.getElementById('6')
const x7 = document.getElementById('7')
const x8 = document.getElementById('8')
const x9 = document.getElementById('9')

let squares = [x1, x2, x3, x4, x5, x6, x7, x8, x9]
let trigger = true

gameWindow.addEventListener('click', putSign)
again.addEventListener('click', playAgain)

squares.map(item => {
    item.style.backgroundColor = 'teal'
})


function putSign(event){
   
    squares.map(item =>{
        if(item.id == event.target.id){
            if(item.style.backgroundColor == 'teal'){
                if(trigger){
                    squares.map(item =>{
                        if (item.id == event.target.id) {
                            item.style.backgroundColor = 'red'
                            trigger = false
                        }
                    })
                } else {
                    squares.map(item => {
                        if (item.id == event.target.id) {
                            item.style.backgroundColor = 'green'
                            trigger = true
                        }
                    })
                }
            }
        }
    })
    whoWins()
}



function whoWins(){
    if(x1.style.backgroundColor === 'red' && x2.style.backgroundColor === 'red' && x3.style.backgroundColor === 'red'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'red'
    }
    if(x4.style.backgroundColor === 'red' && x5.style.backgroundColor === 'red' && x6.style.backgroundColor === 'red'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'red'
    }
    if(x7.style.backgroundColor === 'red' && x8.style.backgroundColor === 'red' && x9.style.backgroundColor === 'red'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'red'
    }
    if(x1.style.backgroundColor === 'red' && x4.style.backgroundColor === 'red' && x7.style.backgroundColor === 'red'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'red'
    }
    if(x2.style.backgroundColor === 'red' && x5.style.backgroundColor === 'red' && x8.style.backgroundColor === 'red'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'red'
    }
    if(x3.style.backgroundColor === 'red' && x6.style.backgroundColor === 'red' && x9.style.backgroundColor === 'red'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'red'
    }
    if(x1.style.backgroundColor === 'red' && x5.style.backgroundColor === 'red' && x9.style.backgroundColor === 'red'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'red'
    }
    if(x3.style.backgroundColor === 'red' && x5.style.backgroundColor === 'red' && x7.style.backgroundColor === 'red'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'red'
    }



    if(x1.style.backgroundColor === 'green' && x2.style.backgroundColor === 'green' && x3.style.backgroundColor === 'green'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'green'
    }
    if(x4.style.backgroundColor === 'green' && x5.style.backgroundColor === 'green' && x6.style.backgroundColor === 'green'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'green'
    }
    if(x7.style.backgroundColor === 'green' && x8.style.backgroundColor === 'green' && x9.style.backgroundColor === 'green'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'green'
    }
    if(x1.style.backgroundColor === 'green' && x4.style.backgroundColor === 'green' && x7.style.backgroundColor === 'green'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'green'
    }
    if(x2.style.backgroundColor === 'green' && x5.style.backgroundColor === 'green' && x8.style.backgroundColor === 'green'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'green'
    }
    if(x3.style.backgroundColor === 'green' && x6.style.backgroundColor === 'green' && x9.style.backgroundColor === 'green'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'green'
    }
    if(x1.style.backgroundColor === 'green' && x5.style.backgroundColor === 'green' && x9.style.backgroundColor === 'green'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'green'
    }
    if(x3.style.backgroundColor === 'green' && x5.style.backgroundColor === 'green' && x7.style.backgroundColor === 'green'){
        gameWindow.style.display = 'none'
        victoryWindow.style.display = 'block'
        victoryWindow.style.backgroundColor = 'green'
    }
}

function playAgain(){
    gameWindow.style.display = 'flex'
    victoryWindow.style.display = 'none'
    squares.map(item => {
        item.style.backgroundColor = 'teal'
    })
}