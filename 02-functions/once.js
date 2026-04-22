function expensiveOperation() {
    console.log('Вызвана дорогая операция');
    return 42;
}

function once(fn){
    let called = false;
    let result;
    return function(...args
    ){
        if (!called) {
            result = fn(...args);
            called = true;
        }     
        
        return result;
     }
}

const onceOp = once(expensiveOperation);
console.log(onceOp()); // Вызвана дорогая операция \n 42
console.log(onceOp()); // 42
console.log(onceOp()); // 42
function sum(a, b) { return a + b; }
const onceSum = once(sum);
console.log(onceSum(2, 3)); // 5 (первый вызов)
console.log(onceSum(10, 20)); // 5 (игнорирует новые аргументы)