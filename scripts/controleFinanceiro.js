let titulo;
let total;
let tipo;
let bntControleFinanceiro;
let uldashboard;

titulo = document.getElementById("titulo");
total = document.getElementById("total");
tipo = document.getElementById("tipo");
bntControleFinanceiro = document.getElementById("bntControleFinanceiro");
uldashboard = document.getElementById("dashboard");

total.addEventListener("input", () => {
    if (total.value < 0) {
        alert(`O valor informado não precisa ser negativo para reprezentar uma despesa. \n Informe um valor maior do que zero.`);
        total.value = '';
    }
});

bntControleFinanceiro.addEventListener("click", () => {
    if (titulo.value === '' || total.value === '' || tipo.value === 'selecione') {
        alert("Existem campos não preenchidos");
    } else {
        if (tipo.value === "receita") {
            uldashboard.innerHTML +=
        `
        <li>${titulo.value.capitalize()}</li>
        <li id="receita">+ R$ ${total.value}</li>
        `
            limpar();
        } else {
            uldashboard.innerHTML +=
        `
        <li>${titulo.value.capitalize()}</li>
        <li id="despesa">- R$ ${total.value}</li>
        `
            limpar();
        }
    }
});

function limpar() {
    titulo.value = '';
    total.value = '';
    tipo.value = 'selecione';
}

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.substr(1);
}