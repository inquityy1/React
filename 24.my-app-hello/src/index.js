import foods from "./foods";
import { choice, remove } from "./helpers";

// Randomly draw a fruit from the array
let fruit = choice(foods);
// Log the message ""
console.log(`I'd like one ${fruit}, please.`);
// Log second message ""
console.log(`Here you go: ${fruit}`);
// Log third message ""
// Remove the fruit from the array of fruits
let remaining = remove(foods, fruit);
// Log fourth message ""
console.log(
  `I'm sorry, we're all out. we have ${remaining.length} other foods left.`
);
