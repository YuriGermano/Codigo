// 1) Sabendo que o fuso horário da França em relação ao Brasil é de + 5 horas (no horário de verão na
//     França), elaborar um programa que leia a hora no Brasil e informe a hora na França.


document.addEventListener("DOMContentLoaded", function () {
    function mostrarSituacao() {
        // Cria referência aos elementos da página
        let outResultado = document.getElementById("outResultado");
        let inHorarioBrasil = document.getElementById("inHorarioBrasil");
        let outHorarioBrasil = document.getElementById("outHorarioBrasil");
        let outSituacao = document.getElementById("outSituacao");


        let brasil = Number(inHorarioBrasil.value);




        let franca = brasil + 5;


        // if(media >= 7){
        //     situacao = `Parabéns ${aluno}! Você foi aprovado(a)`;
        //     outSituacao.style.color = "blue";
        //  } else {
        //     situacao = `Ops ${aluno}! Você foi reprovado(a)`;
        //     outSituacao.style.color = "red";
        //  }

        if (brasil >= 19) {
            let passou_meia_noite = (brasil - 24) + 5;
            outHorarioBrasil.textContent = `Hora Brasil: ${brasil.toFixed(2)}`;
            outSituacao.textContent = `Hora da França: ${passou_meia_noite.toFixed(2)}`;
        } else {
            let franca = brasil + 5;
            outHorarioBrasil.textContent = `Hora Brasil: ${brasil.toFixed(2)}`;
            outSituacao.textContent = `Hora da França: ${franca.toFixed(2)}`;
        }

        // outHorarioBrasil.textContent = `Hora Brasil: ${brasil}`;
        // outSituacao.textContent = `Hora da França: ${franca}`;

        // Mostrar o display
        outResultado.style.display = 'block';
    }


    // Cria uma referência ao elemento btnExibirMedia (botão)
    const btnExibirHoraFranca = document.getElementById("btnExibirHoraFranca");

    // Registra um evento associado ao botão, para carregar a função
    btnExibirHoraFranca.addEventListener("click", mostrarSituacao);
});
