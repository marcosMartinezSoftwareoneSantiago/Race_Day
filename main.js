let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistered = true;
let ageOfTheRunner = 18;
if (ageOfTheRunner >=18 && earlyRegistered){
  raceNumber += 1000;
} else {
  if (ageOfTheRunner < 18){
    if (earlyRegistered){
      console.log(`You will race at 9:30 as the ${raceNumber}`);
    }else{
      console.log(`Youth registrant run at 12:30 pm as the ${raceNumber}`);
    }
  }else{
    console.log(`You will race at 11:00 as the ${raceNumber}`);
  }
}