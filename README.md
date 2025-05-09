# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React Resources

[React Basics](https://www.youtube.com/watch?v=CgkZ7MvWUAA)

[React State Management](https://www.youtube.com/watch?v=-bEzt5ISACA)

# React Learnings

React Component : function that returns JSX code

`JSX`, or JavaScript XML, serves as a syntax extension for JavaScript, enabling developers to write HTML-like code within JavaScript files. It is primarily used in React to describe the structure of user interface components. While it resembles HTML, JSX offers the full power of JavaScript, allowing for dynamic content rendering, embedding expressions, and handling events efficiently. 
JSX is not directly interpreted by browsers. Instead, it undergoes a compilation process, typically using Babel, to transform it into standard JavaScript code, specifically into `React.createElement()` calls. This transformation ensures that browsers can understand and execute the code correctly. 

### Key features and uses of JSX include: 

#### Embedding Expressions: 
Curly braces `{}` allow embedding JavaScript expressions directly within JSX, facilitating dynamic content rendering. 
#### Attributes: 
Attributes in JSX are specified similarly to HTML, but with camelCase naming conventions for certain attributes (e.g., `className` instead of `class`). 
#### Children: 
JSX elements can contain nested elements or content, similar to HTML, enabling the creation of complex component hierarchies. 
#### Representation of Objects: 
JSX is ultimately converted into JavaScript objects representing virtual DOM elements, which React uses to efficiently update the actual DOM. 

```javascript
const name = "User";
const element = <h1>Hello, {name}!</h1>;
```

In the example above, the `name` variable is embedded within the `h1` element using curly braces, demonstrating JSX's ability to handle JavaScript expressions. 
JSX promotes code readability and maintainability by providing a familiar HTML-like syntax for structuring UI components while leveraging the capabilities of JavaScript.

[All about JSX](https://www.freecodecamp.org/news/jsx-in-react-introduction/)

# Topics

* [cards](https://github.com/codesuman/react-playground/tree/cards)
* [css-approaches](https://github.com/codesuman/react-playground/tree/css-approaches)
* [props-everything](https://github.com/codesuman/react-playground/tree/props-everything)
* [conditional-rendering](https://github.com/codesuman/react-playground/tree/conditional-rendering)
* [lists-rendering](https://github.com/codesuman/react-playground/tree/lists-rendering)
* [click-events](https://github.com/codesuman/react-playground/tree/click-events)
* [hooks](https://github.com/codesuman/react-playground/tree/hooks)
* [hooks-usestate](https://github.com/codesuman/react-playground/tree/hooks-usestate)
* [onchange-event](https://github.com/codesuman/react-playground/tree/onchange-event)
* [colorpicker](https://github.com/codesuman/react-playground/tree/colorpicker)
* [onchange-event](https://github.com/codesuman/react-playground/tree/onchange-event)
* [update-object](https://github.com/codesuman/react-playground/tree/update-object)
* [update-arrays](https://github.com/codesuman/react-playground/tree/update-arrays)
* [update-array-of-objects](https://github.com/codesuman/react-playground/tree/update-array-of-objects)
* [todo-app](https://github.com/codesuman/react-playground/tree/todo-app)
* [hooks-usereducer](https://github.com/codesuman/react-playground/tree/hooks-usereducer)
* [hooks-useeffect]()
* [digital-clock-app]()
* [hooks-usecontext]()
* [hooks-useref]()
* [stopwatch-app]()
