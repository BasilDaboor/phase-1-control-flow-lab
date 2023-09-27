function scuberGreetingForFeet(ride){
  // Write your code here!
if (ride <= 400)
return 'This one is on me!';
else 
if ( ride <2000)
return 'That will be twenty bucks.';
if ( ride >2500)
return 'No can do.';
else
return 'I will gladly take your thirty bucks.';

}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC")
  return "Ok, sounds good.";
else
return "No go.";
}

function switchOnCharmFromTip(generous){
  // Write your code here!
  switch (generous) {
    case "generous":
      return "Thank you so much.";
      
      case "not as generous":
      return "Thank you.";
  
    default:
      return "Bye.";
     
  }

 
//   if (generous === "generous")
//    return "Thank you so much.";
  
// else
//  if ( generous ==="not as generous"){ 
//   return "Thank you.";

//  }
//  else
// return "Bye.";


}
