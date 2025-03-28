# React Learnings

## PROPS

Read-only properties that are shared between components. 
A parent component can send data to a child component.

<Component key="value" numKey={100} boolKey={true} />

## PROP TYPES

A mechanism that ensures that the passed value is of correct datatype.

```javascript
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
```

These prop types just issue warning & won't prevent program from running.

```age``` is supposed to be number & if a string value is passed instead then prop types check will call that out as an error in console.


## DEFAULT PROPS

Default values in case they are not passed from parent component.

```javascript
const Component: FC<Props> = ({ foo = 'hello', bar = 'world' }) => {}
```