const passwordInput = document.getElementById('password');
const passwordStrengthMessage = document.getElementById('passwordStrength');

passwordInput.addEventListener('blur', function() {
    const password = passwordInput.value;

    if (password.length >= 8) {
        passwordStrengthMessage.textContent = 'Пароль сильный';
    } else {
        passwordStrengthMessage.textContent = 'Пароль слабый';
    }
});
