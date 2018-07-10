# W6D2 - June 4, 2018 Lighthouse Labs Web bootcamp

## Review

### What is a component?

- Like a JS function:
  - Takes arguments (props)
  - Returns React Elements which describe what should be rendered on the screen

### State vs Props

#### State

- Values which change over time
- Changing state causes a re-render
- Controlled/Owned by the Component
- Can only exist on Class Components

#### Props

- Arguments to our component
- Owned by another component, we can't change them

### Component Lifecycle

Refer to this [page](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) for an overview of the Component Lifecycle. Also see the [React.Component](https://reactjs.org/docs/react-component.html#the-component-lifecycle) documentation

### Data Flow

Data goes down, via props.

Actions come up, via callbacks, which are also passed as props.

## Controlled / Uncontrolled Components

### Controlled Components

- `<input>`, `<textarea>` and `<select>` all maintain their own state inside of the element
- However, in React, we usually want to maintain all state in our components, as this provides a "Single Source of Truth" for our app.
- An input form element whose value is controlled by React is called a **Controlled Component**

> N.B. If an input has a `value` prop set, it also needs to have an `onChange` handler.

See [here](https://reactjs.org/docs/forms.html)

### Uncontrolled Components

- Keeps the internal state management in the DOM
- To get values from an uncontrolled component, we would use a [ref](https://reactjs.org/docs/refs-and-the-dom.html)
- To set an initial value for an uncontrolled component, use the `defaultValue` prop

See [here](https://reactjs.org/docs/uncontrolled-components.html)

## Code

https://github.com/daegren/lhl-jun4-w6d2-breakout
