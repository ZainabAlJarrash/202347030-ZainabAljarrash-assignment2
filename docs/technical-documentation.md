# Technical Documentation

## Project Overview

This project is a responsive personal portfolio website that is the starting point for my professional portfolio. It introduces me, presents my main projects, shows my skills and interests, and provides contact information.

The website uses HTML, CSS, and JavaScript. It does not require a backend or database.

## Technologies Used

- HTML for the structure and content.
- CSS for the design and responsive layout.
- JavaScript for interactions.
- Git and GitHub for version control.
- Live Server for local testing.
- ChatGPT for development guidance.
- TeleportHQ and Webstudio for design exploration.

## Project Structure

```text
project-folder/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── seraj-project.jpg
│       └── networking-assistant.jpg
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md
```

## HTML Structure

### Navigation

The navigation links point to section IDs on the same page. This lets visitors move directly to About, Projects, Interests, or Contact.

### Hero

The hero section displays my name, tagline, a time-based greeting, and a button that links to my projects.

### About Me

This section introduces me as a software engineering student and graphic designer who is interested in technology, programming, cloud computing, and artificial intelligence.

### Projects

The Projects section presents Seraj, a virtual reality game about Saudi culture, and Networking Assistant, a web-based project for ICS 343 students. Each project has a title, description, image, and topic tags.

### Skills and Interests

This section presents my interests in programming, graphic design, cloud computing, and artificial intelligence.

### Contact

The Contact section contains my university email, LinkedIn profile, and a form with Name, Email, and Message fields. The form is a demonstration because the assignment does not require a backend.

## CSS Design

The stylesheet is stored in `css/styles.css`. CSS variables control the main colors, which makes light and dark themes easier to manage.

Flexbox is used for navigation and alignment. CSS Grid is used for the project cards, interest cards, and contact links. Media queries change the layout for tablets and mobile devices. Project images use `object-fit: cover` so they have a consistent size without becoming distorted.

## JavaScript Features

The JavaScript is stored in `js/script.js`.

### Time-Based Greeting

JavaScript gets the current hour using `new Date().getHours()`. An `if/else` condition displays a morning, afternoon, or evening greeting.

### Contact-Form Feedback

An event listener detects when the contact form is submitted. It prevents the page from refreshing, displays a demonstration message, and resets the form. It does not claim that data was sent because there is no backend.

### Automatic Copyright Year

JavaScript gets the current year and adds it to the footer automatically.

### Dark Mode

The theme button adds or removes the `dark-theme` class from the page. The CSS changes its color variables when this class is active. The selected theme is stored using `localStorage`, so the website remembers it after the page is refreshed.

## Responsive Design and Testing

I tested the website with Live Server and browser developer tools at mobile, tablet, and desktop widths. I checked the navigation, project images, contact links, required form fields, form feedback, greeting, dark-mode button, saved theme, and browser console.

## Limitation

The contact form does not send or save messages because the project does not include a backend.
