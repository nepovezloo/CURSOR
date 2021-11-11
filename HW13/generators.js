function* createIdGenerator () {
    i = 1;
    while(true) {
        yield i++
    }
}

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

//advanced
// function* newFontGenerator () {
//     let start = 14;
//     if(true) {
//         yield start +=2;
//     } else(false) {
//         yield start -=2;
//     }
// }