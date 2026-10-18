# AI Usage Report

## AI Tool Used

I used ChatGPT while working on Assignment 2.

## How I Used ChatGPT

I used ChatGPT to help me choose interactive features that were suitable for my portfolio. After reviewing the assignment requirements, I selected a live project-search feature because it responds to user input and helps visitors find projects.

ChatGPT also helped me with:

- Planning the project-search feature.
- Explaining how JavaScript filters the project cards.
- Adding a result count and a message when no projects are found.
- Improving the contact form with validation and feedback.
- Suggesting accessibility improvements.
- Explaining some concepts as a revision before I started the tasks.

## Benefits and Challenges

AI helped me divide the assignment into smaller steps that could be implemented more easily. It also helped me understand how to check the structure of a valid email and allow users to search for specific project information.

One challenge was that the generated suggestions did not always match my project. The first validation suggestion required at least two characters for a name and at least ten characters for a message. I decided that these restrictions were unnecessary because a person may use a one-character name or send a short valid message.

I changed the validation so that the name and message only need to be nonempty. The email must still follow a valid email format.

## Learning Outcomes

Through this process, I learned how to:

- Use an `input` event listener to respond while a user types.
- Compare search text with project-card content.
- Show and hide elements using JavaScript.
- Update a result count dynamically.
- Validate form input and display helpful errors.
- Use `aria-live` and `aria-invalid` for accessibility.
- Save and restore a theme using `localStorage`.
- Respect reduced-motion accessibility preferences.

## Responsible Use and Modifications

I did not submit AI-generated code without reviewing it. I read the code, tested it, and asked for explanations when I did not understand something.

ChatGPT supported my learning and problem-solving, but I made the final decisions.

I tested the project-search feature using matching and nonmatching words. I also tested the form with empty fields, an invalid email, and valid input.