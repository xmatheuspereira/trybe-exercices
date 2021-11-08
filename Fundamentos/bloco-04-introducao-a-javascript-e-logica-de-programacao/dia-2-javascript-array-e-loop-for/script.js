let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];

console.log(searchForFirstTask); 

let searchForLastTask = tasksList[tasksList.length - 1];

console.log(searchForLastTask); 

// .push adiciona ao final do array
tasksList.push('Fazer exercícios da Trybe');
console.log(tasksList);

// .unshift adiciona ao início do array
tasksList.unshift('Escovar os dentes')
console.log(tasksList);

// .pop remove o ultimo item do array
tasksList.pop();
console.log(tasksList);

// .shift remove do inicio do array
tasksList.shift();
console.log(tasksList);

//.indexOf é usado pra procurar o índice
let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);