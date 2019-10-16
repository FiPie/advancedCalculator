var output = document.getElementById("output");
var regex = /\+|\*|\//; //in case the consecutive operands make no sense
var regexMinus = /\-/; //in case the input was double minus sign


function input(obj) {

  if (obj.value == "=") {
    console.log(eval(output.value));
    var evaluation = Math.round((eval(output.value) * 100)) / 100; //to get rid of floating point number error
    output.value = evaluation;
  } else if (obj.value == "C") {
    output.value = ""; //delete whole expression
  } else if (obj.value == "del") {
    output.value = output.value.slice(0, -1); //delete last input
  } else if (regexMinus.test(output.value[output.value.length - 1]) && (/\*|\//.test(obj.value))) {
    output.value += ""; //will stop nonsensical consecutive operands
  } else if ((regex.test(obj.value)) && (regex.test(output.value[output.value.length - 1]))) {
    output.value = output.value.slice(0, -1); //delete last operand
    output.value += obj.value; //switch to newly input operand
  } else if ((regexMinus.test(obj.value)) && (regexMinus.test(output.value[output.value.length - 1]))) {
    output.value += (" " + obj.value); //separating the minuses with a space to enable evaluation
  } else {
    output.value += obj.value;
  }
  console.log("output.value : " + output.value);
}