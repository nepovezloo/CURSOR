//1
const getMaxDigit = (number) => {
    if(number === 0) {return 0;}
    else {
        return Math.max(number % 10, getMaxDigit(Math.floor(number / 10)));
    }
}
//2
const extent= (number, pow) => {
    let sum = 1;
    for(i = 0; i < pow; i++){
        sum *= number;
    }
    return sum;
}
//3
const userName = (name) => {
  return name[0].toUpperCase() + name.toLowerCase().slice(1);
}
//4
const changeWithTax = (cash) => {
  tax = 0.195;
  sum = 0;
  return sum = cash - (cash * tax);
}
//5
const randomNumber= (n, m) => {
    return Math.floor(Math.random() * m) + n;
}
//6
const countLetter= (letter, word) => {
    const newLetter = letter.toLowerCase();
    const newWord = word.toLowerCase();
    let result = 0;
      for(let i = 0; i < word.length; i++){
          if(newWord[i] === letter){
            result ++ ;
          }
      }
      return result;
    }
//7
const convertCurrency = (amount) => {
  if(amount.includes('$')){
     return (parseInt(amount) * 25) + 'UAH';
  } if(amount.includes('UAH')){
     return (parseInt(amount) / 25) + '$';
  } else{
     alert('Only $ or UAH')
     return 0;
  }
}
//8
const randomPassword= (number = 8) => {
  let password = "";
  for (let i = 0; i < number; i++) {
    password += Math.round(Math.random() * 9);
  }
  return password;
}
//9
const deleteLetters= (letter, word) => {
  let result = ""
  for(i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      continue;
    }
    result += word[i];
  }
  return result;
}
  console.log(`Функція №1 : ${getMaxDigit(16394)}
  Функція №2 : ${extent(2, 4)}
  Функція №3 : ${userName('вЛАД')}
  Функція №4 : ${changeWithTax(1234)}
  Функція №5 : ${randomNumber(1, 10)}
  Функція №6 : ${countLetter('а', 'Асталавіста')}
  Функція №7 : ${convertCurrency('1000 UAH')}
  Функція №8 : ${randomPassword(5)}
  Функція №9 : ${deleteLetters('a', 'blablabla')}`)
