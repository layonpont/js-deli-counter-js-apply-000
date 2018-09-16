function takeANumber(lineNumber, name){
  var array = [];

  for(var i = 0; i < lineNumber.length; i++){
    array.push("Welcome, " + name[i] + ". You are number " + lineNumber[i] + "in line.");
}
  return array;
}
