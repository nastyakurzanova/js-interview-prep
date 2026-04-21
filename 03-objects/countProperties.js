// Напишите функцию, которая возвращает количество собственных 
// (не унаследованных) свойств объекта.

function countProperties(obj){
    return Object.keys(obj).length
}



console.log(countProperties({a: 1, b: 2, c: 3, d:{av: 2, cd: 4, df:56}, e:{qw:4,ap:6}}))