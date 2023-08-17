/*var c = 1 
do{
    console.log(`passo ${c}`)
    c++
} while (c <= 4)*/

//--------------------------------------------------

/*var c = 1 
while (c <= 500){
    console.log(`passo ${c}`)
    c++
}*/

//---------------------------------------------------

/* OBS. os dois tem a mesMO RESULTADO!!!!!!!!!!!!!!!

WHILE ==> É FEITA A REPETIÇÃO NO INICIO 

DO WHILE ==> É FEITA A REPETIÇÃO NO FINAL */

//--------------------------------------------------


/*console.log('Vai Começar!')

for(var c = 1;c <= 5; c++){

    console.log(c)
}
console.log('Fim!!')

let valores = [8, 1, 7, 6, 5, 4, 2]

for(let pos = 5; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let valores = [8, 1, 7, 6, 5, 4, 2]
valores.sort() // colocar ordenado

for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)

}*/

let valores = [8, 1, 7, 6, 5, 4, 2]
valores.push()
valores.sort()

console.log(valores)
console.log(`O vetor tem ${valores.lenght} posições`)
console.log(`O primeiro valor do vetor é ${valores[1]}`)

let pos = valores.indexOf(8)

if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor esta na posição ${pos}`)
}