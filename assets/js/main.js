window.onload = function() {
    var questionSite = document.getElementsByClassName("questions")[0];
    var answerSite = document.getElementsByClassName("answers")[0];
    var current = 0;


    var quiz = {
        "Who was the pinter of heavy forms?": ["Botero", "Velasquez", "Picasso", 0],
        "Who is the writer of Rayuela?": ["Cortazar", "Vargas Llosa", "Bolaños", 0],
        "What is the real name of Quino?": ["Joaquin Lavado", "Jeremias Gamboa", "Roberto Bolaños", 0],
        "What is The most popular story in Argentina?": ["Mafalda", "Condorito", "Lulú", 0],
        "Who is the writer of The Antichrist?": ["Nietzsche", "Gogol", "Camus", 0],
    };

    function loadImg(curr) {
        var imgCont = ["assets/img/avion.png", "assets/img/barco.png", "assets/img/bici.png", "assets/img/camioneta.png", "assets/img/carro.png"];
        var imgArea = document.getElementsByClassName("img-questions")[0];
        var questionimg = imgCont[curr];
        imgArea.setAttribute('src', questionimg);
    }

    function loadQuestion(curr) {;
        var question = Object.keys(quiz)[curr];
        questionSite.innerHTML = "";
        questionSite.innerHTML = question;
    }

    function loadAnswers(curr) {
        var answers = quiz[Object.keys(quiz)[curr]];
        //vacía el campo de respuesta
        answerSite.innerHTML = "";
        //agregar todas las respuestas posibles el área de respuesta
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
            //esto añade la función onclick en la respuesta, ejecutando una función para verificar la corrección
            createDiv.addEventListener("click", checkAnswer(i, answers));
            answerSite.appendChild(createDiv);
        }
    }

    function checkAnswer(i, arr) {
        // esta es la función que se ejecutará cuando se haga clic en una de las respuestas
        // compruebe si la respuesta dada es la misma que la respuesta correcta
        // después de esto, compruebe si es la última pregunta del cuestionario
        // si es la última pregunta, vacía la zona de respuesta y deja que el usuario sepa que terminó
        return function() {
            var userAnswer = i;
            var correctAnswer = arr[arr.length - 1];
            if (userAnswer === correctAnswer) {
                addChecker(true)
            } else {
                addChecker(false)
            }
            if (current < Object.keys(quiz).length - 1) {
                current += 1
                loadImg(current);
                loadQuestion(current);
                loadAnswers(current);
            } else {
                questionSite.innerHTML = "Finalizaste el cuestionario!"
                answerSite.innerHTML = ""
            }
        }
    }

    function addChecker(bool) {
        // agrega un elemento div a la página para ver si es verdadero / falso
        var checker = document.getElementsByClassName("checker")[0];
        var createDiv = document.createElement("div");
        var txt = document.createTextNode(current + 1);
        createDiv.appendChild(txt);
        if (bool) {
            createDiv.className += "correct"
            checker.appendChild(createDiv);
        } else {
            createDiv.className += "false"
            checker.appendChild(createDiv);
        }
    }

    //inicie el cuestionario enseguida
    loadQuestion(current);
    loadAnswers(current);
    loadImg(current);
};