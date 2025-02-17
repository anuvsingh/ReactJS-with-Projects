# ReactJS Notes
This is basically notes of React that i have leanrned react by making projects so feel free to study. I have study ReactJS from [Hitesh Sir](https://github.com/hiteshchoudhary) who taught me many things in the education and also in life.

---

## Video 1: Introduction to React JS
- React is a JS library created by Facebook.
- It is primarily used for building user interfaces (UI).
- React helps in building complex frontend applications efficiently.
- It was created due to the **Phantom Message Problem** in Facebook.
- Projects can be created using React documentation or tools like **Vite**.

---

## Video 2: Vite & JSX
### Vite
- **Vite** *(pronounced "veet", meaning "fast" in French)*
- Created by **Evan You**, the creator of Vue.js.
- It is a modern build tool and development server that provides a fast and optimized experience for building web applications.
- It is framework-agnostic and supports other libraries and frameworks like React, Svelte, and more.

### JSX *(JavaScript XML)*
- Syntax extension for JavaScript, used with React.
- It is commonly used with React to describe what the user interface should look like. 
- Allows writing UI components using HTML-like syntax combined with JavaScript.

---

## Video 3: Understanding React Project Workflow
- Learning how React files interact and function within a project.
- Basically, Studying React Project Workflow.

- ***01vitereact Project:-*** [Repository](./01vitereact/src)

---

## Video 4: Creating a Custom React
Creating our Custom React by understanding the structure and workflow of a original React project.
### **HTML File (index.html)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom React App</title>
</head>
<body>
    <div id="root"></div>
    <script src="./customreact.js"></script>
</body>
</html>
```

### **JavaScript File (customReact.js)**
```js
// First parameter is that kya inject krna hai.
// Second parameter is that kaaha pe inject krna hai.
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
```

- ***customReact Project:-*** [Repository](./customReact/customReact.js)

---

## Video 5: Why Do We Need Hooks?
- Basically React different jaagah UI components ko ek variable pe click se hr jaagah change kr deta hai. 
- Isi liye sayd React bola jaata hai ishe....
- React enables UI components to update dynamically based on user interactions.
- **Hooks** usually refer to React Hooks, which are functions that let you use state and other React features in functional components.
- Hooks allow function components to have access to state and other React features. 
- Because of this, class components are generally no longer needed. 
- Although Hooks generally replace class components, there are no plans to remove classes from React.
- **useState Hook**:
  - Allows managing state within a functional component.
  - It lets you declare a state variable and update it within a function component without using a class.

- ***02counter Project:-*** [Repository](./02counter/src)

---

## Video 6: Virtual DOM & React Fiber
### **Virtual DOM**
- ReactJS Virtual DOM is an in-memory representation of the actual DOM (Document Object Model). 
- React uses this lightweight JavaScript object to track changes in the application state and efficiently update the actual DOM only where necessary.
### **How does Virtual DOM works ?**
- 1. *Rendering the Virtual DOM:* React creates a virtual representation of the UI as a tree of JavaScript objects.
- 2. *Updating State:* It generates a new Virtual DOM tree to reflect the updated state when the application state changes.
- 3. *Diffing Algorithm:* React compares the new Virtual DOM tree with the previous one using its efficient diffing algorithm to identify the minimal set of changes required.
- 4. *Updating the Real DOM:* React applies only the necessary changes to the real DOM, optimizing rendering performance.

### **React Fiber**
- Fibers are a much lower-level abstraction than application developers typically think about.
- Primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to: 
    - *pause work and come back to it later.*
    - *assign priority to different types of work.*
    - *reuse previously completed work.*
    - *abort work if it's no longer needed.*
- In one sense, that's what a fiber is. A *fiber* represents a unit of work.

***📖 More info:*** [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

---

## Video 7: Props in ReactJS
- **Props (short for Properties)** are used to pass data from one component to another, typically from a parent component to a child component.
- Props allow components to be dynamic and reusable by enabling them to receive different inputs and behave accordingly.

- ***03tailwindprops Project:-*** [Repository](./03tailwindprops/src)

---

## Video 8: React Interview Question on Counter
### **Understanding Batch Updates in React**
- Folder Name: *02counter*
- If there are many lines of *chaiCounter(counter + 1)*.
- What will happen ? It will increase all in one click or only one time +1 ?
- Answer is only one time it will increase.
- If multiple `setCounter(counter + 1)` calls are made, the counter updates only once due to React's **batching mechanism**.
- If you want to do it so basically it is not optimized way but then also you can use *prevCounter.*
- To ensure multiple updates occur, use the previous state:
```js
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
```
- Using **prevCounter** ensures each update considers the latest state, making multiple updates possible.

---

## Video 9: Background Changer
### Project Name: 04bgChanger
- We have used tailwind and useState as hooks.
- We have made a function and declared useState: 
```js
function App() {
  const [color, setColor] = useState("black")
```
- And then return for each colors.
```js
<button
    onClick={() => setColor("red")}
    className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
    style={{ backgroundColor: "red" }}
    >Red</button>
```
- ***04bgChanger Project:-*** [Repository](./04bgChanger/src)

---

## Video 10: useEffect, useRef and useCallback
### Project Name: 05passwordGenerator
- **useEffect**: `useEffect(<function>, <dependency>)` allows you to perform side effects in your components. The second argument is optional. It runs after the render and can re-run when dependencies change.
- **useRef**: allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
- **useCallback**:  returns a memoized callback function. Think of memoization as caching a value so that it does not need to be recalculated. This allows us to isolate resource intensive functions so that they will not automatically run on every render.The useCallback Hook only runs when one of its dependencies update.
- ***05passwordGenerator Project:-*** [Repository](./05passwordGenerator/src)

---

## Video 11: Custom Hooks
### What is custom hooks ?
- Custom Hooks in React are reusable functions that allow you to encapsulate and share logic across components while adhering to React’s Hooks rules. 
- They help in keeping components clean and modular by moving logic out of them.
### Why use custom hooks ?
- 1. **Reusability** 
- 2. **Code Separation**
- 3. **Improved Readability**
- 4. **Encapsulation of Side Effects**
### How to Create a Custom Hook ?
A custom hook is simply a JavaScript function that:
- Starts with the word "use" (e.g., `useFetch`, `useLocalStorage`).
- Can call other built-in hooks like `useState`, `useEffect`, etc.
- Returns values (state, functions, etc.) that components can use.
- Remember the key in loops in ReactJS.
```js
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])

    console.log(data)
    return data
}

export default useCurrencyInfo;
```
- ***06currencyConverter Project:-*** [Repository](./06currencyConverter/src)

---

## Video 12: React Router
### What is React Router ?
- React Router is a standard routing library for React that enables single-page applications (SPAs) to navigate between different views without requiring a full-page reload
-  It provides a declarative way to handle navigation and URL management in React applications.
- **Installation**
To use React Router, install the package using npm or yarn:
    - `npm install react-router-dom` or
    - `yarn add react-router-dom`
### Why React Router ?
- To create a multi-page-like experience, React Router enables dynamic content rendering without refreshing the page.
- React Router allows you to manage URLs efficiently, making it easy to bookmark pages, share links, and enable deep linking.
### Core Components of React Router
- `BrowserRouter` - Wraps the app to enable routing
- `Routes & Route` - Define multiple routes
- `Link & NavLink` - Navigate between pages
- `useParams` - Access URL parameters
- `useNavigate` - Programmatically navigate
- `Navigate` - Redirect to another route
- `useSearchParams` - Handle query parameters
- `Suspense & lazy()` - Optimize performance with lazy loading
- *Protected Routes* - Restrict access based on authentication

- ***07reactRouter Project:-*** [Repository](./07reactRouter/src)

---

## Video 13: Context API
### What is Context API ?
- Context API is a feature in React that provides a way to pass data through the component tree without having to pass props manually at every level. 
- It is designed to manage global or shared state in an application efficiently.
- React Context API allows data to be shared across multiple components without requiring prop drilling, where props are passed from parent to child components unnecessarily.
- It was introduced in React 16.3 as an alternative to state management libraries like Redux.
### Why is Context API used ?
- Context API solves the problem of *prop drilling* in React.
- **Prop Drilling** occurs when data is to be passed between multiple layers before finally sending it to the required component. This makes the application slower.
- This problem is solved by Context API as it creates global variables to be used throughout the application without any middle components involved. It is also easier to use than React Redux.
### Context API Working
- To work with Context API we need `React.createContext()`.
- It has two properties *Provider* and *Consumer*.
- The **Provider** acts as a parent it passes the state to its children.
- The **Consumer** uses the state that has been passed.

- ***08miniContext Project:-*** [Repository](./08miniContext/src)
- ***09themeswitcher Project:-*** [Repository](./09themeswitcher/src)

---

## Video 14: Context API with Local Storage
### What is Local Storage ?
- Local Storage is a feature of web browsers that allows websites to store data persistently on a user's device.
- It is part of the Web Storage API and provides a simple key-value storage mechanism that remains available even after the user closes and reopens the browser.
- Most browsers allow up to 5MB of storage per domain.
- A webpage can only access its own stored data.
### Using Context API with Local Storage
- Context API in React allows you to manage state globally, and combining it with Local Storage helps persist data even after a page refresh.
- Why Use Context API with Local Storage ?
    - **Global State Management** - Context API helps manage shared state across components.
    - **Persistent Data** - Local Storage ensures data is not lost when the page reloads.
    - **Avoid Prop Drilling** - Pass data through context instead of props.

- ***10todocontextLocal:-*** [Repository](./10todocontextLocal/src)

--- 

## Video 15 : Redux Toolkit
### What is Redux ?
- Redux is a **state management independent library** for JavaScript applications.
- It helps manage and centralize application state efficiently.
- It is based on the Flux architecture.
- Provides a single source of truth (a centralized store).
- Helps in predictable state updates using pure functions.
### Why Redux Came ?
In React, props drilling and lifting state up make state management complex in large applications. Here’s why Redux was introduced: 
1. ***Complex State Management*** – As applications grow, managing state across multiple components becomes difficult.
2. ***Props Drilling Issue*** – Passing data from parent to deeply nested child components makes the code messy.
3. ***Inconsistent State Updates*** – When multiple components share a common state, maintaining consistency is hard.
4. ***Difficult Debugging*** – Without a structured way to track changes, debugging state-related issues becomes challenging.
- ***Redux provides a global state (store) that all components can access, eliminating these issues.***
### How Redux Works ?
Redux follows a unidirectional data flow with three key principles:
1. **Store** (Single Source of Truth)
    - The store holds the entire application state in a single JavaScript object.
2. **Actions** (Intent to Change State)
    - Actions are plain JavaScript objects with a type property that describes what should change.
3. **Reducers** (Pure Functions to Update State)
    - Reducers take the current state and an action to return a new state.
4. **Dispatch** (Trigger State Changes)
    - We use dispatch(action) to trigger a state update.
5. **Subscribe** (Listening for State Changes)
    - Components subscribe to the Redux store to get the latest state.
### What is Redux Toolkit (RTK) ?
- Redux Toolkit (RTK) is an official, improved version of Redux that simplifies state management.
### Why Redux Toolkit Came ?
- **Redux was too boilerplate-heavy** – Writing reducers, actions, and store setup manually was time-consuming.
- **Code was hard to scale** – Managing a growing Redux codebase became complex.
- **Simplifies API calls** – Using createAsyncThunk, RTK makes API integration easier.
- **Better performance** – Built-in tools like Immer.js help manage state immutability.
### How Redux Toolkit Works ?
1. ***Store Setup*** (Less Boilerplate) - Instead of manually configuring a store, RTK provides configureStore().
2. ***Slices*** (Reducers + Actions Together) - RTK introduces createSlice(), which combines actions and reducers in one place.
3. ***Async Thunks*** (For API Calls) - RTK provides createAsyncThunk for handling asynchronous requests like fetching data.
### Redux Toolkit Installation
If you have existing react app then run the two commands: 
- `npm install @reduxjs/toolkit`
- `npm install react-redux`

- ***11reduxToolkit:-*** [Repository](./11reduxToolkit/src)

---
