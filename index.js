function scuberGreetingForFeet(feet){
  // Write your code here!
  if(feet <= 400){
    return "This one is on me!"
  } else if (feet<2000 && feet>400){
    return "That will be twenty bucks."
  }else if (feet > 2000 && feet<2500){
    return "I will gladly take your thirty bucks."
  }else if(feet > 2500){
    return "No can do."
  }
}

function ternaryCheckCity(iscity){
  // Write your code here!
  if (iscity === "NYC"){
    return "Ok, sounds good."
  } else{
    return "No go.";
  }
   
}

function switchOnCharmFromTip(type){
  // Write your code here!
  switch(type){
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default:
      return "Bye."

  }
}