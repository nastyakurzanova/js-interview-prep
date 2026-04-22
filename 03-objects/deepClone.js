// Напишите функцию, которая создаёт глубокую копию объекта 
// (без использования structuredClone или внешних библиотек). 
// Объект может содержать вложенные объекты и массивы, 
// но не функции, Date и т.п.

function deepClone(obj){
    if (typeof obj === 'object'&& obj != null){
        if(Array.isArray(obj)){ 
            const newArr = []
            for (var index in obj) {
                newArr[index]=deepClone(obj[index])        
            }
            return newArr
        }
        const newObj = {}
        for (var key in obj) {
            newObj[key]=deepClone(obj[key]) 
        }
        return newObj
    }else{
        return obj
    }
}

const original = { a: 1, b: { c: 2 }, d: [1, 2, { e: 3 }] };
const copy = deepClone(original);
copy.b.c = 42;
copy.d[0] = 99;
copy.d[2].e = 100;
console.log(original.b.c);  // 2
console.log(original.d[0]); // 1
console.log(original.d[2].e); // 3