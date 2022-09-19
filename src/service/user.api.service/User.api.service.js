const _url = 'https://jsonplaceholder.typicode.com/users';
const getUsers=()=>{
    return fetch(_url)
        .then(value => value.json())
}
export {getUsers};