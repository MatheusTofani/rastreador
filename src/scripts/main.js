document.querySelector('.box__form__cep__button').addEventListener('click', function (e) {
    e.preventDefault();  // Previne a atualização da página
    
    const cep = document.querySelector('.box__form__cep__input').value;
    const inputCidade = document.querySelector('.box__form__cidade__input');
    const inputEstado = document.querySelector('.box__form__estado__input');

    if (cep === "") {
        alert('Por favor, insira um CEP.');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            console.log(json);
            inputCidade.value = json.localidade;
            inputEstado.value = json.uf;
        })
        .catch(function (err) {
            console.error('Erro ao buscar CEP:', err);
        });
});
