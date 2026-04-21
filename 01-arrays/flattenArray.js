// Условие: Напишите функцию, которая принимает массив, 
// содержащий вложенные массивы (любой глубины), 
// и возвращает новый "плоский" массив, содержащий все элементы в одном уровне. 
// Например, [1, [2, [3, 4]]] → [1, 2, 3, 4].

// function flattenArray(arr){
//     return arr.flat(Infinity)
// }

// console.log(flattenArray([1,2,[3,4[5,6]]]))


// второй способ

function flattenArray(arr) {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}

 console.log(flattenArray([1,2,[3,4[5,6]]]))