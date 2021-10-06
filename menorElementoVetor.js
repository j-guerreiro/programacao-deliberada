/*
    Temos um vetor(array) de inteiros;
    Devemos encontrar o menor valor e mostrar na tela;
*/
const vetor = [4, 6, 10, 12, 13, 14, 2];
/*
    A função recebe um vetor e retorna seu menor valor;
*/
function menorValor(bob){
    var menor = bob[0];
    for(let i = 0; i < bob.length; i++)
        if(bob[i] < menor)
            menor = bob[i];
    return menor
}
console.log(menorValor(vetor));