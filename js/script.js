function cambiarColor() {
  var parrafo = document.querySelectorAll("p");
    parrafo.forEach(function(valor,indice){
      parrafo[indice].style.color = 'red';
      // console.log(parrafo[indice].innerHTML);
    })
}

