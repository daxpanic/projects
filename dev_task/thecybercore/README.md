# Login Page — Dev Task

## Live Demo
https://your-project.vercel.app

## Routes
- `/` — Component showcase (all screens)
- `/login` — Login form
- `/forgot-password` — Password recovery
- `/forgot-username` — Username recovery
- `/recovery-sent` — Recovery email confirmation
- `/new-password` — Set new password
- `/change-password` — Change password

## Stack
React, React Router, plain CSS

## Running Locally
```bash
npm install
npm start
```

## Component State Management

Each screen keeps its own state using `useState` — one piece of state for each thing the form needs to track: the input values, any validation errors, and whether the form is currently submitting. I chose this over a state management library because each screen only handles a handful of fields, and adding Redux or a reducer for that would be more complexity than the problem needs. Validation lives in a separate `validate()` function that checks the fields, fills in an errors object, and returns true or false so the submit handler knows whether to continue.

Where two screens shared the same underlying logic, I used one component with a prop instead of writing the same code twice. The Login component handles both the standard login and the "Welcome back" screen for returning users — it checks `localStorage` on mount with `useEffect`, and if a saved user exists it hides the email field and shows their name. The Recovery component handles both password recovery and username recovery, switching its title, description, and button text based on a `mode` prop. Screens with genuinely different logic, like New Password and Change Password, stayed as separate components since merging them would have meant piling on conditionals without removing any real duplication.

## How Reviewers Can Access All States

Every screen has its own URL, so you can go directly to any of them:

- `/` — showcase page with every screen displayed side by side
- `/login` — login form
- `/forgot-password` — password recovery
- `/forgot-username` — username recovery
- `/recovery-sent` — confirmation after recovery email is sent
- `/new-password` — set a new password
- `/change-password` — change existing password

The showcase page at the root URL shows all components at once, so you can review everything without navigating between pages. Within any form, the different input states appear naturally as you interact: submitting an empty form shows the error state with red borders and inline messages, typing valid input shows the confirmed state with a checkmark, and submitting a filled form shows the loading state for 1.5 seconds before navigating to the next screen.
