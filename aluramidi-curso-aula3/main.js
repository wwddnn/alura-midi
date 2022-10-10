function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontado ou seletor inválido");
  }
}

//queryselectorAll pega todas as teclas
const listaDeTeclas = document.querySelectorAll(".tecla");

//for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`; //template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    //onekeydown é qd o dedo do usuario aperta a tecla
    console.log(evento.code === "Space");

    if (evento.code === "Space" || evento.code === "Enter") {
      // || é o operador pip pip
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    //ondekeyup é qd o dedo do usuario solta a tecla
    tecla.classList.remove("ativa");
  };
}
