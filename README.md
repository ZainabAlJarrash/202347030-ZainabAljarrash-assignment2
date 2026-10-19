# Zainab Aljarrash – Personal Portfolio

A responsive personal portfolio website created for SWE363 Assignment 2. The website introduces me, presents my projects and interests, and provides a contact form and professional contact links. This version improves my Assignment 1 portfolio by adding project search, form validation, user feedback, and more dynamic behavior.

## Features

- Responsive layout for desktop, tablet, and mobile devices.
- Live project search that filters projects while the user types.
- Project count and a clear message when no projects match.
- Contact form validation with error and confirmation messages.
- Light and dark themes.
- Theme preference saved using `localStorage`.
- Greeting based on the current time.
- Smooth animations, transitions, and hover effects.
- Automatic copyright year.
- University email and LinkedIn links.

## Dynamic Functionality

The project search reads the text entered by the user and compares it with the content of each project card. Matching projects remain visible, while other projects are hidden. The result count also updates automatically.

The contact form checks that the name and message are not empty and that the email has a valid format. It displays helpful messages when the input is invalid and a confirmation when the form is completed correctly.

## Technologies Used

- HTML5 for page structure.
- CSS3 for styling, responsive design, themes, and animation.
- JavaScript for search, validation, dynamic text, and theme storage.
- Git and GitHub for version control.


## Project Structure

```text
202347030-ZainabAljarrash-assignment2/
├── assets/
│   └── images/
│       ├── networking-assistant.jpg  # Image for the Networking Assistant project
│       └── seraj-project.jpg         # Image for the Seraj project
├── css/
│   └── styles.css                    # Layout, themes, responsive design, and animations
├── docs/
│   ├── ai-usage-report.md            # Explanation of how AI assisted the project
│   └── technical-documentation.md    # Details about the technical implementation
├── js/
│   └── script.js                     # Search, validation, theme, greeting, and year functions
├── .gitignore                        # Files and folders Git should ignore
├── index.html                        # Main structure and content of the portfolio
└── README.md                         # Project description, features, and setup instructions
```

## How to Run

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using the Live Server extension.

No installation, package manager, or backend is required.

## How to Use

- Use the navigation links to move between sections.
- Type in the project search box to filter the project cards.
- Use the theme button to switch between light and dark modes.
- Complete the contact form to test its validation and feedback.

Note: The contact form is a demonstration and does not send data to a server.

## AI Use

I used ChatGPT to help me choose interactive features that were suitable for my portfolio. It also suggested validation and accessibility improvements for my code. I implemented the suggestions that matched the assignment requirements and my website’s needs. Before including them in my project, I reviewed, changed, understood, and tested the suggestions.

More details are available in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

## Documentation

- [AI Usage Report](docs/ai-usage-report.md)
- [Technical Documentation](docs/technical-documentation.md)
