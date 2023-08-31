const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findLargest(numbers) {
  let largest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

const largestNumber = findLargest(numbers);
console.log(largestNumber);

function factorial(n) {
  let result = 1;
  if (n === 0 || n === 1) {
    return result;
  } else if (n > 1) {
    for (let i = n; i >= 1; i--) {
      result = result * i;
    }
    return result;
  } else {
    console.log("number must be positive");
  }
}

const factorialResult = factorial(7);
console.log(factorialResult);

const someArray = ["car", "building", "child", "car", "street", "man", "child"];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

const removedDuplicates = removeDuplicates(someArray);
console.log(removedDuplicates);

function countDuplicates(arr) {
  let count = {};

  arr.forEach((i) => {
    count[i] = (count[i] || 0) + 1;
  });
  return count;
}

const duplicatesCount = countDuplicates(someArray);
console.log(duplicatesCount); ///// მეოთხე დავალებაა ეს კი გავაკეთე გუგლის დახმარებით მაგრამ ცოტათი ბუნდოვანია როგორ მუშაობს.

function getLongestWord(sentence) {
  let words = sentence.split(" ");
  let maxLength = 0;
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i];
    }
  }

  return longestWord;
}

const randomSentence = "Hello everyone, my name is Ilia";
const longestWord = getLongestWord(randomSentence);
console.log(longestWord);

function rotate(arr, n) {
  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop());
  }

  return arr;
}

const rotatedArray = rotate(numbers, 5);
console.log(rotatedArray);

function countWords(sentence) {
  let count = sentence.split(" ");

  return count.length;
}

const countedWords = countWords(randomSentence);
console.log(countedWords);

function reverseString(sentence) {
  let words = sentence.split(" ");
  let reversedWords = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words.pop(i));
  }
  let reversedSentence = reversedWords.join(" ");

  return reversedSentence;
  
}

const reversedString = reverseString(randomSentence);
console.log(reversedString);
