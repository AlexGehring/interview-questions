var coinFace = Math.floor(Math.random() *2);
while (coinFace === 0){
      console.log("Heads! Flipping again...");
      var coinFace = Math.floor(Math.random() *2);
    }
    console.log("Tails! Done flipping!");

/* Math.random - between 0 and 1, not including 1
Math.floor   - returns largest integer less than or equal to the number
since function Math.random() will never === 1, multiply it by 2 and round
down to the nearest largest integer to give you a 0 or 1.
