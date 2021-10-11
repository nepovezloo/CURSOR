// #1
getRandomArray = (length, min, max) => {
    let result = [];
    for(i = 0; i < length; i++) {
        let randomNumbers = Math.floor(Math.random() * (max - min + 1) + min);
        result[i] = randomNumbers;
    }
    return result;
}

console.log(getRandomArray(15, 1, 10))

// #3
getAvarage = (...numbers) => {
    const sum = numbers.reduce((acc, index) => acc + index, 0);
    return Math.round(sum / numbers.length);
}

console.log(getAvarage(1, 3, 7, 2.2, 28, 64, 29, 13, 5.5, 90.64, 40))

// #5
filterEvenNumber = (...numbers) => numbers.filter(number => number %2 !== 0);

console.log(filterEvenNumber(1, 2, 3, 4, 5, 6, 7, 8, 9))

// #6
countPositiveNumbers = (...numbers) => numbers.filter(number => number > 0);

console.log(countPositiveNumbers(1, 5, -1, -7, 4, -3, 2, 8, -9))

// #7
getDivideByFive = (...numbers) => numbers.filter(number => number %5 === 0);

console.log(getDivideByFive(1, 3, 76, 35, 27, 25, 10, 5, 93, 86, 55))

// #9
divideByThree = (word) => {
    let result = [];
    const lowerWord = word.toLowerCase();
    for(i = 0; i < lowerWord.length; i += 3) {
        let partOfWord = lowerWord.slice(i, i + 3)
        result.push(partOfWord)
    }
    return result;
}
console.log(divideByThree('ferdinand'))
