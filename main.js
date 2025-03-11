// задание 1
const logItems = function (array) {
    for (let i = 1; i < array.length; i++) {
         console.log(`${i} - ${array[i]}`);
        
    }
  };
  
  
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// задание 2


const calculateEngravingPrice = function (message, pricePerWord) {
    let numberOfWords = message.split(' ');
    let sum = numberOfWords.length * pricePerWord;
    return sum;
};


console.log(
    calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
    calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120


// задание 3
const findLongestWord = function (string) {
    let words = string.split(' ');
    let word = '';
    for (const aaa of words) {
      if (aaa.length > word.length) {
       word = aaa;
      }
    } 
    return word;
  };
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'


// задание 4
const formatString = function (string) {
   if (string.length > 40) {
      return string.slice(0, 40) + '...';
   } else{
      return string;
   }
};


console.log(('Curabitur ligula sapien, tincidunt non.'));
// повернеться оригінальний рядок

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// повернеться форматований рядок

console.log(formatString('Curabitur ligula sapien.'));
// повернеться оригінальний рядок

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);

// задание 5
const checkForSpam = function (message) {
  return message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale') ;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// задание 6
let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число (фбо Cancel)");
    if (input === null) {
        break;
    }
    const number = Number(input);
    if (isNaN(number)) {
        alert("Це не число, попробуйте ще раз");
        continue;
    }
    numbers.push(number);
}

if (numbers.length > 0) {
    for (const num of numbers) {
        total += num;
    }
    console.log(total);
}