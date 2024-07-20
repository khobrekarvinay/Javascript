function checkEligibility() {
    const age = parseInt(document.getElementById('age').value);
    const result = document.getElementById('result');

    if (isNaN(age) || age < 1 || age > 100) {
        result.innerHTML = 'Please enter a valid age between 1 and 100.';
        result.style.color = 'red';
        return;
    }

    if (age < 18) {
        result.innerHTML = 'You are not eligible for a driving license.';
        result.style.color = 'red';
    } else if (age === 18) {
        result.innerHTML = 'You are eligible for a learner\'s license.';
        result.style.color = 'orange';
    } else if (age > 18 && age <= 60) {
        result.innerHTML = 'You are eligible for a driving license.';
        result.style.color = 'green';
    } else {
        result.innerHTML = 'You are not eligible for a driving license.';
        result.style.color = 'red';
    }
}
