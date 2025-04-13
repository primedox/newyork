<?php

// Ваши данные
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$token = "7667527594:AAHsX8_c-UDLel0ES4EWA6jnsLrnlN2FqFc"; // Замените на токен вашего бота
$chat_id = "-1002377904142"; // Замените на ID вашего чата


// Формирование сообщения
$arr = array(
    'Имя:' => $name,
    'Email:' => $email,
    'Сообщение:' => $message
);

$txt = "";
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

// Отправка сообщения в Telegram
$url = "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}";
$sendToTelegram = fopen($url, "r");

// Обработка результата
if ($sendToTelegram) {
    header('Location: success.html'); // Перенаправление на страницу успеха
} else {
    echo "Error"; // Вывод ошибки
}
?>
