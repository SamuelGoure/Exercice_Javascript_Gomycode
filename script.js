/*
function getCount(str) {
  var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0; i < str.length;i++){
      for(var j=0; j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      } 
    } 
    return vowelsCount;
  }

  console.log("salut");
  
*/
// fonction qui inverse une chaine de caractère 

/*   
function plusGrand(str){
        let strr = str.split(' ');
        array = [];

        for(let i = 0; i < strr.length; i++){
            array.push(strr[i].length);
        }
        console.log(Math.max(...array));

}

let word = "salut tttttt iuuuuuuuuuuuuuuu les amis de babiwood" ;
plusGrand(word);

*/

/*
function voyelle(str){
       let tab = 0;
       let voy = ["a", "e", "i", "o", "u"];
       for(let i=0; i<str.length; i++){
          for(let j=0; j<voy.length;j++){
            if(str[i] === voy[j]){
              tab++
            }
          }
       }
   return tab++;
}

console.log(voyelle("hello"));
*/

/*
function positiveNum(str){
  tab = 0;
     let sum = str.split(' ').join(',');
     for(let i=0; i<str.length; i++){
      if(sum[i]> 0){
        tab += sum[i];
      }
     }
     return tab++;
}

console.log(positiveNum('2,-1,4,3'));
 */

//-----------------------------------------------
/*
function positiveSum(arr) {
  var total = 0;    
 for (i = 0; i < arr.length; i++) {  
   if (arr[i] > 0) {                   
     total += arr[i];                  
   }
 }
 return total;                         
}

console.log(positiveSum([1,-2,2])); */
//---------------------------------------------------------------
/*
function findShort(s){
   let  total = [];
      let sentence = s.split(' ');
      for(let i=0; i<sentence.length; i++){
        total.push( sentence[i].length);
      }
      return (Math.min(...total));
}

let word = "Bonjour les amis comment ça va aujourdhuiii o"
findShort(word);

*/
/*
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let total = [];
    for (let i=0; i<args.length;i++){
      total.push(args[i].length);
      return (Math.min(total));
    }
  }
}
console.log(SmallestIntegerFinder([4,6,8,7])); */

/*
function solution(str){
      let words = str.split('').reverse().join(' ');
      return words;
}

 console.log(solution("world"));
 console.log(solution("word"));     */
/*
 function filternum(l){
  var newArr = []
	
	for(var i=0; i < l.length; i++){
		if (typeof l[i] === 'number'){
			newArr.push(l[i])
		} 
	}
	
	return newArr
 }
 let word = "salut les amis 7 7 hello 8 jamais";
 console.log(filternum(word));  */

 /*
 let word ="hello world!";

 function greeting(str){
  
 return word;
 
 }
 console.log(greeting(word));   */
 //----------------------------------------
/*

 function spinWords(string){
  
    console.log(string.split(' ').reverse());
    
 }

 let word = "Hey famille";
 spinWords(word);

 */
/*
 
 function spinWords(string) {

  var sentence = "";
  var separate = string.split(" ");
  
  for (var i = 0; i < separate.length; i++) {
    if (sentence) sentence += ' ';
    if (separate[i].length >= 5) {
      sentence += separate[i].split("").reverse().join("");
    } else {
      sentence += separate[i];
    }
  }
  return sentence;
}

console.log(spinWords("Hey fellow warriors")); */

/*
function digitalRoot(n) {
  console.log(n);
}
  let word = "salut les amis"
digitalRoot(word); */

/*
function smash (words) {
  console.log(words.join(' '));
  
};
let sentence = ['hello', 'world', 'this', 'is', 'great'];
smash(sentence); */

//-------------------------------------------------

//-------------------------------------------------------------------------------------------------------

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