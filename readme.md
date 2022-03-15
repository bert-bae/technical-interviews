# React Exercise

Acceptance Criteria:

- Able to add the search input value to the search history

- When clicking `Undo` button, the search input should use the previous search value.

  - The search history should update to only show up to the latest search. If undoing the previous search, it should remove it from the history.
  - If there is no further history to `undo`, the search input should contain no value.

- Able to display the search history list

  - If there is no search history to display, the `Search History` header should not be visible. If there is history, then the `Search History` header should be visible.

- If the user clicks an individual search history item, the value of the search input should update to the clicked history.

  - In this particular scenario, the history should only maintain history prior to the clicked history item.

### Exercise 1 (Code Review):

Review the `gif` in `public/images/basic-functionality.gif`. This is what the basic functionality should be.

- Review the code and identify any bugs (look for differences between the actual versus the gif).
- Review the code and provide feedback as if you were providing a review to a colleague in terms of:
  - React standards
  - Code cleanliness
  - Readability

### Exercise 2 (Implementing useSearchHistory custom hook):

Refactor the code to implement the `useSearchHistory` custom hook. This hook should be responsible for the following:

- The history state.
- Ability to add to the history
- Ability to undo from the history
- Ability to force update the history list

In `hooks/useSearchHistory.js`, there are some example code to get you started. Refactor the code to use this hook.

### Exercise 3 (Implementing debounce on search):

Review the `gif` in `public/images/debounce.gif`. This is what the debounce functionality should look like.

Instead of the history being added to by using the `search` button, we want to track the input changes with a debounce. When a user types into the search input, the application should add to the `history` after a delay.

- Do not add to the history per letter typed into the input field. It should add to the history chunks of the updated string when the user stops typing.
