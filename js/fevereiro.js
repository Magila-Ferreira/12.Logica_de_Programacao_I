var fevereiro = document.querySelector("section.fev");

function verificaInicioFev() {
    mes = 2;
    if (diaSemana == 0) {
        diaSemana = diaSemana + 3;
    }
}

function criaCalendarioTer(numeroDias) {
    var diasVazio = 2;
    for (let i = 1; i <= diasVazio; i++) {
        imprime(" ");
    }
    
    dia = 1;
    for (let i = 1; i <= 42; i++) {
        while (dia <= numeroDias) {
            mostraFev(dia);
            dia++;
        }
    }
}



