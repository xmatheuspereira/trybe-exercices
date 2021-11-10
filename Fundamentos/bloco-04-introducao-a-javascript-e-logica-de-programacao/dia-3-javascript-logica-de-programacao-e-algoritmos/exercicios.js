let n =5;


for (let i = 0; i < n; i += 1){
    let x = '';

    for(let j = 0; j < n; j += 1){
    x = x + '*';
    }
    console.log(x)
}


for (let i = 0; i < n; i += 1){
    let x = '';

    for(let j = 0; j <= i; j += 1){
    x = x + '*'
    
    }
    console.log(x);
}

//Codigo copiado do autor Bruno Zolini com a finalidade de compreender o for loop rodando ao contrário:
for (let i = 0; i < n; i += 1){
    let print = "";

    for(j = n - 1; j > i; j -= 1){
        print = print + " ";
    }
    for(j = 0; j <= i; j += 1){
        print = print + "*";
    }
    console.log(print);
}
