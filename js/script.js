// === Переменные ===
const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const countdownScreen = document.getElementById("countdownScreen");
const countdownTimer = document.getElementById("countdownTimer");
const quizScreen = document.getElementById("quizScreen");
const questionContainer = document.getElementById("questionContainer");
const nextBtn = document.getElementById("nextBtn");
const resultDiv = document.getElementById("result");
const timerDisplay = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let testStartTime = null;

// === Вопросы ===
const questions = [
    {
        question: "Какие два основных вида кофейных зерен?",
        options: ["Арабика и Латте", "Арабика и Робуста", "Эспрессо и Робуста", "Капучино и Арабика"],
        correct: 1
    },
    {
        question: "Какое из утверждений верно о вкусе и аромате арабики?",
        options: ["Более горький вкус и низкий аромат", "Цветочные и фруктовые нотки", "Нейтральный вкус с низкой кислотностью", "Сильный ореховый аромат и сладость"],
        correct: 1
    },
    {
        question: "Какое из утверждений верно о вкусе и аромате робусты?",
        options: ["Низкая кислотность и землистый привкус", "Яркий цитрусовый аромат", "Цветочные оттенки и сладость", "Высокая кислотность и ягодные нотки"],
        correct: 0
    },
    {
        question: "Какое из следующих утверждений верно о робусте?",
        options: ["Растет на высоких высотах", "Содержит больше кофеина, чем арабика", "Менее устойчива к болезням", "Используется только в смеси для эспрессо"],
        correct: 1
    },


    {
        question: "Где, согласно легендам, впервые был открыт кофе?",
        options: ["Эфиопия", "Йемен", "Турция", "Индия"],
        correct: 0
    },
    {
        question: "Какой регион славится кофе с ярко выраженной цитрусовой кислотностью и цветочными нотками?",
        options: ["Колумбия", "Суматра", "Эфиопия", "Бразилия"],
        correct: 2
    },
    {
        question: "Какой параметр в эспрессо-машине критически важен для экстракции масел?",
        options: ["Температура воды", "Давление", "Размер помола", "Время экстракции"],
        correct: 1
    },



    {
        question: "Какая химическая реакция при обжарке отвечает за образование большинства ароматических соединений в кофе?",
        options: ["Реакция Майяра", "Карамелизация сахаров", "Пиролиз", "Ферментация"],
        correct: 0
    },
    {
        question: "Что означает термин «Cold Brew Nitro»?",
        options: ["Холодный кофе с добавлением азота для создания кремовой текстуры", "Кофе, заваренный в холодной воде под давлением", "Напиток из холодного кофе и молочной пены", "Метод дегазации кофе с использованием азота"],
        correct: 0
    },
    {
        question: "Клиент жалуется на «жженый» вкус в эспрессо. Какая из причин наиболее вероятна?",
        options: ["Слишком высокая температура воды", "Недостаточный тэмпинг", "Слишком крупный помол", "Старые зерна"],
        correct: 0
    },
    {
        question: "Что означает термин «Tamping» в контексте подготовки кофе для эспрессо?",
        options: ["Равномерное распределение помола", "Уплотнение кофе в портфильтре", "Прогрев портфильтра", "Промывка группы"],
        correct: 1
    },





    {
        question: "Какой помол используется для френч-пресса?",
        options: ["Очень мелкий", "Средний", "Крупный", "Любой, главное — время"],
        correct: 2
    },
    {
        question: "Какой параметр критичен при заваривании кофе в турке?",
        options: ["Температура воды", "Размер помола (очень тонкий)", "Время экстракции", "Все вышеперечисленное"],
        correct: 3
    },
    {
        question: "Какая температура воды оптимальна для пуровера?",
        options: ["88–90°C", "92–96°C", "97–99°C", "100°C"],
        correct: 1
    },






    {
        question: "Какой этап является первым в процессе приготовления эспрессо?",
        options: ["Утрамбовка молотого кофе в портфильтр", "Подача воды под давлением", "Измельчение кофейных зерен", "Промывка группы эспрессо-машины"],
        correct: 2
    },
    {
        question: "В чем разница между френч-прессом и пуровером?",
        options: ["В френч-прессе используется фильтр, а в пуровере — нет", "В пуровере кофе заваривается дольше", "Френч-пресс требует более мелкого помола", "В пуровере вода проходит через кофе под действием гравитации"],
        correct: 3
    },
    {
        question: "Какой метод приготовления дает более насыщенный вкус?",
        options: ["Френч-пресс", "Пуровер", "Оба одинаково", "Зависит от сорта кофе"],
        correct: 0
    },
    {
        question: "Какое историческое событие связано с распространением кофе в Европе в XVII веке?",
        options: ["Открытие Колумба", "Введение кофе в рацион солдат Наполеона", "Открытие первых кофейных домов в Венеции и Лондоне", "Принятие указа Петра I о ввозе кофе в Россию"],
        correct: 2
    },
    {
        question: "Какой химический компонент отвечает за горечь в переэкстрагированном кофе?",
        options: ["Хлорогеновые кислоты", "Кофеин", "Тригонеллин", "Меланоидины"],
        correct: 3
    },
    {
        question: "Какой из перечисленных методов заваривания использует принцип вакуумной экстракции?",
        options: ["Френч-пресс", "Сифон", "Пуровер", "Эспрессо"],
        correct: 1
    },
    {
        question: "Какой диапазон давления (в барах) считается стандартом для профессиональной эспрессо-машины?",
        options: ["1–3 бара", "5–7 бар", "9–10 бар", "12–15 бар"],
        correct: 2
    },
    {
        question: "Какой тип жерновов в кофемолке обеспечивает наиболее равномерный помол для эспрессо?",
        options: ["Конические", "Плоские (флат)", "Лезвийные", "Роторные"],
        correct: 1
    },
    {
        question: "Какой термин описывает ощущение маслянистости во рту при дегустации кофе?",
        options: ["Тело", "Кислотность", "Ароматическая интенсивность", "Сладость"],
        correct: 0
    },
    {
        question: "Клиент жалуется на «металлический привкус» в эспрессо. Какие три возможные причины вы можете предположить?",
        options: ["Перегретая вода, окисление группы, неправильный помол", "Остатки моющего средства, загрязнение мельницы, переэкстракция", "Недоваренный кофе, низкое давление, воздух в трубках", "Высокая жесткость воды, старые зерна, неплотный тэмпинг"],
        correct: 1
    },
    {
        question: "Какой дефект возникает при неправильной ферментации и проявляется в виде запаха уксуса?",
        options: ["Спиртовой", "Кислотный", "Уксусный", "Ферментированный"],
        correct: 2
    },
    {
        question: "Какой город стал первым в Европе, где был продан кофе в зернах?",
        options: ["Венеция", "Амстердам", "Париж", "Лондон"],
        correct: 0
    },
    {
        question: "Клиент жалуется на «соленый» привкус в кофе. Какая из причин наиболее вероятна?",
        options: ["Перегретая вода", "Недостаточная экстракция", "Наличие хлора в воде", "Слишком крупный помол"],
        correct: 2
    },

  







    {
        question: "Как повысить «тело» (Body) в пуровере без изменения сорта кофе?",
        options: ["Увеличить помол и время экстракции", "Снизить температуру воды", "Использовать более мелкий помол и уменьшить время", "Добавить масло в кофе перед завариванием"],
        correct: 2
    },
    {
        question: "Лавандовый раф для серГЕЕВ?",
        options: ["Да, однозначно да", "Нет", "Нет, мне он тоже нравится"],
        correct: 0
    }
];

// === Функции ===
function showQuestion() {
    const current = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p><strong>Вопрос ${currentQuestionIndex + 1} из ${questions.length}</strong></p>
        <p>${current.question}</p>
    `;
    current.options.forEach((option, i) => {
        const id = `option${i}`;
        questionContainer.innerHTML += `
            <label>
                <input type="radio" name="question" value="${i}" id="${id}" required>
                ${option}
            </label>`;
    });
    nextBtn.classList.remove("hidden");
}

function submitAnswer() {
    const selected = document.querySelector('input[name="question"]:checked');
    if (!selected) return alert("Выберите вариант ответа!");

    const answer = parseInt(selected.value);
    if (answer === questions[currentQuestionIndex].correct) score++;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endTest();
    }
}

function startCountdown(seconds) {
    let timeLeft = seconds;
    countdownTimer.textContent = timeLeft;
    const interval = setInterval(() => {
        timeLeft--;
        countdownTimer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(interval);
            startScreen.classList.add("hidden");
            countdownScreen.classList.add("hidden");
            quizScreen.classList.remove("hidden");
            testStartTime = Date.now();
            startTestTimer();
            showQuestion();
        }
    }, 1000);
}

function startTestTimer() {
    const totalTestTime = 90 * 60 * 1000; // 1 час 30 минут
    const endTime = testStartTime + totalTestTime;
    const timerInterval = setInterval(() => {
        const now = Date.now();
        const remaining = Math.max(0, endTime - now);
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        timerDisplay.textContent = `Оставшееся время до взрыва: ${minutes}:${seconds.toString().padStart(2, '0')}`;
        if (remaining <= 0) {
            clearInterval(timerInterval);
            endTest();
        }
    }, 1000);
}

function endTest() {
    const percent = Math.round((score / questions.length) * 100);
    const timeTaken = Math.floor((Date.now() - testStartTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;

    let message = "";
    if (percent < 10) message = "ЧТО ТЫ ДЕЛАЕШЬ ИШАК!!!";
    else if (percent < 40) message = "ну еп твою мать блять";
    else if (percent < 80) message = "МОГ БЫ И ЛУЧШЕ НА САМОМ ДЕЛЕ";
    else message = "БЕСПЛАТНЫЙ КАПУЧИНО НА ШЛАКЕ БЕЗ МОЛОКА ЭТОМУ СУДАРЮ";

    resultDiv.innerHTML = `
        <p>Вы набрали <strong>${percent}%</strong></p>
        <p>Время: ${minutes} мин ${seconds} сек</p>
        <h2>${message}</h2>`;
    
    // Скрываем тест
    document.getElementById("quizContainer").classList.add("hidden");
    document.getElementById("nextBtn").classList.add("hidden");

    // Показываем результат
    resultDiv.classList.remove("hidden");
}

// === События ===
startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    countdownScreen.classList.remove("hidden");
    startCountdown(5);
});

nextBtn.addEventListener("click", submitAnswer);