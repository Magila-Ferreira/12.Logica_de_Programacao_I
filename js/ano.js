var ano = parseInt(prompt("Defina o ano do calendário: (Exemplo: 2020)"));
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

function verificaInicioMes(mes) {
    for (var i = 0; i < numeroDias; i++) {
        diaSemana++;
        mudaSemana();
    }
}

function verificaNumeroDeDiasDoMes(mes) {
    console.log("-----------------------");
    console.log("MÊS: " + mes);
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
            var diasVazio = 6;
            criaSemana(mes);
            criaCalendario(numeroDias, diasVazio);
            break;

        case 1: console.log("Início do mês: Domingo");
            diasVazio = 0;
            criaSemana(mes);
            criaCalendario(numeroDias, diasVazio);
            break;

        case 2: console.log("Início do mês: Segunda");
            diasVazio = 1;
            criaSemana(mes);
            criaCalendario(numeroDias, diasVazio);
            break;

        case 3: console.log("Início do mês: Terça");
            diasVazio = 2;
            criaSemana(mes);
            criaCalendario(numeroDias, diasVazio);
            break;

        case 4: console.log("Início do mês: Quarta");
            diasVazio = 3;
            criaSemana(mes);
            criaCalendario(numeroDias, diasVazio);
            break;

        case 5: console.log("Início do mês: Quinta");
            diasVazio = 4;
            criaSemana(mes);
            criaCalendario(numeroDias, diasVazio);
            break;

        case 6: console.log("Início do mês: Sexta");
            diasVazio = 5;
            criaSemana(mes);
            criaCalendario(numeroDias, diasVazio);
            break;
    }
    fdsDestaque(mes);
}

function criaSemana(mes) {
    var semanas = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    semanas.forEach(function (semana) {
        mostraSemana("<strong class='semana'>" + semana + "</strong>");
    })
    sdDestaque();
}

function sdDestaque() {
    var semanaInteira = document.querySelectorAll(".semana");

    for (var i = 0; i < semanaInteira.length; i++) {
        if ((i % 7 == 0) || (i % 7 == 6)) {
            semanaInteira[i].classList.add("destaque");
        }
    }
}

function criaCalendario(numeroDias, diasVazio) {
    for (let i = 1; i <= diasVazio; i++) {
        imprime(" ");
    }

    dia = 1;
    for (let i = 1; i <= 42; i++) {
        while (dia <= numeroDias) {
            if (mes == 1) {      
                mostraJan(dia);
            } else if (mes == 2) {
                mostraFev(dia);
            } else if (mes == 3) {
                mostraMar(dia);
            } else if (mes == 4) {
                mostraAbr(dia);
            } else if (mes == 5) {
                mostraMai(dia);
            } else if (mes == 6) {
                mostraJun(dia);
            } else if (mes == 7) {
                mostraJul(dia);
            } else if (mes == 8) {
                mostraAgo(dia);
            } else if (mes == 9) {
                mostraSet(dia);
            } else if (mes == 10) {
                mostraOut(dia);
            } else if (mes == 11) {
                mostraNov(dia);
            } else if (mes == 12) {
                mostraDez(dia);
            }
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
                if ((i % 7 == 6) || (i % 7 == 0)) {
                    numDia.classList.add("destaque");
                }
            }
            break;

        case 2:
            for (var i = 0; i < numeroDias; i++) {
                var numDia = tdDias[i];
                if ((i % 7 == 5) || (i % 7 == 6)) {
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
                if ((i % 7 == 3) || (i % 7 == 4)) {
                    numDia.classList.add("destaque");
                }
            }
            break;

        case 5:
            for (var i = 0; i < numeroDias; i++) {
                var numDia = tdDias[i];
                if ((i % 7 == 2) || (i % 7 == 3)) {
                    numDia.classList.add("destaque");
                }
            }
            break;

        case 6:
            for (var i = 0; i < numeroDias; i++) {
                var numDia = tdDias[i];
                if ((i % 7 == 1) || (i % 7 == 2)) {
                    numDia.classList.add("destaque");
                }
            }
            break;
    }
}


