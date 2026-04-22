// Напишите функцию createCounter(), которая возвращает другую функцию.
//  При каждом вызове возвращаемая функция должна увеличивать и возвращать
//  счётчик (начиная с 0).



function createCounter(){
    let count=0
    return function counter(){
        return count+=1
    }
}

const counter = createCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2