# Redux Task

## Overview

This component, `Display`, is part of a larger application for managing a shopping cart. It is responsible for rendering the contents of the shopping cart, including product details, quantities, prices, and actions for managing items.

## Features

- Displays the list of products in the shopping cart.
- Allows users to view product details, such as title, description, price, discount, rating, stock, and brand.
- Provides buttons for incrementing, decrementing, and removing items from the cart.
- Calculates and displays the total quantity and total price of items in the cart.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Redux: State management library for JavaScript applications.
- Bootstrap: Front-end framework for developing responsive and mobile-first websites.
- FontAwesome: Library of icons for web projects.

## Here's how Redux is used in the Display component:
Redux is a state management library for JavaScript applications, commonly used with React. It follows the principles of unidirectional data flow and allows you to manage the state of your application in a predictable and centralized manner.

- Store: Redux revolves around a single immutable state tree called the store. In the context of the shopping cart, the store holds the state of the cart, including the list of products and their quantities.

- Actions: Actions are plain JavaScript objects that describe the changes you want to make to the state. In the shopping cart example, actions such as incrementing quantity, decrementing quantity, and removing items from the cart are defined. These actions are dispatched to the Redux store to trigger state changes.

- Reducers: Reducers are functions that specify how the state should change in response to actions. Each reducer takes the current state and an action as arguments and returns the next state. In the shopping cart, reducers handle actions such as incrementing quantity, decrementing quantity, and removing items, and update the state accordingly.

- Dispatch: Dispatch is a function provided by Redux that allows you to send actions to the store. In the Display component, the useDispatch hook is used to dispatch actions such as incrementQuantity, decrementQuantity, and handleRemove when corresponding UI events occur, such as clicking buttons to adjust quantities or remove items from the cart.

- Selectors: Selectors are functions used to extract specific pieces of data from the store's state. In the Display component, the useSelector hook is used to access the list of products in the shopping cart from the Redux store.

## Output

check through=>https://redux-task-sri2403.netlify.app/