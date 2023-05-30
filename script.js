var a1 = document.getElementById("a1").value;
var a2 = document.getElementById("a2").value;
var a3 = document.getElementById("a3").value;

var b1 = document.getElementById("b1").value;
var b2 = document.getElementById("b2").value;
var b3 = document.getElementById("b3").value;

var c1 = document.getElementById("c1").value;
var c2 = document.getElementById("c2").value;
var c3 = document.getElementById("c3").value;

var d1 = document.getElementById("d1").value;
var d2 = document.getElementById("d2").value;
var d3 = document.getElementById("d3").value;
/*
function handleSubmit() {
    // Get form values
    var a1 = document.getElementById("a1").value;
    var a2 = document.getElementById("a1").value;
    var a3 = document.getElementById("a1").value;

 
  
    // Create output string
    var outputString = `X: ${a1}<br>Y: ${line2}<br>Z: ${line3}`;
  
    // Display output
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = outputString;
  }
*/
  
  function solveEquations(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3) {
   /*
    line1 = String(line1);
    line1 = String(line2);
    line1 = String(line3);
   */

    // Parse the coefficients and constants from the lines of text
   // var [a1, b1, c1, d1] = line1.split(" ").map(parseFloat);
    //var [a2, b2, c2, d2] = line2.split(" ").map(parseFloat);
   // var [a3, b3, c3, d3] = line3.split(" ").map(parseFloat);
  
    // Solve the system of equations using Gaussian elimination
    var matrix = [
      [a1, b1, c1, d1],
      [a2, b2, c2, d2],
      [a3, b3, c3, d3]
    ];
  
    for (let i = 0; i < 3; i++) {
      var pivot = matrix[i][i];
      for (let j = i; j < 4; j++) {
        matrix[i][j] /= pivot;
      }
      for (let k = i + 1; k < 3; k++) {
        var factor = matrix[k][i];
        for (let j = i; j < 4; j++) {
          matrix[k][j] -= factor * matrix[i][j];
        }
      }
    }
  
    var z = matrix[2][3];
    var y = matrix[1][3] - matrix[1][2] * z;
    var x = matrix[0][3] - matrix[0][1] * y - matrix[0][2] * z;
  
    // Return the solution as an array
    return [x, y, z];
  }
  
  //const line1 = '2 3 -1 9';
  //const line2 = '-3 -4 7 -1';
  //const line3 = '1 -6 -1 -14';


  var a1 = 2;
  var a2 = -3;
  var a3 = 1;

  var b1 = 3;
  var b2 = -4;
  var b3 = -6;

  var c1 = -1;
  var c2 = 7;
  var c3 = -1;

  var d1 = 9;
  var d2 = -1;
  var d3 = -14;

  //var [x, y, z] = solveEquations(line1, line2, line3);
  //console.log(`x = ${x}, y = ${y}, z = ${z}`);
  window.alert(solveEquations(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3));
  