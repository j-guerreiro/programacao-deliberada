/*
    Temos um vetor(array) de N inteiros;
    Devemos encontrar dentro do vetor o maior valor e mostrar na tela;
*/

//vetor de inteiros com 6 elementos
const vetor = [9, 10, 13, 12, 17, 20, 2];

/* 
   funcao recebe um vetor de inteiros e
   encontra o maior valor
*/
function maiorElemento(alice){
    var maiorValor = alice[0];
    for(let i = 0; i < alice.length; i++) 
        if(alice[i] > maiorValor)
            maiorValor = alice[i];
    
    return maiorValor;
};
console.log(maiorElemento(vetor));