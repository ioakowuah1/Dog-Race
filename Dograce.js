let raceNumber = Math.floor(Math.random() * 1000);
var registerEarly = false;
const runnerAge = 16;
if (runnerAge > 18 && registerEarly ){
  raceNumber +=1000;
};
if (runnerAge > 18 && registerEarly){
  console.log(`Your race number is ${raceNumber} , you will race at 9:30am`);
} else if (runnerAge > 18 && !registerEarly){
  console.log(`Your race number is ${raceNumber}, you will race at 11:00am`);
} else if(runnerAge < 18){
  console.log(`Your race number is ${raceNumber}, you will race at 12:30pm`)
} else{
  console.log(`See the registration desk`)
};