# React Learnings

## UPDATER FUNCTION

`useState` is a React Hook that allows functional components to manage state. It returns an array containing the current state value and a function to update it. The updater function, obtained from `useState`, can be used in two ways: by directly passing the new state value or by passing a function that receives the previous state as an argument and returns the new state. 
When updating state based on the previous state, it is recommended to use the functional form of the updater function. This ensures that the update is based on the most recent state value, preventing potential issues with asynchronous updates or multiple updates within a single event handler.

Here's a comparison of both approaches:

#### Direct Value Update

```JavaScript

const [count, setCount] = React.useState(0);

const increment = () => {
  setCount(count + 1);
};
```

This approach works well when the new state doesn't depend on the previous state. However, if multiple updates are performed in quick succession, or if the update occurs within an asynchronous operation, it might lead to unexpected results due to state being updated based on a stale value.

#### Functional Update
````JavaScript

const [count, setCount] = React.useState(0);

const increment = () => {
  setCount(prevCount => prevCount + 1);
};
````

Using the functional form ensures that the update is based on the most recent state. React queues these updates and applies them in order, guaranteeing that each update is based on the correct previous state.

### Key Differences and When to Use Each Approach

| Feature | Direct Value Update | Functional Update |
| :---         |     :---:      |          ---: |
| State Dependency | Not dependent on previous state     | Dependent on previous state    |
| Asynchronous Updates  | May lead to issues | Safe and reliable |
| Multiple Updates  | May lead to issues | Ensures correct updates |
| Use Case  | Simple updates, independent of previous state | Updates based on previous state, asynchronous operations, multiple updates |

In essence, while both methods update the state, the functional update form provides a more robust and predictable way to handle state updates, especially in complex scenarios. It is generally recommended to use the functional form whenever the new state depends on the previous state.