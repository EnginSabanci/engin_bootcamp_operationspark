////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(n) {
if(n < 1){
  console.log("");
}else {
  for(var line = "#"; line.length <= n; line += "#" ){
  console.log(line);
  }
}

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(a,b) {
  for (var i = a; i < b + 1; i++){
    if(i%15 === 0) console.log("fizzbuzz");
    else if(i%5 === 0) console.log("buzz");
    else if(i%3 === 0) console.log("fizz");
    else console.log(i);
    
  }
  
    
  }

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(n) {
  var board = "";
  for(var i = 0; i < n; i++ ){
    for(var j = 0; j < n;j++){
      if((i+j)%2 === 0){
        board += " ";
      } else {
        board += "#";
      }
    } 
    board += "\n";
  }console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
