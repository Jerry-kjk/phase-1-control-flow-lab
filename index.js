function scuberGreetingForFeet(feet){
  // Write your code here!
  let ride;
  if ( feet <=400){
    ride='This one is on me!';
  }else if(feet> 2000 && feet < 2500){
    ride = 'I will gladly take your thirty bucks.';
  }else if(feet > 2500){
    ride = 'No can do.'
  }
  return ride;

}

scuberGreetingForFeet(199);

function ternaryCheckCity(cityName){
  // Write your code here!
  //syntax = condition ? true : false
  let city;
  return city = cityName === 'NYC' ? ("Ok, sounds good.") : ("No g
