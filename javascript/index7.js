//Fonction permettant le calcul et renvoi du résultat
function calculus(primeNumber, secNumber){
  //Calcul
  var multiplyByTwo = (parseInt(primeNumber)*2);
  var addFive = multiplyByTwo+5;
  var multiplyByFifty = (addFive*50);
  var minusYOB = multiplyByFifty-parseInt(secNumber);
  var calcResult = minusYOB+1766;
  //renvoi du résultat
  return calcResult;
};
//Contrôle des données et affichage via la fonction Calculus()
function displayResult(){
  // On récupère les éléments saisis dans le formulaire
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  // Déclaration de constantes définissant la Regex pour la pointure et l'année
  var regexFootSize =  /^\d{2}$/;
  var regexYOB =  /^\d{4}$/;
  // Condition gérant les erreurs de saisie
  if(!regexFootSize.test(+shoeSize)){
    //PAS BON : Premier nombre
    alert("Erreur de saisie : Peu importe ce que vous avez mis mais "+shoeSize+", c'est pas bon !");
  }else if((!regexYOB.test(+yearOfBirth))){
    //PAS BON : Deuxième nombre
    alert("Erreur de saisie : Peu importe ce que vous avez mis mais "+yearOfBirth+", c'est pas bon !");
  }else{
    //TOUT BON !
    var resultat = calculus(shoeSize,yearOfBirth);
    //Affichage du résulat
    alert("Le résultat de l'opération entre "+shoeSize+" et "+yearOfBirth+" est : "+resultat);
  }
};
