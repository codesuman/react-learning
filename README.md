# React Learnings

## LISTS RENDERING

Mostly when you have Array of elements / objects, use map to iterate over the array & generate UI element for each array element.

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