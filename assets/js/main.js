window.onload = function() {
    var questionSite = document.getElementsByClassName("questions")[0];
    var answerSite = document.getElementsByClassName("answers")[0];
    var cont = 0;


    var quiz = {
        "Who was the pinter of heavy forms?": ["Botero", "Velasquez", "Picasso", 0],
        "Who is the writer of Rayuela?": ["Cortazar", "Vargas Llosa", "Bolaños", 0],
        "What is the real name of Quino?": ["Joaquin Lavado", "Jeremias Gamboa", "Roberto Bolaños", 0],
        "What is The most popular story in Argentina?": ["Mafalda", "Condorito", "Lulú", 0],
        "Who is the writer of The Antichrist?": ["Nietzsche", "Gogol", "Camus", 0],
    };

    function loadImg(add) {
        var imgCont = ["assets/img/avion.png", "assets/img/barco.png", "assets/img/bici.png", "assets/img/camioneta.png", "assets/img/carro.png"];
        var imgArea = document.getElementsByClassName("img-questions")[0];
        var questionimg = imgCont[add];
        imgArea.setAttribute('src', questionimg);
    }

    function loadQuestion(add) {;
        var question = Object.keys(quiz)[add];
        questionSite.innerHTML = "";
        questionSite.innerHTML = question;
    }

    function loadAnswers(add) {
        var answers = quiz[Object.keys(quiz)[add]];
        answerSite.innerHTML = "";
        for (i = 0; i < answers.length - 1; i += 1) {
            var createDiv = document.createElement("div");
            createDiv.setAttribute('class', 'col-lg-4 col-sm-4 col-xs-12');
            var createBtn = document.createElement("button");
            createBtn.setAttribute('class', 'btn btn-huge');
            var createSpanA = document.createElement("span");
            createSpanA.setAttribute('class', 'letter');
            var createSpanB = document.createElement("span");
            createSpanB.setAttribute('class', 'letter');
            var createSpanC = document.createElement("span");
            createSpanC.setAttribute('class', 'letter');
            var text = document.createTextNode(answers[i])
            createBtn.appendChild(text);
            createDiv.appendChild(createBtn);
            createDiv.addEventListener("click", checkAnswer(i, answers));
            answerSite.appendChild(createDiv);
        }
    }

    function checkAnswer(i, arr) {

        return function() {
            var userAnswer = i;
            var correctAnswer = arr[arr.length - 1];
            if (userAnswer === correctAnswer) {
                addChecker(true)
            } else {
                addChecker(false)
            }
            if (cont < Object.keys(quiz).length - 1) {
                cont += 1
                loadImg(cont);
                loadQuestion(cont);
                loadAnswers(cont);
            } else {
                questionSite.innerHTML = "Finalizaste el cuestionario!"
                answerSite.innerHTML = ""
            }
        }
    }

    function addChecker(bool) {

        var checker = document.getElementsByClassName("checker")[0];
        var createDiv = document.createElement("div");
        var txt = document.createTextNode(cont + 1);
        createDiv.appendChild(txt);
        if (bool) {
            createDiv.className += "correct"
            checker.appendChild(createDiv);
        } else {
            createDiv.className += "false"
            checker.appendChild(createDiv);
        }
    }

    loadQuestion(cont);
    loadAnswers(cont);
    loadImg(cont);
};