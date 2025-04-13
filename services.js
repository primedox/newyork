document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');
    const productModal = document.querySelector('.product-modal');
    const closeModalButton = document.querySelector('.close-modal');
    const modalImage = document.querySelector('.modal-image');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const modalBuyButton = document.querySelector('.modal-buy-button');

    const productData = {
        1: {
            image: 'img/product1.jpg',
            title: 'Продукт 1',
            description: 'Описание продукта 1. Это отличный продукт для тех, кто ценит качество и надежность.',
            telegramLink: 'https://t.me/ваш_бот?start=product1'
        },
        2: {
            image: 'img/product2.jpg',
            title: 'Продукт 2',
            description: 'Описание продукта 2. Идеально подходит для решения ваших повседневных задач.',
            telegramLink: 'https://t.me/ваш_бот?start=product2'
        },
        3: {
            image: 'img/product3.jpg',
            title: 'Продукт 3',
            description: 'Описание продукта 3. Сделано с использованием передовых технологий и материалов.',
            telegramLink: 'https://t.me/ваш_бот?start=product3'
        },
        4: {
            image: 'img/product4.jpg',
            title: 'Продукт 4',
            description: 'Описание продукта 4. Прекрасный выбор для профессионалов и любителей.',
            telegramLink: 'https://t.me/ваш_бот?start=product4'
        },
        5: {
            image: 'img/product5.jpg',
            title: 'Продукт 5',
            description: 'Описание продукта 5. Наслаждайтесь комфортом и удобством с этим замечательным продуктом.',
            telegramLink: 'https://t.me/ваш_бот?start=product5'
        }
    };

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.productId;
            const product = productData[productId];

            modalImage.src = product.image;
            modalTitle.textContent = product.title;
            modalDescription.textContent = product.description;
            modalBuyButton.href = product.telegramLink;

            productModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Предотвращаем прокрутку фона
        });
    });

    closeModalButton.addEventListener('click', () => {
        productModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Возвращаем прокрутку фона
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target == productModal) {
            productModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Возвращаем прокрутку фона
        }
    });
});