// Напишите функцию, которая принимает массив 
// (может содержать примитивы — числа, строки) 
// и возвращает новый массив, содержащий только уникальные элементы 
// (без повторений). Порядок должен сохраниться.

const arr = [1,1,0,2,3,'a','b','a']
function getUnique (arr){
    return arr.filter((item,index)=> arr.indexOf(item)==index)
}

console.log(getUnique(arr))

// через set
const set = new Set(arr)
console.log(set)
const newArr = [...set]
console.log(newArr)