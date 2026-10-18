# Technical Documentation

## Project Overview

This project is a responsive and interactive personal portfolio created using HTML, CSS, and JavaScript. It introduces me, presents my projects and interests, and provides my contact information.

Assignment 2 improves the original portfolio by adding live project search, form validation, user feedback, animation, and saved theme preferences.

## Technologies Used

- HTML5 for the website structure and content.
- CSS3 for styling, responsive layouts, themes, and animations.
- JavaScript for dynamic behavior and validation.
- `localStorage` for saving the selected theme.
- Git and GitHub for version control.
- Live Server for local testing.

## HTML Structure

The page uses semantic sections for navigation, the hero area, About Me, projects, interests, contact information, and the footer.

The Projects section includes a search field, project cards, a search-status message, and an empty-state message.

The Contact section includes university email and LinkedIn links. It also contains a demonstration form with name, email, and message fields.

## CSS Design

CSS variables control the main colors, backgrounds, borders, and shadows. The variables change when the `dark-theme` class is active.

CSS Grid is used for the project and interest cards, while Flexbox is used for navigation and alignment.

Media queries adapt the layout for tablets and mobile devices. Transitions and hover effects provide visual feedback. Project cards also use a short reveal animation when they appear after filtering.

The `prefers-reduced-motion` media query disables animations for visitors who request reduced motion.

## JavaScript Features

### Project Search

An `input` event listener detects what the user types in the project-search field. JavaScript converts the search text and project content to lowercase before comparing them.

Matching project cards remain visible, while cards that do not match are hidden. JavaScript also updates the number of visible projects. If there are no matches, a friendly empty-state message appears.

### Contact-Form Validation

A `submit` event listener prevents the demonstration form from refreshing the page.

JavaScript checks that:

- The name is not empty.
- The email follows a valid email format.
- The message is not empty.

Invalid fields receive an error message and an `aria-invalid` attribute. Focus moves to the first invalid field. When all entries are valid, the form displays a confirmation message and clears the fields.

### Dark Mode

The theme button adds or removes the `dark-theme` class. The selected theme is stored in `localStorage`, allowing the website to restore the visitor’s preference after the page is refreshed.

### Time-Based Greeting

JavaScript uses the current hour to display a morning, afternoon, or evening greeting.

### Automatic Year

JavaScript gets the current year and displays it automatically in the footer.

## Accessibility

- Form fields have connected labels.
- Error and status messages use `aria-live`.
- Invalid fields use `aria-invalid`.
- Keyboard focus styles are visible.
- The theme button reports whether dark mode is active.
- Reduced-motion preferences are respected.

## Testing

I tested the website using Live Server and browser developer tools. I checked:

- Navigation links.
- Project search with matching and nonmatching words.
- Project count and empty-state feedback.
- Empty, invalid, and valid form submissions.
- Light and dark themes.
- Saved theme preference after refreshing.
- Desktop, tablet, and mobile layouts.
- Images, email, and LinkedIn links.

## Limitations

The contact form demonstrates validation and feedback but does not send or store messages because the project does not include a backend or external form service.