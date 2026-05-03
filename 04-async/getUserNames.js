function getUserNames(){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => users.map(user=>user.name))
    .catch(err=>{
        console.log("error!", err) 
        throw err});
    }


getUserNames().then(names => console.log(names));
// ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', ...]