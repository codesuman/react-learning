# React Learnings

## CLICK EVENTS

An event that gets triggered when user clicks on a specific element. We can respond to such events by passing a callback to the onClick event handler.

```javascript
const ListComponent = ({items}) => {
    return (
        <ul>
            {
                items.map(item => <li>{item}</li>)
            }
        </ul>
    );
}
```