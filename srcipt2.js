// Exercice 1


function numbers(arr){
    let tab = [];
      
       for(let i=0; i<arr.length; i++){
        tab.push(arr.join());
       }
       return tab;
  }
  
  word = ["4","8","3","09","17"];
  console.log(numbers(word));

  
// Exercice 2


function numberpair(arr){
    let sum = 0;
      for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
          sum += arr[i];
          
        } 
      }
      return sum;
}

word = ["7","4","8","3","09","17"];
console.log(numberpair(word.join('-')));   

// Exercice 3 Gomycode:

// Somme des nombres

function numbersomm(arr){
           
    let   sum = 0;            // j'ai initialié la somme à 0;
   for(let i=0; i<arr.length; i++){   // J'ai parcouru tout le tableau avec la boucle for
          sum += parseInt(arr[i]);   // j'ai affecté la valeur de l'element[i] du tableau et j'ai affecté sa valeur à sum;
   }
   return sum;           // j'ai retourné la somme de sum;
   
}

let word = ["2","4","5"];
console.log(numbersomm(word));             // test pour voir le resultat   


// Exercice 4


function typeValue(arr){
    let sum = 0;
      for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
          return true;
          } 
          else {
            return false;
          }
      }
     
  }
  
  word = ["4","8","3","09","17"];
  console.log(typeValue(word));      