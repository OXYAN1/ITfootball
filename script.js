document.addEventListener("DOMContentLoaded", () => {
    let isRegistered = false;
    let loggedIn = false;

    // Фиктивная база данных пользователей (можно заменить реальным API)
    const users = [
        { email: "user@example.com", password: "password123" },
    ];

    // Кнопка входа
    const loginButton = document.getElementById("login-button");
    if (loginButton) {
        loginButton.addEventListener("click", () => {
            window.location.href = "login.html"; // Перенаправление на страницу входа
        });
    }

    // Кнопка регистрации
    const registerButton = document.getElementById("register-button");
    if (registerButton) {
        registerButton.addEventListener("click", () => {
            window.location.href = "register.html"; // Перенаправление на регистрацию
        });
    }

    // Проверка статуса логина на главной странице
    const betButtons = document.querySelectorAll("#make-bet");
    if (betButtons) {
        betButtons.forEach((button) => {
            button.addEventListener("click", () => {
                if (!loggedIn) {
                    alert("Для ставки зарегіструйся курво");
                    window.location.href = "login.html";
                }
            });
        });
    }

    // Логика на странице входа
    const loginSubmitButton = document.getElementById("login-submit");
    if (loginSubmitButton) {
        loginSubmitButton.addEventListener("click", () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Проверяем учетные данные
            const user = users.find((u) => u.email === email && u.password === password);
            if (user) {
                alert("Вітаємо в нашій сім'ї");
                loggedIn = true; // Пользователь вошел
                window.location.href = "index.html"; // Перенаправление на главную
            } else {
                alert("Неправильний email чи пароль!");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let loggedIn = false;

    // Кнопка входа
    const loginButton = document.getElementById("login-button");
    if (loginButton) {
        loginButton.addEventListener("click", () => {
            window.location.href = "login.html"; // Перенаправление на страницу входа
        });
    }

    // Кнопка регистрации
    const registerButton = document.getElementById("register-button");
    if (registerButton) {
        registerButton.addEventListener("click", () => {
            window.location.href = "register.html"; // Перенаправление на регистрацию
        });
    }

    // Проверка статуса логина на главной странице
    const betButtons = document.querySelectorAll("#make-bet");
    if (betButtons) {
        betButtons.forEach((button) => {
            button.addEventListener("click", () => {
                if (!loggedIn) {
                    window.location.href = "login.html"; // Перенаправление на регистрацию
                }
            });
        });
    }

    // Логика на странице входа
    const loginSubmitButton = document.getElementById("login-submit");
    if (loginSubmitButton) {
        loginSubmitButton.addEventListener("click", () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Проверяем учетные данные
            const user = users.find((u) => u.email === email && u.password === password);
            if (user) {
                alert("Вітаємо в нашій сім'ї");
                loggedIn = true; // Пользователь вошел
                window.location.href = "index.html"; // Перенаправление на главную
            } else {
                alert("Неправильний email чи пароль!");
            }
        });
    }
});
