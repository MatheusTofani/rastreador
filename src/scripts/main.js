document.getElementById('buscarCep').addEventListener('click', function () {
    const cep = document.getElementById('cep').value.trim();
    const resultado = document.getElementById('resultado');

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(function (res) {

            return res.json();
        })

        .then(function (json) {

        })
        .catch(function (error) {
            console.error('Erro:', error);
            document.getElementById('resultado').textContent = 'Erro ao buscar o CEP. Tente novamente mais tarde.';
        });

});
