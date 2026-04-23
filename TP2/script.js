const logo = document.getElementById('space');
const pargraphe =document.getElementById('x');
const input = document.getElementById('info');
const table = logo.querySelector('table');


const cells = table.querySelectorAll('td, th');

cells.forEach(cell => {
    cell.style.border = '1px solid black';
});


table.style.backgroundColor = 'red';
table.style.borderCollapse = 'collapse';
table.style.border = '1px solid black';

pargraphe.innerText = 'Hello World!';
input.placeholder = 'Hello World!';
