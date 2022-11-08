var numeroSecreto = parseInt(Math.random() * 11);
var numeroTentativas = 3;


function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  
  var recomecar = document.getElementById("botaoRecomecar")
  recomecar.addEventListener("click", () => {
    location.reload()
  })
  
  var tenteNovamente = document.getElementById("botaoTenteNovamente")
  tenteNovamente.addEventListener("click", () => {
    location.reload()
  })

  if (numeroTentativas > 0) {
    if (chute == numeroSecreto) {
      resultado.style.color = "#228B22";
      recomecar.style.visibility="visible";
      resultado.innerHTML = (`UAU! Você acertou!<br>O número secreto é ${numeroSecreto}`)
    } else if (chute > 10 || chute < 0) {
      resultado.style.color = "#FFD700";
      resultado.innerHTML = "Você deve escolher um número de 0 a 10";
    } else if (chute < numeroSecreto) {
      resultado.style.color = "#FFD700";
      resultado.innerHTML = (`Você está quase lá!<br> O número secreto é MAIOR que o nº ${chute}<br>Você tem ${numeroTentativas} tentativas`);
    } else if (chute > numeroSecreto) {
      resultado.style.color = "#FFD700";
      resultado.innerHTML = (`Você está quase lá!<br> O número secreto é MENOR que o nº ${chute}<br>Você tem ${numeroTentativas} tentativas`);
    } numeroTentativas --;
    } else {
      resultado.style.color = "#FF0000";
      tenteNovamente.style.visibility = "visible";
      resultado.innerHTML = (`Acabaram as suas tentativas.<br>O número secreto era ${numeroSecreto}`);
  }

  console.log(numeroTentativas)

  document.getElementById('valor').value='';
  document.getElementById('botaoChutar').disabled='disabled';
}

function typeWriter(elemento) {
	const textoArray=elemento.innerHTML.split('');
	elemento.innerHTML='';
	textoArray.forEach((letra,i) => {
		setTimeout(() => elemento.innerHTML += letra ,75*i)
	});
}
const titulo=document.querySelector('p');
typeWriter(titulo);

//cria um event listener que escuta mudanças no input
document.getElementById("valor").addEventListener("input", function(event) {
    
  //busca conteúdo do input
    var conteudo = document.getElementById("valor").value;

  
    //valida conteudo do input 
    if (conteudo !== null && conteudo !== '') {
      //habilita o botão
      document.getElementById("botaoChutar").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("botaoChutar").disabled = true;
    }
});