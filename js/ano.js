var ano = parseInt(prompt("Defina o ano do calendário: (Exemplo: 2020)"));
var janeiro = document.querySelector("section.jan");
var iniciaAno = 1;
var diaSemana = 2;
var numeroDias = 0;
var dia = 1;

/* Verifica o dia da semana que o ano começa: */
while (iniciaAno < ano) {
    
    /* Verifica se o ano é bissexto */
    if ((iniciaAno % 4 == 0) && (iniciaAno % 100 != 0) || (iniciaAno % 400 == 0)) {
        diaSemana++;
        mudaSemana();
    }
    diaSemana++;

    mudaSemana();
    iniciaAno++;
}

function mudaSemana() {
    if (diaSemana > 6) {
        diaSemana = 0;
    }
}

function verificaNumeroDeDiasDoMes(mes) {
    if ((mes == 1) || (mes == 3) || (mes == 5) || (mes == 7) || (mes == 8) || (mes == 10) || (mes == 12)) {

        numeroDias = 31;

    } else if (mes == 2) {
        if ((iniciaAno % 4 == 0) && (iniciaAno % 100 != 0) || (iniciaAno % 400 == 0)) {
            numeroDias = 29;

        } else {
            numeroDias = 28;

        }
    } else {
        numeroDias = 30;

    }
    console.log("numeroDias: " + numeroDias);
    defineDiaDaSemana(mes);
}

function defineDiaDaSemana(mes) {
    switch (diaSemana) {
        case 0: console.log("Início do mês: Sábado");
            criaCalendarioIniciaSab(numeroDias);
            break;
        case 1: console.log("Início do mês: Domingo");
            break;
        case 2: console.log("Início do mês: Segunda");
            break;
        case 3: console.log("Início do mês: Terça");
            criaCalendarioTer(numeroDias);
            break;
        case 4: console.log("Início do mês: Quarta");
            break;
        case 5: console.log("Início do mês: Quinta");
            break;
        case 6: console.log("Início do mês: Sexta");
            break;
    }
    fdsDestaque(mes);
}

function criaSemana(mes) {
    var semanas = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    semanas.forEach(function (semana) {
        mostraSemana("<strong class='semana'>" + semana + "</strong>");
    })
    sdDestaque(mes);
}

function sdDestaque(mes) {
    var semanaInteira = document.querySelectorAll(".semana");

    if (mes == 1) {
        semanaInteira.forEach(function () {
            var sabado = semanaInteira[0];
            var domingo = semanaInteira[6];
            sabado.classList.add("destaque");
            domingo.classList.add("destaque");
        })
    } else if (mes == 2) {
        semanaInteira.forEach(function () {
            var sabadoJan = semanaInteira[0];
            var sabadoFev = semanaInteira[7];
            var domingoJan = semanaInteira[6];
            var domingoFev = semanaInteira[13];
            sabadoJan.classList.add("destaque");
            sabadoFev.classList.add("destaque");
            domingoJan.classList.add("destaque");
            domingoFev.classList.add("destaque");
        })
    }

}

function criaCalendarioIniciaSab(numeroDias) {
    var diasVazio = 6;
    for (let i = 1; i <= diasVazio; i++) {
        imprime(" ");
    }

    for (let i = 1; i <= 42; i++) {
        while (dia <= numeroDias) {
            mostraJan(dia);
            dia++;
        }
    }
}

function fdsDestaque(mes) {
    if (mes == 1) {
        var tdDias = document.querySelectorAll(".dia-jan");
    } else if (mes == 2) {
        tdDias = document.querySelectorAll(".dia-fev");
    } else if (mes == 3) {
        tdDias = document.querySelectorAll(".dia-mar");
    } else if (mes == 4) {
        tdDias = document.querySelectorAll(".dia-abr");
    } else if (mes == 5) {
        tdDias = document.querySelectorAll(".dia-mai");
    } else if (mes == 6) {
        tdDias = document.querySelectorAll(".dia-jun");
    } else if (mes == 7) {
        tdDias = document.querySelectorAll(".dia-jul");
    } else if (mes == 8) {
        tdDias = document.querySelectorAll(".dia-ago");
    } else if (mes == 9) {
        tdDias = document.querySelectorAll(".dia-set");
    } else if (mes == 10) {
        tdDias = document.querySelectorAll(".dia-out");
    } else if (mes == 11) {
        tdDias = document.querySelectorAll(".dia-nov");
    } else if (mes == 12) {
        tdDias = document.querySelectorAll(".dia-dez");
    }
    switch (diaSemana) {
        case 0:
            for (var i = 0; i < numeroDias; i++) {
                var numDia = tdDias[i];
                if ((i % 7 == 0) || (i % 7 == 1)) {
                    numDia.classList.add("destaque");
                }
            }
            break;

        case 1:
            for (var i = 0; i < numeroDias; i++) {
                var numDia = tdDias[i];
                if ((i % 7 == 1) || (i % 7 == 2)) {
                    numDia.classList.add("destaque");
                }
            }
            break;

        case 2:
            for (var i = 0; i < numeroDias; i++) {
                var numDia = tdDias[i];
                if ((i % 7 == 2) || (i % 7 == 3)) {
                    numDia.classList.add("destaque");
                }
            }
            break;

        case 3:
            for (var i = 0; i < numeroDias; i++) {
                var numDia = tdDias[i];
                if ((i % 7 == 4) || (i % 7 == 5)) {
                    numDia.classList.add("destaque");
                }
            }
            break;

        case 4:
            for (var i = 0; i < numeroDias; i++) {
                var numDia = tdDias[i];
                if ((i % 7 == 4) || (i % 7 == 5)) {
                    numDia.classList.add("destaque");
                }
            }
            break;

        case 5:
            for (var i = 0; i < numeroDias; i++) {
                var numDia = tdDias[i];
                if ((i % 7 == 5) || (i % 7 == 6)) {
                    numDia.classList.add("destaque");
                }
            }
            break;

        case 6:
            for (var i = 0; i < numeroDias; i++) {
                var numDia = tdDias[i];
                if ((i % 7 == 6) || (i % 7 == 0)) {
                    numDia.classList.add("destaque");
                }
            }
            
            break;
    }
}


