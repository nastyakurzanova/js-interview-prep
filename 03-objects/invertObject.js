// Напишите функцию, которая «переворачивает» объект: 
// ключи становятся значениями, а значения — ключами. 
// Считаем, что все значения уникальны и могут быть строками/числами.

function invertObject(obj){
    const newObj = {};
    for (var key in obj){
        newObj[obj[key]] = key
    }
    return newObj
}

function invertObjectReduce(obj){
    return  Object.entries(obj).reduce((acc, [key,value]) =>{
        acc[value] = key;
        return acc
    },{})
    return newObj
}

console.log(invertObject({a: 1, b: 2, c: 3}))
console.log(invertObjectReduce({a: 1, b: 2, c: 3}))