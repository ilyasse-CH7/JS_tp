
const title = document.getElementById('space');

title.style.color = 'blue';

function ICI(){
    const table = document.querySelector('table');

    const cells = table.querySelectorAll('td, th');

    cells.forEach(cell => {
        cell.style.border = '1px solid black';
        cell.style.padding = '10px 50px';
    });


    table.style.backgroundColor = 'red';
    table.style.borderCollapse = 'collapse';
//ici collapse pour une seule bordure pas deux
    table.style.border = '1px solid black';
}

function ajouter (){
    const list = document.getElementById('list');

    const li = document.createElement('li');
    li.textContent = "valide! ";

    const btn = document.createElement('button');
    btn.textContent = "❌";
    btn.classList.add("remove-li");

    li.appendChild(btn);
    list.appendChild(li);
}

const list = document.getElementById('list');

list.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-li')) {
        e.target.parentElement.remove();
    }
});


const entrer = document.getElementById('input');
const text = document.getElementById('text');
const longueur = document.getElementById('length');
const button = document.getElementById('btn');
const compteur = document.getElementById('compteur');
const message = document.getElementById('message');

let count = 0 ;

entrer.addEventListener('keyup', function(){
    text.textContent =entrer.value || "vide";
    longueur.textContent = entrer.value.length ;
})

entrer.addEventListener("focus", function () {
    entrer.style.backgroundColor = "#d1ffd1";
    message.textContent = "✏️ Vous êtes en train d’écrire...";
});

button.addEventListener('click', function(){
    count ++;
    compteur.textContent = count;
})

entrer.addEventListener("blur", function () {
   entrer.style.backgroundColor = "";
    message.textContent = "Champ quitté.";
});

const form = document.getElementById('myform');
const feedback = document.getElementById('formFeedback');
const edit = document.getElementById('pour_style');

edit.style.padding = '10px';
edit.style.display='flex' ;
edit.style.gap = "30px";

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('Age').value;

    feedback.innerHTML = `
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Age :</strong> ${age}</p>
    `;
    feedback.style.backgroundColor = 'green';

    console.log("Nom :", nom);
    console.log("Email :", email);
    console.log("Age :", age);
})




