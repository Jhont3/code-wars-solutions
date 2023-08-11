// Create a square with a "*" and the center of the square must be empty.

function drawHollowSquare(sideLength) {

    for (let i = 0; i < sideLength; i++) {
      let line = "";
      for (let j = 0; j < sideLength; j++) {
        if (i === 0 || i === sideLength - 1 || j === 0 || j === sideLength - 1) {
          line += "* ";
        } else {
          line += "  ";
        }
      }
      console.log(line);
    }

  }
  
  drawHollowSquare(4);
