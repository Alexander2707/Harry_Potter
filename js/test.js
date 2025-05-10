document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault(); // не перезавантажує сторінку
    const answers = new FormData(e.target);
    let score = 0;

    for (let [key, value] of answers.entries()) {
      score += parseInt(value); // додаємо бали
    }

    // Підрахунок результату
    let resultText = "";
    if (score === 10) {
      resultText = "🧙‍♂️ <strong>Аврор</strong> — блискуче! Ти знаєш кожне закляття!";
    } else if (score >= 7) {
      resultText = "✨ <strong>Досвідчений маг</strong> — дуже добре, трохи практики і ти — аврор!";
    } else if (score >= 4) {
      resultText = "📘 <strong>Учень Хогвартса</strong> — ти ще на шляху, але все попереду!";
    } else {
      resultText = "☠ <strong>Темний чарівник</strong> — або тобі все одно, або ти занадто небезпечний 😈";
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = resultText;
    resultDiv.style.display = 'block';
  });