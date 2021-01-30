const correctAnswers = ['D', 'B', 'C', 'C', 'D'];
const form = document.querySelector('.quiz-form');
const res = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 20;
        }
    });
    //log the score on to the page

    window.scrollTo(0, 0);

    res.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        res.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});