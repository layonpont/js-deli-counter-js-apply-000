  function takeANumber(katzDeli, newCustomer) {

    if (katzDeli.length > 0);
     katzDeli.push(newCustomer);
     return ('Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.')
  }

 function nowServing(katzDeliLine){
   if (katzDeliLine === 0){
     return "There is nobody waiting to be served!";
   }

   var customer = katzDeliLine.shift();
   return "Currently serving " + customer + ".";

 }
