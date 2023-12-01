let formulario = document.querySelector("form");

const validarCampos = (nome, tel, email, renda, residencia, opcao) => {
  let control = true;
  if (nome.value.trim() == "") {
    nome.classList.add("erro");
    control = false;
  }
  if (tel.value.trim() == "") {
    tel.classList.add("erro");
    control = false;
  }
  if (email.value.trim() == "") {
    email.classList.add("erro");
    control = false;
  }

  if (renda == null) {
    let elenmentoErro = document.createElement("#erro-renda");
    elenmentoErro.classList.add("msgm-erro--active");
  }
  return control;
};

let nome = document.querySelector("#nome");
nome.addEventListener("blur", () => {
  nome.style.backgroundColor = "pink";
  console.log("entrou");
});

formulario.addEventListener("submit", (event) => {
  let nome = document.querySelector("#nome");
  let tel = document.querySelector("#telefone");
  let email = document.querySelector("#email");
  let renda = document.querySelector("input[name='renda']:checked");
  let residencia = document.querySelector("#residencia");
  let opcao = residencia.options[residencia.selectedIndex];
  let intencao = document.querySelector("#intencao");
  console.log(renda);

  if (validarCampos(nome, tel, email, renda, residencia, opcao, intencao)) {
    let adotante = {
      nome: nome.value.trim(),
      tel: telefone.value.trim(),
      email: email.value.trim(),
      renda: renda.value,
      residencia: opcao.value,
      intencao: intencao.value.trim(),
      idAnimal: sessionStorage.getItem("idAnimal"),
    };

    let adotanteJson = JSON.stringify(adotante);
    console.log(adotanteJson);
    
    let adotante2 = JSON.parse(adotanteJson);
    console.log(adotante2);

  } else event.preventDefault();
});
