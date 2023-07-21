# React Basics
# 1. Dynamic Events and How to Handle Them
React also allows us to create events that are triggered when mouse click, movements or commands happen.
They rely on some sort of interaction.

In react, we add event listeners with:
```
<button onclick="addCart()">Add to cart</button>
```

In React code, events are handled using JSX event attributes. They are very similar to HTML event.
React uses camelCase for event handlers. Therefore, html's onclick is jsx's onClick.

## Handling errors
We handle errors in JS using the following:
```
try {
    (5).toUpperCase();
} 
catch(e) {
    console.log(`Oops, you can't uppercase a number. 
        Trying to do it resulted in the following`, e);
}
```

## Common Event Handling
When we use the function and inside an element with an event handler, we define the event handler inside of the function:
```
function Btn() {
    const clickHandler = () => console.log('clicked')
    return (
        <button onClick={clickHandler}>
            Click me
        <button>
    )
}

export default Btn;
```

Other option would be, for instance, with `onMouseOver`.

## Sintax for Handlers
HTML Event Handler:
```
<button
    id="js-btn"
    onclick="clickHandler()"
>
    Click me!
</button>
```

In JS:
```
const jsBtn = document.getElementById('js-btn')
jsBtn.addEventListener('click', function () {
    console.log('clicked')
})
```

In React, we do not need to get the element. We do not need and should not manipulate the DOM directly.

There is no function invocation in React, different from JS.

In React:
```
<button
    id="js-btn"
    onclick={clickHandler}
>
    Click me!
</button>
```

Anonimous functions can be used as well:
```
<button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button>
```
Or with ES6:
```
<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>
```

Or the typical way, specially useful for longer functions or in case the function needs to be reused.
```
function App() {
    const fourthExample = () => console.log('fourth example');

    return (
        <div className="fourthExample">
            <button onClick={fourthExample}>
                using a separate function expression
            </button>
        </div>
  );
};
export default App;
```

## User events
How do we change the theme from dark to light and from light to dark?
For that, we build a component called ModeToggler inside of ModeToggler.js:
```
function ModeToggler() {
    const darkModeOn = true;
    const darkMode = <h1>Dark Mode is On!</h1>
    const lightMode = <h1>Light Mode is On!</h1>

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
        </div>
    )
}

export default ModeToggler
```
We export the ModeToggler

And than we use the App, importing default the ModeToggler.
```
import ModeToggler from './ModeToggler'
import '.App.css'

function App() {
    return (
        <ModeToggler />
    )
}

export default App;
```

It is done in app_ex2.

Now I change it in a way that we can toggle between the dark and light:
```
function ModeToggler() {
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is On!</h1>
    const lightMode = <h1>Light Mode is On!</h1>

    const handleClick = () => {
        darkModeOn = !darkModeOn;
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Click    
            </button>
        </div>
    )
}

export default ModeToggler
```

As we see, we have added a button. Neverthless, while the button is clicked the h1 text is not updated.

Why does it not work? It is because of the flow of data.

# 2. Data and Events
## Parent-child data-flow
Let's say we have a promotion in a website that sells t-shirts.
We buiild the promo component and other components. In order to avoid changing each of the components everytime we want to change the information passed, we create a "single-source of truth", which is a json.
```
const data = {
    heading: "99% off all items",
    callToAction: "Everything must go!"
}
```

We pass the data from the parent to the child:
```
const data = {
    heading: "99% off all items",
    callToAction: "Everything must go!"
}

function Promo() {
    return (
        <div>
            <PromoHeading
            heading={data.heading} callToAction={data.callToAction}
            />
        <div>
    )
}
```

Now we change the PromoHeading:
```
function PromoHeading(props) {
    return (
        <h1>{props.heading}</h1>
        <h1>{props.callToAction}</h1>
    )
}
```

We do the same for the footer, and the main component.

## Data-flow
Data-flow in React is only from top to bottom.

While it works greatly, it would work with almost no interactivity.

Data can be also stored and changed within the component.

The data that is from within the component is used inside of State.

## What are hooks?
Hooks solve the problem of unecessary code reuse accross components.

To use it, we need to import it:
```
import React, {useState} from 'react';
```

We must always provide a name for the state and the set state. The set state is used to change the state of the component.
```
const [state, setState] = useState(initialState);
```

Another possible name, for instance:
```
const [showMenum, setShowMenu] = useState(false);
```

For that, we use array destructuring because the useState always returns an array with two items.

We call the state value with the useState hook.

The setState is used to change it.

It should be called at the top level of your component.

You can also build your own hooks to avoid rewriting functions.

Another example of using that is:
```
import { useState } from 'react';

export default function InputComponent() { 
  const [inputText, setText] = useState('hello'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </> 
  ); 
} 
```

Or even a more complicated one:
```
export default function RegisterForm() { 
  const [form, setForm] = useState({ 
    firstName: 'Luke', 
    lastName: 'Jones', 
    email: 'lukeJones@sculpture.com', 
  }); 

  return ( 
    <> 
      <label> 
        First name: 
        <input 
          value={form.firstName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              firstName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <label> 
        Last name: 
        <input 
          value={form.lastName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              lastName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <label> 
        Email: 
        <input 
          value={form.email} 
          onChange={e => { 
            setForm({ 
              ...form, 
              email: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <p> 
        {form.firstName}{' '} 
        {form.lastName}{' '} 
        ({form.email})
      </p> 
    </> 
  ); 
} 
```

Notice that you are using a form object to store the state of all three text input field values:

```
const[form, setForm] =useState({
firstName:'Luke',
lastName:'Jones',
    email:'lukeJones@sculpture.com',
});
```

In addition to the useState hook, there are other hooks that come in handy such as useContext, useMemo, useRef, etc. When you need to share logic and reuse the same logic across several components, you can extract the logic into a custom hook. Custom hooks offer flexibility and can be used for a wide range of use-cases such as form handling, animation, timers, and many more.

### the useRef hook
```
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

The useRef is used to Reference a particular item. After it is referenced, it can be used.
For instance, it can be used with current attribute to focus in that particular item.

### What is state?
When a component is created, it gets an initial state. It is used to initialize the components properties.

Components can be either stateful or stateless.

A stateless components does not define any state.

It is worth to mention that we cannot update the state directly:
```
function App() {
    const [word, setWord] = React.useState('Eat')

    setWord('Drink')

    return (
        <div className='App'>
            <Heading message{word + "at Little Lemon"}/>
        </div>
    )
}
```
The component above would not be able to change the state because we cannot change it directly. It is necessary to change with an event handler.

```
function App() {
    const [word, setWord] = React.useState('Eat')

    const handleClick = () => {
        setWord('Drink')
    }

    return (
        <div className='App'>
            <Heading message{word + "at Little Lemon"}/>
            <button onClick={handleClick}>Click here</button>
        </div>
    )
}
```

## Managing State
How can one component get data from a sibling component?
For instance, lets say we have a food tracker. In this food tracker, we have the meal list and the counter, where the counter counts how many meals that person can still eat today and the meal list shows all the meals left.

Here we have a problem because we want to change the counter component based on the meals list component and those components are siblings. In this case, we can "lift the state up" from meals list component to the App component. But, by doing that we can complicate the application: we would need to pass the information from meal list to app and from app to counter. When a more complicated application needs to do that, we can have many connections needing to be address to perform a similar task.

A better way to deal with that might be with "Global State". With this solution, we extract the state and import the state in the sibling component.

## Prop Driling
Prop drilling is a situation where you are passing data from a parent to a child component, then to a grandchild component, and so on, until it reaches a more distant component further down the component tree, where this data is required.

An example of prop driling:
```
function Main(props) { 
  return <Header msg={props.msg} />; 
};

function Header(props) { 
  return ( 
    <div style={{ border: "10px solid whitesmoke" }}> 
      <h1>Header here</h1> 
      <Wrapper msg={props.msg} /> 
    </div> 
  ); 
};

function Wrapper(props) { 
  return ( 
    <div style={{ border: "10px solid lightgray" }}> 
      <h2>Wrapper here</h2> 
      <Button msg={props.msg} /> 
    </div> 
  ); 
};

function Button(props) { 
  return ( 
    <div style={{ border: "20px solid orange" }}> 
      <h3>This is the Button component</h3> 
      <button onClick={() => alert(props.msg)}>Click me!</button> 
    </div> 
  ); 
};

function App() { 
  return ( 
    <Main  
      msg="I passed through the Header and the Wrapper and I reached the Button component"  
    /> 
  ); 
}; 

export default App;
```

## React State Management
As mentioned before, context API is useful to assure that the state can be manageed without needing to pass the data into multiple components, making the application simpler.

Using context API is a way to "teleport" the data directly.

For that, we set in the App component the Context Provider, which stores the data. When a component needs to access this data, it becomes a context consumer.

An example we use to address the meals app is created in app_ex3 and shows:
```
import MealsProvider from './components/MealsProvider';
import MealsList from './components/MealsList';
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default App;

```

Where the MealsProvider.js provides state data and gives to all the components which are wrapped inside of it. Currently, it wraps the MealsList and the Counter.

```
import React from 'react';

const MealsContext = React.createContext();

const todaysMeals = ['Baked Beans', 'Baked Sweet Potatoes', 'Baked Potatoes']

const MealsProvider = ({children}) => {

    const [meals, setMealsList] = React.useState(todaysMeals);

    return (
        <MealsContext.Provider value={({meals})}>
            {children}
        </MealsContext.Provider>
    )

}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider
```

This is all done by the `const MealsContext = React.createContext();` which allows us to wrap. It is later coded as a JSX function that allows us to pass the children components. The Provider comes with an attribute which, in this case, it is assigned with meals.

Finally, in this last code, we also create a function `useMealsListContext` that allows us to access the `React.useContext(MealsContext)`.

From that, we create the components that will be the context consumers, which are the component that uses the context provider's state.

From that, we can start to work with the MealList.js:
```
import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {

    const { meals } = useMealsListContext();

    return (
        <div>
            <h1>Meals List using Context API</h1>
            {meals.map((meal, index) => (
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    )
}

export default MealsList
```

The same is done for the Counter:

```
import { useMealsListContext } from "../providers/MealsProvider";

const Counter = () => {
    const { meals } = useMealsListContext();

    return (
        <div>
            <h3>Number of meals today: {meals.length}</h3>
        </div>
    )
}

export default Counter;
```

## Stateful and Stateless
There is no optimal solution for every need.

Stateless components also have advantages. A stateless components does not have any state and must inherit every data from props.

When a component does not need to change data, it is useful better to give it props.

Be aware that jsons and functions can also be passed to a child component.

## Important Points
Prop drilling: is a situation where you are passing data from a parent to a child component, then to a grandchild component, and so on, until it reaches a more distant component further down the component tree, where this data is required

The useState hook lets you hook into React state and lifecycle features from a component.

In the traditional page lifecycle the initial request is made and the html is given to the client side. After each post request, a new html is given.

In the SPA (Single Page Application): after, the initial request, one initial html is sent. For further requests in AJAX (which encapsulates a POST form), JSONs are passed from the server to address changes.

A single-page application can’t have regular anchor tag elements as a traditional web app can. 

The reason for this is that the default behavior of an anchor tag is to load another HTML file from a server and refresh the page. This page refresh is not possible in a SPA that's powered by a library such as React because a total page refresh is not the way that a SPA works, as explained earlier in this lesson item. 

Instead, a SPA comes with its own special implementation of anchor tags and links, which only give an illusion of loading different pages to the end user when in fact, they simply load different components into a single element of the real DOM into which the virtual DOM tree gets mounted and updated.

That's why navigation in a single-page app is fundamentally different from its counterpart in a multi-page app. Understanding the concepts outlined in this lesson item will make you a more well-rounded React developer.
