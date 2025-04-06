import './List.css';

const List = ({items = [], category = 'Category'}) => {
    const listItems = items.map(item => 
        <li key={item.id}>{item.name} &nbsp; : &nbsp; <b>{item.calories}</b> </li>
    );

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

export default List;