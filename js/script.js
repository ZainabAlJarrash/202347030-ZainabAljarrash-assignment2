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
        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");
        const messageInput = document.querySelector("#message");

        const nameError = document.querySelector("#name-error");
        const emailError = document.querySelector("#email-error");
        const messageError = document.querySelector("#message-error");

        function showError(input, errorElement, message) {
            input.setAttribute("aria-invalid", "true");
            errorElement.textContent = message;
        }

        function clearError(input, errorElement) {
            input.removeAttribute("aria-invalid");
            errorElement.textContent = "";
        }

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let formIsValid = true;

            clearError(nameInput, nameError);
            clearError(emailInput, emailError);
            clearError(messageInput, messageError);

            formStatus.textContent = "";
            formStatus.className = "form-status";

            const visitorName = nameInput.value.trim();
            const visitorEmail = emailInput.value.trim();
            const visitorMessage = messageInput.value.trim();

            if (visitorName === "") {
                showError(
                    nameInput,
                    nameError,
                    "Please enter your name."
                );
                formIsValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(visitorEmail)) {
                showError(
                    emailInput,
                    emailError,
                    "Please enter a valid email address."
                );
                formIsValid = false;
            }

            if (visitorMessage === "") {
                showError(
                    messageInput,
                    messageError,
                    "Please enter a message."
                );
                formIsValid = false;
            }

            if (!formIsValid) {
                formStatus.textContent =
                    "Please correct the highlighted fields.";
                formStatus.classList.add("error");

                contactForm
                    .querySelector('[aria-invalid="true"]')
                    .focus();

                return;
            }

            formStatus.textContent =
                `Thank you, ${visitorName}! The form was completed successfully.`;

            formStatus.classList.add("success");
            contactForm.reset();
        });
    }

    // Filter the project cards using the visitor's search.
    const projectSearch = document.querySelector("#project-search");
    const projectCards = document.querySelectorAll(".project-card");
    const searchStatus = document.querySelector("#project-search-status");
    const noProjectsMessage = document.querySelector("#no-projects-message");

    if (projectSearch && searchStatus && noProjectsMessage && projectCards.length > 0) {
        function filterProjects() {
            const searchText = projectSearch.value.trim().toLowerCase();
            let visibleProjects = 0;

            projectCards.forEach(function (card) {
                const projectInformation =
                    card.textContent.toLowerCase();

                const matchesSearch =
                    projectInformation.includes(searchText);

                card.hidden = !matchesSearch;

                if (matchesSearch) {
                    visibleProjects++;
                }
            });

            if (searchText === "") {
                searchStatus.textContent =
                    `Showing all ${projectCards.length} projects.`;
            } else if (visibleProjects === 1) {
                searchStatus.textContent = "1 project found.";
            } else {
                searchStatus.textContent =
                    `${visibleProjects} projects found.`;
            }

            noProjectsMessage.hidden = visibleProjects !== 0;
        }

        projectSearch.addEventListener("input", filterProjects);

        // Display the correct project count when the page first loads.
        filterProjects();
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



