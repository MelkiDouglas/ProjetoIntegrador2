document.addEventListener('input', function (e) {
    if (e.target.id === 'inputValorVenda') {
        formatCurrency(e.target);
    }
});

function formatCurrency(input) {
    const numericValue = input.value.replace(/[^0-9]/g, '');

    const formattedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numericValue / 100);

    input.value = formattedValue;
}

function redirecionarParaIndex() {
    window.location.href = 'index.html';
}

function redirecionarParaVender() {
    window.location.href = 'vender.html';
}

function redirecionarParaCadastrar() {
    window.location.href = 'cadastrar.html';
}

function redirecionarParaEstoque() {
    window.location.href = 'estoque.html';
}

function redirecionarParaHistorico() {
    window.location.href = 'historico.html';
}

document.addEventListener('DOMContentLoaded', function () {
    const limparButton = document.getElementById('limparButton');
    limparButton.addEventListener('click', function () {
        // Limpar os campos de entrada e a área de texto
        document.getElementById('inputVenda').value = '';
        document.getElementById('inputCliente').value = '';
        document.getElementById('inputValorVenda').value = '';
        document.getElementById('inputObservacao').value = '';
    });

    const venderButton = document.getElementById('venderButton');

    venderButton.addEventListener('click', function () {
        // Redireciona para a página "vender.html"
        window.location.href = 'vender.html';
    });
});
