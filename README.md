# React Learnings

## CONDITIONAL RENDERING

Allows you to control what gets rendered in the application based on certain conditions. 
(show, hide or change components)

```javascript
const UserGreeting = ({userName, isLoggedIn}) => {
    const welcomeMessage = <h2>Welcome, {userName}</h2>;
    const loginMessage = <h2>Please login to continue</h2>;

    return (isLoggedIn ? welcomeMessage : loginMessage);
}
```