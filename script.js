

function startCourse(course) {
    const lesson = document.getElementById("lesson");
    const title = document.getElementById("lessonTitle");
    const video = document.getElementById("video");

    // Show lesson section
    lesson.classList.remove("hidden");

    // Set content based on course
    if (course === "html") {
        title.innerText = "HTML Basics";
        video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
    } 
    else if (course === "css") {
        title.innerText = "CSS Design";
        video.src = "https://www.w3schools.com/html/movie.mp4";
    } 
    else if (course === "js") {
        title.innerText = "JavaScript Fundamentals";
        video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
    }

    // Scroll to lesson smoothly (🔥 nice upgrade)
    lesson.scrollIntoView({ behavior: "smooth" });
}
// NEXT QUESTION
function nextQuestion() {
    if (!answered) {
        alert("Please select an answer first!");
        return;
    }

    currentQ++;

    if (currentQ < quiz.length) {
        loadQ();
    } else {
        document.getElementById("score").innerText =
            "🏆 Your Score: " + score + "/" + quiz.length;
    }
}let quiz = [
    {q:"What is HTML?", a:["Markup Language","Programming","Database"], c:0},
    {q:"CSS is used for?", a:["Styling","Logic","Server"], c:0},
    {q:"JS is used for?", a:["Interactivity","Structure","Design"], c:0}
];

//   document.getElementById("score").innerText =
//     "🏆 Your Score: " + score + "/" + quiz.length;

// if (score >= Math.floor(quiz.length * 0.6)) {
//     showCertificate();
// }

let currentQ = 0;
let score = 0;
let answered = false;

// LOAD QUESTION
function loadQ() {
    answered = false;

    let q = quiz[currentQ];
    document.getElementById("question").innerText = q.q;

    let ansDiv = document.getElementById("answers");
    ansDiv.innerHTML = "";

    q.a.forEach((ans, i) => {
        let btn = document.createElement("button");
        btn.innerText = ans;
        btn.classList.add("answer-btn");

        btn.onclick = () => {
            if (answered) return;

            answered = true;

            // Highlight all buttons
            let buttons = document.querySelectorAll(".answer-btn");

            buttons.forEach((b, index) => {
                if (index === q.c) {
                    b.style.background = "green"; // correct answer
                } else {
                    b.style.background = "red"; // wrong answers
                }
                b.disabled = true;
            });

            // Score
            if (i === q.c) {
                score++;
            }
        };

        ansDiv.appendChild(btn);
    });
}

loadQ();

 function markComplete() {
    alert("🎉 Lesson Completed!");

    let progress = document.getElementById("progress");
    let width = parseInt(progress.style.width) || 0;

    width += 33;
    if (width > 100) width = 100;

    progress.style.width = width + "%";
}

 function showCertificate() {
    let name = localStorage.getItem("username") || "Student";

    document.getElementById("certName").innerText = name;
    document.getElementById("certificate").style.display = "block";
}
