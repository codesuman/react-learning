# React Learnings

```javascript
import React from 'react';

const data = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' }
];

function ItemComponent({ item, key }) {
  return (
    <div key={key}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      {data.map(item => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
```