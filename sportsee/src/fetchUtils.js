export function FetchData(uri){
    return fetch('http://localhost:3001' + uri)
    .then(response => {
        return response.json();
    })
}