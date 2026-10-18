document.addEventListener("DOMContentLoaded", function () {
    // Display a greeting based on the current time.
    const greetingElement = document.querySelector("#greeting");
    const currentHour = new Date().getHours();

    if (greetingElement) {
        if (currentHour < 12) {
            greetingElement.textContent =
                "Good morning! Welcome to my portfolio.";
        } else if (currentHour < 18) {
            greetingElement.textContent =
                "Good afternoon! Welcome to my portfolio.";
        } else {
            greetingElement.textContent =
                "Good evening! Welcome to my portfolio.";
        }
    }

    // Automatically display the current year.
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Provide feedback for the demonstration contact form.
    const contactForm = document.querySelector("#contact-form");
    const formStatus = document.querySelector("#form-status");

    if (contactForm && formStatus) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nameInput = document.querySelector("#name");
            const visitorName = nameInput.value.trim();

            formStatus.textContent =
                `Thank you, ${visitorName}! This demo form does not send data.`;

            contactForm.reset();
        });
    }

    // Switch between light and dark themes.
    const themeToggle = document.querySelector("#theme-toggle");
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    if (themeToggle) {
        function updateThemeButton() {
            const darkModeIsActive =
                document.body.classList.contains("dark-theme");

            themeToggle.textContent =
                darkModeIsActive ? "Light mode" : "Dark mode";

            themeToggle.setAttribute(
                "aria-pressed",
                darkModeIsActive.toString()
            );
        }

        updateThemeButton();

        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-theme");

            const darkModeIsActive =
                document.body.classList.contains("dark-theme");

            localStorage.setItem(
                "portfolio-theme",
                darkModeIsActive ? "dark" : "light"
            );

            updateThemeButton();
        });
    }
});
