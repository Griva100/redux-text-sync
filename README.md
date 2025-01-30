# redux-text-sync

## Overview
This is a simple React application using Redux for state management. The app contains:

- **Component A**: Parent component that renders two child components.
- **Component B**: Contains an input field and dispatches the entered value to the Redux store.
- **Component C**: Displays the value from the Redux store.

## Installation

1. Clone the repository:
  ```bash
  git clone <repo-url>
  cd <repo-name>
  ```
2. Install dependencies:
  ```bash
   npm install
   ```
3. Run the app:
  ```bash
  npm start
  ```

## How it works

- **Component B**: Listens for onChange event on the input field and dispatches the entered value to the Redux store using dispatch(setInputValue()).
- **Component C**: Uses useSelector to retrieve the value from the Redux store and displays it.


## Final Notes:
Ensure that `redux` and `react-redux` are installed in your project. You can install them using:
  ```bash
  npm install @reduxjs/toolkit react-redux
  ```
