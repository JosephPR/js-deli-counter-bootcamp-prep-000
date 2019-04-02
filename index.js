var katzDeliLine = [];
    
  
var place = katzDeliLine.length;
    
    
function takeANumber(katzDeliLine, name) {

  
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${place} in line.`
}


function nowServing(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length ) {
    i++;
  }
  if (place === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}.`);
}

function currentLine(katzDeliLine) {
  if()
  return (`Currently serving ${katzDeliLine.shift()}.`);
}

 var line = [];


 function currentLine(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push(` ` + [i+1] + `. `  + katzDeliLine[i])
    i++; 
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}

















