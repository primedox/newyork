document.addEventListener('DOMContentLoaded', function () {
    // Анимация для баннера с текстом
    const banner = document.querySelector('.animated-banner');
    if (banner) {
        banner.addEventListener('mouseover', function () {
            this.style.animationPlayState = 'paused';
        });
        banner.addEventListener('mouseout', function () {
            this.style.animationPlayState = 'running';
        });
    }

    // Анимация для истории компании (timeline)
    const timelineEvents = document.querySelectorAll('.timeline-event');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.2
    });

    timelineEvents.forEach(event => {
        observer.observe(event);
    });

    // Функциональность для гамбургер-меню
    const hamburgerButton = document.querySelector('.hamburger-button'); // Замените '.hamburger-button' на фактический класс вашей кнопки
    const navMenu = document.querySelector('.nav-menu'); // Замените '.nav-menu' на фактический класс вашего меню

    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', function() {
            navMenu.classList.toggle('active'); // Добавляет/удаляет класс 'active' для отображения/скрытия меню
            hamburgerButton.classList.toggle('active'); // Опционально: если хотите изменить вид кнопки при открытии меню
        });
    } else {
        console.warn('Кнопка гамбургера или меню навигации не найдены. Убедитесь, что классы указаны правильно.');
    }
});