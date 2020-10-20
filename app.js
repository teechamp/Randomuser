let todo = document.getElementById('todo')
let James = document.getElementById("James");
let img = document.getElementById("img");
let btn = document.getElementById("btn");
btn.addEventListener('click', getJason);
todo.addEventListener('mouseover', displayButton );
document.addEventListener('DOMContentLoaded',getJason );
const URL = 'https://randomuser.me/api/'
function getJason() {
fetch(URL)
.then(function(response){
if(!response.ok){
throw Error(response.statusText);
}
return response.json();
})
.then(function(responseAsJson){
James.innerHTML = responseAsJson.results[0].name.title ;
James.innerHTML = responseAsJson.results[0].name.first ;
James.innerHTML = responseAsJson.results[0].name.last ;
img.src = responseAsJson.results[0].picture.large;
})
.catch(function(error){
console.log(error);
})
}
function displayButton(){
btn.style.display= "block";
}