
document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const menu = document.querySelector('nav ul.menu');
  const testimonialSlider = document.querySelector('.testimonial-slider');
  const heroContent = document.querySelector('.hero-content');
  const featuresSection = document.querySelector('.features');
  const testimonialsSection = document.querySelector('.testimonials');

  // Переключение Burger Menu
  burgerMenu.addEventListener('click', function () {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });

  // Плавная прокрутка к якорям
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Анимация при прокрутке (Intersection Observer API)
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // Добавьте класс 'show' для анимации
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.1 // Процент видимости элемента для запуска анимации
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Модальное окно
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');


    overlay.classList.remove('active');
  }

  // Слайдер отзывов (Автоматическая прокрутка)
  if (testimonialSlider) {
    let scrollPosition = 0;
    const scrollAmount = testimonialSlider.offsetWidth;

    function autoScroll() {
      scrollPosition += scrollAmount;
      if (scrollPosition >= testimonialSlider.scrollWidth - scrollAmount) {
        scrollPosition = 0; // Возврат к началу
      }
      testimonialSlider.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }

    let scrollInterval = setInterval(autoScroll, 5000); // Автоматическая прокрутка каждые 5 секунд

    // Остановка прокрутки при наведении
    testimonialSlider.addEventListener('mouseover', () => {
      clearInterval(scrollInterval);
    });

    // Возобновление прокрутки при уходе мыши
    testimonialSlider.addEventListener('mouseout', () => {
      scrollInterval = setInterval(autoScroll, 5000);
    });
  }

  // Дополнительные Интерактивные Фишки
  // Пример 1: Эффект печатающегося текста в Hero Section
  if (heroContent) {
    const text = heroContent.querySelector('h1').textContent;
    heroContent.querySelector('h1').textContent = '';

    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        heroContent.querySelector('h1').textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Задержка между символами
      }
    }

    typeWriter();
  }

  // Пример 2: Параллакс-эффект для секции Features
  if (featuresSection) {
    window.addEventListener('scroll', () => {
      let scrollPosition = window.pageYOffset;
      featuresSection.style.backgroundPositionY = scrollPosition * 0.1 + 'px'; // Небольшой параллакс-эффект
    });
  }

  // Пример 3: Анимация при наведении на отзывы
  if (testimonialsSection) {
    const testimonials = testimonialsSection.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
      testimonial.addEventListener('mouseover', () => {
        testimonial.style.transform = 'scale(1.05)';
        testimonial.style.transition = 'transform 0.3s ease';
      });
      testimonial.addEventListener('mouseout', () => {
        testimonial.style.transform = 'scale(1)';
      });
    });
  }
});