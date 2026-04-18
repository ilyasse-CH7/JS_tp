console.log('Happy developing');
function analyserNombres(){

 let entrer;
 let sum = 0 ;

    let nombre = prompt('Combien de nombres Voulez vous saisir : ');
     nombre = parseInt(nombre)

    for (let i = 1 ; i <= nombre ; i++){
         entrer = prompt("enter number : " + i );
         entrer = parseInt(entrer);

         if ( entrer % 2 == 0 ) {
             console.log('Nombre ' + entrer +' est pair !')
         }
        else {
            console.log('Nombre ' + entrer +' est impair !')
        }

        sum += entrer ;

    }

    console.log('Somme totale : ' + sum);
    console.log('La moyenne  : ' + sum/nombre);

}


