let cep = document.querySelector("#cep");
let rua = document.querySelector("#rua");
let cidade = document.querySelector("#cidade");
let bairro = document.querySelector("#bairro");
let UF = document.querySelector("#UF");

cep.onkeyup = async (event) => {
  if (cep.value.length == 8) {
    const URL_TO_FETCH = `https://brasilapi.com.br/api/cep/v2/${cep.value}`;
    fetch(URL_TO_FETCH, {
      method: "get", // opcional
    })
      .then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          rua.value = data.street;
          cidade.value = data.city;
          bairro.value = data.neighborhood;
          UF.value = data.state;
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  }
};
