// Простая: Напишите функцию, которая принимает массив чисел
// и возвращает новый, где все числа умножены на 2
// (использовать map).

const arr = [1,2,3,4,5]

function mult (arr){
    const arr2 = arr.map(i=>i*2)
    return arr2
}

// const doubleArr = arr => arr.map(num=num*2) переписанная функция выше

console.log(mult(arr))