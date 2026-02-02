function salvarQuiz() {

    var peleSelecionada;
    var cabeloSelecionado;
    var barbasSelecionadas = [];

    // PELE
    var peleRadios = document.getElementsByName("pele");
    for (var i = 0; i < peleRadios.length; i++) {
        if (peleRadios[i].checked) {
            peleSelecionada = peleRadios[i].value;
        }
    }

    // CABELO
    var cabeloRadios = document.getElementsByName("cabelo");
    for (var i = 0; i < cabeloRadios.length; i++) {
        if (cabeloRadios[i].checked) {
            cabeloSelecionado = cabeloRadios[i].value;
        }
    }

    // BARBA (opcional)
    var barbas = document.querySelectorAll("#barba-section input:checked");
    for (var i = 0; i < barbas.length; i++) {
        barbasSelecionadas.push(barbas[i].value);
    }

    // VALIDAÇÃO
    if (peleSelecionada == null || cabeloSelecionado == null) {
        alert("Por favor, selecione o tipo de pele e cabelo.");
        return;
    }

    // SALVA O RESULTADO DO QUIZ
    localStorage.setItem("quizEquilibrity", JSON.stringify({
        pele: peleSelecionada,
        cabelo: cabeloSelecionado,
        barba: barbasSelecionadas
    }));

    alert("Quiz salvo com sucesso!");

    // REDIRECIONA PARA O RITUAL
    window.location.href = "ritual.html";
}
