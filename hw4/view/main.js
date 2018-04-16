var url = 'http://localhost:3000/';
function fetchData (url) {
    fetch(url, {
        mode: 'cors'
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.log("Oops, error", e))
}
window.onload = function () {
    fetchData(url);
}