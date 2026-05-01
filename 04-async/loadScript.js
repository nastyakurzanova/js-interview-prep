// Напишите функцию loadScript(src), которая возвращает промис.
// Она должна симулировать загрузку скрипта: через 1 секунду,
// если src не пустой — вызвать resolve(src), если пустой — reject(new Error('Пустой src')).

function loadScript(src) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => { if (src==null || src==''){
            reject(new Error('Пустой src')) 
        }else{
            resolve(src)
        }}, 1000)
       
    } )
}

loadScript('script.js')
    .then(src => console.log('Загружен:', src))
    .catch(err => console.error('Ошибка:', err.message));