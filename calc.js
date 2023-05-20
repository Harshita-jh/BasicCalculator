function add()
{
  var numOne, numTwo, resultAdd;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  resultAdd = numOne + numTwo;
  document.getElementById("answer").value = resultAdd;
}
function sub()
{
  var numOne, numTwo, resultSub;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  resultSub = numOne - numTwo;
  document.getElementById("answer").value = resultSub;
}
function mul()
{
  var numOne, numTwo, resultMul;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  resultMul = numOne * numTwo;
  document.getElementById("answer").value = resultMul;
}
function div()
{
  var numOne, numTwo, resultDiv;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  resultDiv = numOne / numTwo;
  document.getElementById("answer").value = resultDiv;
}