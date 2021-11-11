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

// advanced
function* newFontGenerator (size) {
    let action = yield size;
    while(true) {
        if(action === "up") {
            size += 2
        } else if (action === "down") {
            size -= 2
        }
    }
}

const fontGenerator = newFontGenerator(14)
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
