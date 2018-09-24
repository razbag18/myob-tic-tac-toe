
var boardGuide = [0,1,2,3,4,5,6,7,8]
var playingSquare = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
var turnCount = 0
var inPlay = true

var exampleRow1 = boardGuide[0] + ' | ' + boardGuide[1] + ' | '+ boardGuide[2]
var exampleRow2 = boardGuide[3] + ' | ' + boardGuide[4] + ' | '+ boardGuide[5]
var exampleRow3 = boardGuide[6] + ' | ' + boardGuide[7] + ' | '+ boardGuide[8]
var boardLine = '--|---|--'

var exampleBoard = exampleRow1 +'\n' + boardLine + '\n' + exampleRow2 + '\n' + boardLine + '\n' + exampleRow3

var winMessage = function(){
  return console.log("~ * ~ WINNER!! ~ * ~" + '\n' + 'To play again, type resetBoard()')
}

var play = function(){
  console.log('             ~ ~ Tic-Tac-Toe Console Game ~ ~' + '\n' + '\n' + 'To play, type in playerTurn(position).' + '\n' + 'Make sure position is a number between 0-8. First player is assigned as "X".' + '\n' + '\n' + 'Here are the playing square positions...' + '\n' + '\n' + exampleBoard)
}

play()

var playerTurn = function(position){  
  if (inPlay === true && playingSquare[position] === ' ' && playingSquare[position] >=0 || playingSquare[position] <=8){
    if (turnCount % 2 === 0){
      playingSquare[position] = "X"
    } else {
      playingSquare[position] = "O"
    }
  } else {
    console.log("Position not valid")
    turnCount --
  }
  
  var row1 = playingSquare[0] + ' | ' + playingSquare[1] + ' | ' + playingSquare[2]
  var row2 = playingSquare[3] + ' | ' + playingSquare[4] + ' | ' + playingSquare[5]
  var row3 = playingSquare[6] + ' | ' + playingSquare[7] + ' | ' + playingSquare[8]

  var board = row1 +'\n' + boardLine + '\n' + row2 + '\n' + boardLine + '\n' + row3

  checkWin()
  
  turnCount ++
  if (turnCount === 9){
    console.log(board)
    console.log(" XX ~ ~ DRAW ~ ~ OO")
    resetBoard()} 
    else {
      console.log(board)
  }
}

var checkHorizitally = function(){
  if (playingSquare[0] === "X" && playingSquare[1] === "X" && playingSquare[2] === "X" || playingSquare[0] === "O" && playingSquare[1] === "O" && playingSquare[2] === "O"){
    winMessage()
    inPlay = false
    
  } else if (playingSquare[3] === "X" && playingSquare[4] === "X" && playingSquare[5] === "X" || playingSquare[3] === "O" && playingSquare[4] === "O" && playingSquare[5] === "O"){
    winMessage()
    inPlay = false
    
  } else if (playingSquare[6] === "X" && playingSquare[7] === "X" && playingSquare[8] === "X" || playingSquare[6] === "O" && playingSquare[7] === "O" && playingSquare[8] === "O"){
    winMessage()
    inPlay = false
    
  }
}

var checkVertically = function(){
  if (playingSquare[0] === "X" && playingSquare[3] === "X" && playingSquare[6] === "X" || playingSquare[0] === "O" && playingSquare[3] === "O" && playingSquare[6] === "O"){
    winMessage()
    inPlay = false
    
  } else if (playingSquare[1] === "X" && playingSquare[4] === "X" && playingSquare[7] === "X" || playingSquare[1] === "O" && playingSquare[4] === "O" && playingSquare[7] === "O"){
    winMessage()
    inPlay = false
    
  } else if (playingSquare[2] === "X" && playingSquare[5] === "X" && playingSquare[8] === "X" || playingSquare[2] === "O" && playingSquare[5] === "O" && playingSquare[8] === "O"){
    winMessage()
    inPlay = false
    
  }  
}

var checkDiagonallyBottomLeftTopRight = function(){
  if (playingSquare[6] === "X" && playingSquare[4] === "X" && playingSquare[2] === "X" || playingSquare[6] === "O" && playingSquare[4] === "O" && playingSquare[2] === "O"){
    winMessage()
    inPlay = false
    
  }
}

var checkDiagonallyBottomRightTopLeft = function(){
  if (playingSquare[0] === "X" && playingSquare[4] === "X" && playingSquare[8] === "X" || playingSquare[0] === "O" && playingSquare[4] === "O" && playingSquare[8] === "O"){
    winMessage()
    inPlay = false
  }
}

var checkWin = function(){
  checkHorizitally()
  checkVertically()
  checkDiagonallyBottomLeftTopRight()
  checkDiagonallyBottomRightTopLeft()  
}

var resetBoard = function(){
  playingSquare = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
  turnCount = 0
  inPlay = true
  play()
}
