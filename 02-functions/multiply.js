// Реализуйте функцию multiply, которая может быть вызвана как
// multiply(a, b) и как multiply(a)(b). 
// Оба варианта должны возвращать произведение.

function multiply (a,b){
    if (b!= undefined){
        return a*b
    }else{
        return function secondArg(b){
            return a*b
        }
    }

}


console.log(multiply(2, 3)); // 6
console.log(multiply(2)(3)); // 6
const multiplyByTwo = multiply(2); // это функция, ждущая второй аргумент
console.log(multiplyByTwo(5)); // 10