var matriz = [
  [1,3,3,5],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

//1
var somacoluna = 0;

for(var i = 0; i < matriz.length; i++) {
  for(var j = 0; j < matriz.length; j++) {
    somacoluna = matriz[0][0] + matriz[1][0] + matriz[2][0] + matriz[3][0]
  }
}

console.log("A soma dos elementos da primeira coluna é =", somacoluna);

//2 
var produtolinha = 0;

for(var i = 0; i < matriz.length; i++) {
  for(var j = 0; j < matriz.length; j++) {
    produtolinha = matriz[0][0] * matriz[0][1] * matriz[0][2] * matriz[0][3]
  }
}

console.log("O produto dos elementos da primeira linha é =", produtolinha);

//3
var somatotal = 0;

for(var i = 0; i < matriz.length; i++) {
  for(var j = 0; j < matriz.length; j++) {
    somatotal += matriz[i][j];
  }
}

console.log("A soma de todos os elementos é =", somatotal);

//4
var produtodiagonal = 0;

for(var i = 0; i < matriz.length; i++) {
  for(var j = 0; j < matriz.length; j++) {
    produtodiagonal = matriz[0][0] * matriz[1][1] * matriz[2][2] * matriz[3][3];
  }
}

console.log("O produto da diagonal principal é =", produtodiagonal);