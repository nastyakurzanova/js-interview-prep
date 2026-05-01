function delay (time) {
    return new Promise ((resolve) => {
        setTimeout(resolve, time);
    });
}

// return new Promise (resolve) => {setTimeout(resolve, time)}

console.log('Начинаю');
delay(2000).then(() => console.log('2 секунды прошли'));
console.log('Продолжаю делать другие дела');