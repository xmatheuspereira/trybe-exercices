let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
console.log(numbers);

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}

console.log(soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = (soma / numbers.length);
console.log(media);

/*Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/
if (media > 20){
    console.log("Valor maior que 20!");
} else{
    console.log("Valor menor que 20!");
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorValor = 0;
for (i = 0; i < numbers.length; i += 1){
    if (numbers[i]>maiorValor){
        maiorValor = numbers[i];
    }
}
console.log(maiorValor);

/*Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/
let impares = 0;
for (number of numbers){
    if (number % 2 ==! 0){
        impares += 1;
    }
}
if (impares > 0){
    console.log("Valores ímpares encontrados: ", impares);
} else{
    console.log("Nenhum valor ímpar encontrado!");
}

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorValor = maiorValor;
for (const number of numbers){
    if (number < menorValor){
        menorValor = number;
    }
}
console.log(menorValor);

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let arr = [];
for (i = 1; i < 26; i += 1){
    arr.push(i);
}
console.log(arr);

/*Utilizando o array criado no exercício anterior 
imprima o resultado da divisão de cada um dos elementos por 2 .*/

let div = [];
for (i = 1; i <= arr.length; i += 1){
    div.push(i/2);
}
console.log(div)

