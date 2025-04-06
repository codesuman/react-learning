import List from "./components/List";

function App() {
  const fruits = [
    {id: 1, name: 'Apple', calories:95}, 
    {id: 2, name: 'Orange', calories:45}, 
    {id: 3, name: 'Banana', calories:105}, 
    {id: 4, name: 'Coconut', calories:159}, 
    {id: 5, name: 'PineApple', calories:37}
  ];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDERING
  // fruits.sort((a, b) => a.calories - b.calories); // NUMERICAL ORDERING

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

  const vegetables = [
    {id: 1, name: 'Poratoes', calories:110}, 
    {id: 2, name: 'Celery', calories:15}, 
    {id: 3, name: 'Carrots', calories:25}, 
    {id: 4, name: 'Corn', calories:159}
  ];

  return(
    <>
      {fruits.length && <List items={fruits} category="Fruits" />}
      {vegetables.length && <List items={vegetables} category="Vegetables" />}
    </>
  );
}

export default App;