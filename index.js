function scuberGreetingForFeet(number){
  // Write your code here!
  if (number<=400){
    return "This one is on me!"
  } else if (number>2000 && number<2500){
    return "I will gladly take your thirty bucks."
  } else if (number>2500){
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city=='NYC'){
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
} 

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
  case "generous":
  return "Thank you so much.";
  break;
  case "not as generous":
  return "Thank you.";
  break;
  default:
  return "Bye."
}
}