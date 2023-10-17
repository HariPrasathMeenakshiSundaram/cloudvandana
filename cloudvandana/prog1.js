let input = "I want to  be a Software Developer";
// split the user input uisng split()
let words = input.split(' ');

const reverseTheWords = words.map(word => {
  // Reverse each word
  return word.split('').reverse().join('');
});

let output = reverseTheWords.join(' ');
console.log(output);

