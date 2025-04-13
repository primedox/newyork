document.addEventListener('DOMContentLoaded', function () {
    // Фокус на первом поле формы при загрузке страницы
    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.focus();
    }

    // Функция для проверки валидности email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Добавление валидации для email
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function () {
            if (!isValidEmail(this.value)) {
                this.classList.add('invalid');
                this.setCustomValidity('Пожалуйста, введите корректный email');
            } else {
                this.classList.remove('invalid');
                this.setCustomValidity('');
            }
        });
    }

 
});