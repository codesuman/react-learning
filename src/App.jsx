import Card from './Card'

import './App.css'

const data = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' },
  { id: 4, name: 'Item 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, reprehenderit tempora architecto vero delectus error fugit saepe, ea fuga dicta pariatur! Perferendis odit dicta officia. Quos atque sequi animi!' },
];

function App() {
  return(
    <>
      {
        data.map(item => <Card id={item.id} name={item.name} desc={item.description} />)
      }
    </>
  );
}

export default App
