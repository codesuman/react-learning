# React Learnings

### HOW TO STYLE REACT COMPONENTS WITH CSS 
#### (not including external frameworks or preprocessors)

----------------------------------------------------------------------

1. EXTERNAL - Global styles
2. MODULES - Component level styles
3. INLINE - Small components with minimal styles

### MODULES - Component level styles

```javascript
import './Button.css';

function Button() {
    return (
        <button className='button'>Click me</button>
    );
}

export default Button;
```

```css
.button {
    background-color: hsl(200, 100%, 50%);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
```

### INLINE - Small components with minimal styles

```javascript
function Button() {

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    return (
        <button style={styles}>Click me</button>
    );
}

export default Button;
```

In inline CSS, actual CSS will be converted into JSON object & take note of camelcase properties.