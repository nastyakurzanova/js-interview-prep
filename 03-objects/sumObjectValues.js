// Напишите функцию, которая принимает объект 
// с числовыми значениями 
// и возвращает сумму всех значений.

function sumObjectValues (obj) {
    const arr = Object.values(obj).reduce((sum, current) => sum+current,0 )
    return arr
}

console.log(sumObjectValues({a: 1, b: 2, c: 3})); // 6