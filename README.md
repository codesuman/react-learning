# React Learnings

## HOOKS

React Hooks are functions that let developers "hook into" React state and lifecycle features from functional components. Hooks allow the use of state and other React features without writing class components. They enable the reuse of stateful logic between components, making code more readable, testable, and maintainable. 

#### Here are some commonly used built-in Hooks:

### useState: 
Manages state within a functional component.

```javascript
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### useEffect: 
Performs side effects in functional components, similar to lifecycle methods in class components.

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### useContext: 
Accepts a context object and returns the current context value for that context. 

```javascript
import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function MyComponent() {
  const value = useContext(MyContext);

  return <div>{value}</div>;
}
```

### useRef: 
Creates a mutable ref object that persists across re-renders, useful for accessing DOM elements or storing mutable values.

```javascript
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return <input type="text" ref={inputEl} />;
}
```

### useMemo: 
Memoizes the result of a function, preventing unnecessary recalculations.

```javascript
import React, { useState, useMemo } from 'react';

function MyComponent({ a, b }) {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    // Expensive calculation
    return a + b;
  }, [a, b]);

  return (
    <div>
      <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### useCallback: 
Memoizes a function definition, preventing unnecessary re-creation of functions.

```javascript
import React, { useState, useCallback } from 'react';

function MyComponent({ onClick }) {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return <button onClick={handleClick}>Click me</button>;
}
```

### useReducer: 
Manages complex state logic using a reducer function.

```javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

These are some fundamental React Hooks. Developers can also create custom Hooks to encapsulate and reuse logic specific to their applications.
