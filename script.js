let vezDoJogador = 1;
const textoGanhador = document.querySelector(".textoGanhador");
const quadrados = Array.from(document.querySelectorAll(".quadrado"));

function limparTabuleiro(){
quadrados.forEach((quadrado) => (quadrado.textContent = ""));
}

function valorItem(index) {
  return quadrados[index].textContent
}

quadrados.forEach((quadrado) => {
  quadrado.addEventListener("click",() => {
    
    //Marca a vez do jogador x e do jogador O
    if(vezDoJogador === 1){
      quadrado.textContent = "X";
      vezDoJogador = 2;
    }
    else if (vezDoJogador === 2){
      quadrado.textContent = "O";
      vezDoJogador = 1;
    }
    //validar se o jogador ganhou marcando a linha completa
    if(
      quadrados[0].textContent === quadrados[1].textContent &&
      quadrados[1].textContent === quadrados[2].textContent &&
      quadrados[0].textContent !== ""
  ) {
      limparTabuleiro()
      textoGanhador(`Jogador ${quadrados[0].textContent} venceu`)
  }
  
  if(
      quadrados[3].textContent === quadrados[4].textContent &&
      quadrados[4].textContent === quadrados[5].textContent &&
      quadrados[3].textContent !== ""
  ) {
    limparTabuleiro()
    textoGanhador(`Jogador ${quadrados[1].textContent} venceu`)
  }
  
  if(
      quadrados[6].textContent === quadrados[7].textContent &&
      quadrados[7].textContent === quadrados[8].textContent &&
      quadrados[0].textContent !== ""
  ) {
    limparTabuleiro()
    textoGanhador(`Jogador ${quadrados[6].textContent} venceu`)
  }
    //validar se o jogador ganhou marcando a coluna completa
  if(
    quadrados[0].textContent === quadrados[3].textContent &&
    quadrados[3].textContent === quadrados[6].textContent 
) {
  limparTabuleiro()
  textoGanhador(`Jogador ${quadrados[8].textContent} venceu`)
}

  if(
      quadrados[2].textContent === quadrados[5].textContent &&
      quadrados[5].textContent === quadrados[8].textContent &&
      quadrados[2].textContent !== ""
  ) {
    limparTabuleiro()
    textoGanhador(`Jogador ${quadrados[2].textContent} venceu`)
  }

  if(
      quadrados[2].textContent === quadrados[4].textContent &&
      quadrados[4].textContent === quadrados[6].textContent &&
      quadrados[2].textContent !== ""
  ){
    limparTabuleiro()
    textoGanhador(`Jogador ${quadrados[2].textContent} venceu`)
  }
  if(
    quadrados[0].textContent === quadrados[4].textContent &&
    quadrados[4].textContent === quadrados[8].textContent &&
    quadrados[0].textContent !== ""
){
  limparTabuleiro()
  textoGanhador(`Jogador ${quadrados[0].textContent} venceu`)
}
  });
});
