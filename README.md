# React Basics
# 1.Introduction to the Course
Websites in React are based in Components. Other frameworks also use components.

Another really important part of React is the State: it is the values of all variables your app is working with at any given point.

## JavaScript Modules, Imports and Exports
Modules can help you to save and access your code in a more structured way, and in this reading, you'll learn about some foundational concepts of working with JavaScript modules.

### Modules
Modules are simply files.

Let's say we have a module "addTwo.js" with a function:

```
function addTwo(a, b) {
    console.log(a + b);
}
```

### Module Exports
You can export a module in JS using a default export or a named export.

#### Default Export
Like this:
```
export default function addTwo(a, b) {
    console.log(a + b);
}
```

Or like this:
```
function addTwo(a, b) {
    console.log(a + b);
}

export default addTwo;
```

#### Named Export
Named exports are a way to export only certain parts of a given JavaScript file.

In contrast with default exports, you can export as many items from any JavaScript file as you want. In other words, there can be only one default export, but as many named exports as you want.
```
export function addTwo(a, b) {
    console.log(a + b);
}

export function addThree(a + b + c) {
    console.log(a + b + c);
}
```

Or:

```
function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a + b + c) {
    console.log(a + b + c);
}

export { addTwo, addThree };
```

### Import Modules
For importing, there are multiple ways of doing as well.

If you want to import the addTwo.js module into the mathOperations.js module.

#### Importing Module that was Exported as Default
```
// addTwo.js module:
function addTwo(a, b) {
    console.log(a + b);
}

export default addTwo;
```

```
import addTwo from "./addTwo";

// the rest of the mathOperations.js code goes here
```

#### Importing Module that was Named Exported
```
import { addTwo } from "./addTwo";

// the rest of the mathOperations.js code goes here
``` 

## NPM: Node Package Manager
npm (Node Package Manager) is the default package manager for Node.js, which is a JavaScript runtime environment. It allows you to easily install, update, and manage JavaScript packages and libraries for your Node.js projects. You can use npm to install packages globally on your system or as project dependencies that are specific to a particular project.

### Starting a Workspace
In order to run and view your React app you will need to open the VS Code built-in terminal, run `npm start`, and then click Open Development server. 

### Settings up a React Project in VS Code (Optional)
Whenever you run the npm command to add other people's code, that code, and all other Node modules that depend on it, get downloaded to your machine.
However, although it's possible do to so, this is not really necessary, at least in the case of the create-react-app Node module.

In other words, you can avoid installing the create-react-app package but still use it.

You can do that by running the following command: `npm init react-app {app-name}`

For instance, we create the first_app_example:

```
PS C:\Users\Dinho Urbano\Desktop\react-studies\first_app_example> npm init react-app firstapp
Need to install the following packages:
  create-react-app@5.0.1
Ok to proceed? (y) y
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in C:\Users\Dinho Urbano\Desktop\react-studies\first_app_example\firstapp.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1421 packages in 3m

227 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...

added 74 packages, and changed 1 package in 17s

236 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1495 packages in 5s

236 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Success! Created firstapp at C:\Users\Dinho Urbano\Desktop\react-studies\first_app_example\firstapp
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd firstapp
  npm start

Happy hacking!
PS C:\Users\Dinho Urbano\Desktop\react-studies\first_app_example>
```

After that use `cd firstapp` and npm start:

This will end up with the following output in the built-in terminal:

```
Compiled successfully!

You can now view firstapp in the browser.

Local:            http://localhost:3000

On Your Network:  http://192.168.1.167:3000


Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

This means that you've successfully:
- Set up your local development environment 
- Run the create-react-app npm package (without installing it!) 
- Built a starter React app on your local machine 
- Served that starter React app in your browser

# 2. React Components and Where They Live
Single page application (SPA): the page does not reload completed. It only reloads and change the required part.

## Component Based Architecture
Building software based on components that are reusable. The idea behind that is that a component can be used without requiring modifications and are independent of one another. Each development, for instance, can work in a different component.

An entire website can be viewed as collection of components.

Many websites without React use components as well. The components are rendered to the DOM.
The DOM is a logical tree structure representing the html document. It uses nodes to represented different parts of the html.

React uses the Virtual DOM to update the Browser DOM only when needed and where needed.

## Functional Components
React provides two types of components

Functional Components
```
function Welcome() {
    return <h1>"Hello!"</h1>
}
```

Class Components
```
class Welcome extends React.Component
{
    render() {
        return <h1>"Hello!"</h1>
    }
}
```

In the default JS script, only one component is rendered and it is the App component. It is generally located inside the index.js file:
```
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js'

ReactDOM.createRoot(
    document.querySelector("#root")
).render(<App />)
```

The sintax to render is always to `<App />`. The root component is used to build all other components.

Than we have the App component which is inside of App.js:

```
function App() {
    return (
        <div className='App'>
            <h1>Hello, React!</h1>
        </div>
    )
}

export default App;
```

### JSX
It is a sintax extent to JavaScript. The content we have right before is JSX: it allows us to write html inside of javascript.

A component must be used to render.

Name the file with the component you want to create. You must create the component name capitalize. React distiguises the html elements from the JavaScript elements with the use of capital letters.

For instance, the Heading.js:

```
function Heading() {
    let title = "This is some heading";
    return (
        <h1>{title}</h1>
    )
}
```

The rendering happens because of Transpiling: interpreting a programming language and translating it to a specific target language.

## Creating a Component
After creating the react app, like the one we create the `first_app_example`.

First, we use the src folder inside of it. There will be already a App.js:

```
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```

Now we changed the file to render the Header:

```
import logo from './logo.svg';
import './App.css';

function Header() {
  return <h1>Hello world!</h1>
}

function App() {
  return <Header />
}

export default App;
```

## Project Structure
React's default folder structure: there are node_modules, public, and src.

- node_modules: a repository for all the modules and packages. It is needed for the app to work.
- public: contains the assets that will be displayed for the user, like logos, icons, etc... For instance, the favicon is used to display a logo next to the browser icon. The robots.txt is used for engine optimization. Finally, manifest.json provides metadata for the device. The index.html is the most important. The index.html is where the components are injected.
- src: contains the files and components. As a React developer you will spend most of your time inside of this folder. App.css is used only for the App component. The index.css is used for all the application. App.test.js, reportWebVitals.js and setupTests.js are files related to the app's performance and testing. The logo.svg is the logo displayed on the browser on the localhost. In the src folder, the most important file is the index.js file: imports everything that will be rendered.

React does not have opinions on how the files are structured, but there are some specifications.

The package-lock.json fie has a list of all dependencies and their specific versions. It helps us rebuild the app in another machine.

### Customizing the Project
Reacts suggests organizing a React project by one of two ways:
- grouping by features: the App css, html and js in one folder, the Header css, html and js in another
- grouping by file type: all css in one folder, all html in another, all js in another, etc...

For instance, we can add inside the src:

```
src/
    components/
        Nav.js
        Promo.js
        Intro1.js
        Intro2.js
        Intro3.js
        Footer.js
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTests.js
```

For instance, the Nav file should be:

```
function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;
```

And the Promo.js:

```
function Promo() {
    return (
        <div className="promo-section">
            <div>
                <h1>Don't miss this deal!</h1>
                </div>
                <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    );
};

export default Promo;
```

the Intro1.js:

```
function Intro1() {
    return (
        <div className="blog-post-intro">
            <h2>I've become a React developer!</h2>
            <div>
                <p>I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro1;
```

The Intro2.js:

```
function Intro2() {
    return (
        <div className="blog-post-intro">
            <h2>Why I love front-end web development</h2>
            <div>
                <p>In this blog post, I'll list 10 reasons why I love to work as a front-end developer.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro2;
```

Finally, the Intro3.js:

```
function Intro3() {
    return (
        <div className="blog-post-intro">
            <h2>What's the best way to style your React apps?</h2>
            <div>
                <p>There are so many options to choose from. Here's a high-level overview of the popular ones.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro3;
```

and the final touch is the Footer.js:

```
function Footer() {
    return (
        <div className="copyright">
            <p>Made with love by Myself</p>
        </div>
    );
};

export default Footer;
```

The `className` is used steady of regular html `class` because class is already a method in JS.

### Importing Components
Components can be used to build powerful UIs.
How do we locate and integrate every component into the App.

Many times we will need to use components that have been defined elsewhere or created by other people.

Modules are stand-alone units of code: we should use the idea of modules to define multiple components. Each component preferabily should be in his own module.

After we reuse components by exporting and later importing.

We use default export when the function name is the same as the module name and we use named exports when they are different:

Default:
```
export default App;
```

Named:
```
export {App}
```

Modular programming: spliting code into different components and complements the component-based architecture of React.

### Importing
Uses the import statement.

To import a component in React we use the name of the component first and than where it is located:
```
import App from './App'
```

# Component Use and Styling
## Principles of Components: Props
When dealing with a function, we often pass parameters that allow us to deal with functions in a better way.
This can be also done in React as well.

For that, we need to revise the JavaScrit Object: it is a variable that can contain many values and groups related data of different types. Each data is a property.

Example:
```
const fruit = {type: "Apple, quantity: 2, color: "green"};
console.log(fruit.type)
```

To pass data from one Component to another, we use the property object, also known as props.

In the index.js:
```
import React from 'react';
import ReactDOM from 'react-dom/client'

import App from './App.js'

ReactDOM.createRoot(document.querySelector('#root')).render(<App title="Welcome" />)
```

In the App.js component:

```
import React from 'react';

export function App(props) {
    return (
        <h1>{props.title}</h1>
    )
}
```

The component sending the props data is known as Parent and the component receiving the data is known as Child.

It is important to mention that this communication is only in one direction: the Child cannot send data back to the Parent using props. Other tools must be used for the last case.

Other limitation: the function should never modify the properties it is given:

An example were we wrongly try to modify it:
```
function Heading(props){
    props.title = "new value"; // Wrong!!
    return (
        <h1>{props.title}</h1>
    )
}
```

A property works in a similar way to the JavaScript object.

## Using Props in Components
The props make the flow of data dynamic and the app more versatile.

## Introduction of JSX
JSX can express what they want the component to render using an almost identical sintax to the html or xlm.
One use of JSX:
```
function Nav(props){
    return (
        <nav className="main-nav">
            <ul>
                <li>{props.first}</li>
                <li>{props.second}</li>
                <li>{props.third}</li>
                <li>{props.fourth}</li>
            </ul>
        </nav>
    );
}
```

The curly braces contain JS, basically.

The html code must be written inside of a top level tag, such as a div tag if there is more than one element being rendered. If you do not want to add an extra element to the DOM, you can use `<>` a fragment steady.

Example with div:
```
function Header() {
    return (
        <div>
            <h1>Welcome!</h1>
            <h2>This is a component</h1>
        </div>
    )
}
```

Example without div:
```
function Header() {
    return (
        <>
            <h1>Welcome!</h1>
            <h2>This is a component</h1>
        </>
    )
}
```

To work with CSS class we use className steady of class.

## props.children
props.children is automatically passed in every component.

You can another component as a prop of a component:

```
<Example children={<Hello />} />
```

And even add props to inside of that prop:
```
<Example children={<Hello message="Hello there" />} />
```

children is the default parameter to pass the other components. For instance, lets say I have a Bag and I want to show an Apple.

```
<Bag children={<Apples color="yellow" number="5" />} />
```

What is happening is:
```
<Bag>
    <Apples color="yellow" number="5" />
</Bag>

<Bag>
    <Pears friend="Peter" />
</Bag>
```

Multiple levels of nested elements is also possible:
```
<Trunk>
    <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
    </Bag>
</Trunk>
```

The children generates that because it is like this:

```
function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag
```

Before the end of this reading, there's another important concept that you need to be aware of: finding the right amount of modularization. What does this mean? Imagine, for example, that you had a number of small bags, and that each bag could only carry a single apple or pear. You'd end up having to wrap each "apple" inside a "bag". That doesn't make much sense. You can think about components making your layouts modular in a similar way. You don't want to have an entire layout contained in a single component, because that would be very difficult to work with. On the flip side, if you made each HTML element in your layout a separate component, that would make it very hard to work with, although such layout would be modular. So it's all about moderation.


## Styling JSX Elements
You can add CSS styling by referencing it from an outside module:
```
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}
```
```
.promo-section {
    font-weight: bold;
    line-height: 20px;
}
```

Or with in-line styling which uses json format to reference:
```
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}

export default Promo;
```

In that the separation that would be done with "-" is steady done with camelCase.

## Practical Styling
Another example of in-line:
```
function Sidebar(){
    const asideStyle = {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: 10px,
    }

    return (
        <aside style={asideStyle} className="sidebar-component">
    )
}
```

`style={asideStyle}` is a JSX expresson.

## JSX Syntax and the Arrow Function
Up to this point, you’ve likely only observed ES5 function declarations used to define components in React. However, this is not the only way to do it.

We can work with the function using already known sintax:

```
function Nav(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```

Or:
```
const Nav = function(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```

We can also use components as Arrow Functions:
```
const Nav = (props) => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```

Arrow functions are a core feature of the ES6 version of JavaScript.

One of the main benefits of using arrow functions is its shorter syntax. So, the way to think about this is the following:

The arrow itself can be thought of as the replacement for the function keyword. 

The parameters that this arrow function accepts are listed before the arrow itself. 

Another way is to also write it like this:
```
const Nav = props => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```

In all other cases, when you write arrow functions, for any number of parameters other than a single parameter, using parentheses around parameters is compulsory.

Another interesting thing about arrow functions is the implicit return. However, it only works if it's on the same line of code as the arrow itself. In other words, the implicit return works if your entire component is a single line of code.

```
const Nav = () => <ul><li>Home</li></ul>
```

## forEach
In React, just like in plain JavaScript, arrow functions can be used in many different situations. One such situation is using it with, for example, the forEach() built-in array method.
```
[10, 20, 30].forEach(item => item * 10)
```

You could also write this code in ES5 syntax:

```
[10, 20, 30].forEach(function(item) {
        return item * 10
    }
)
```

The arrow function has a single parameter, so you do not need to add parentheses around the item parameter (to the left of the arrow). Furthermore, since the arrow function fits on one line of code, you don’t need to use curly braces around the function body, or the return keyword; it's implicit.

## Embedded JSX Expressions
Allows Javascript values to be inserted into HTML of React elements. This can also be done with functions.

## Ternary Operator
It is a one line if-else:
```
let name = 'Bob';
name == 'Bob' ? console.log('Hello, Bob') : console.log('Hello, Friend');
```

They can be used inside of a JSX expression:
```
function Example() {
    return (
        <div className="heading">
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
        </div>
    );
};
```

Basically it does:
```
comparison ? true : false
```

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

# React Basics
# 1. Linking and Routing
## Basic Types of Navigation
In the early days of the web, there was no default way to develop.

What is currently accepted?
The most common are:
- horizontal navigation bar (nav-bar);
- vertical navigation menu (side-bar);
- menu hiding behind a button (burger-menu);
- footer menu;

With React, everything is controlled within the same page. For that, we must create an illusion of changing pages.

For that, we use routes, which are added by inserting this row in index.html:

```
import {BrowserRouter}
```

## The navbar
With React Router we are able to do the Routing in React.

For that, we need to install this library:
```
npm i react-router-dom@6
```

Now I will be able to make my broken links work!

I do that by importing the BrowserRouter from react-router-dom.

After that we wrap the App in a BrowserRouter and change the way we specify the routers. We did that in app_ex4.

The index.js:
```
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

The App.js:
```
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className='nav-item'>Homepage</Link>
        <Link to="/about-me" className='nav-item'>About Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;

```


## Conditional Renedering
Let's go with an example:
Let's say we have the ToggleButton.js, which changes the state of the activeSideBar from true to false and from false to true. Finally, we have a side bar that is or not shown based on the value of the activeSideBar.

```
function CurrentMessage() {
    const day = new Date().getDay();
    if (day >= 1 && day <= 5) {
        return <Workdays />
    }
    return <Weekends />
}
```

```
function CurrentMessage({day}) {
    const weekday = (day >= 1 && day <= 5);
    const weekend = (day >= 6 && day <= 7);
    let message;

    if (weekday) {
        message = <Workdays />
    } else if (weekend) {
        message = <Weekends />
    } else {
        message = <ErrorComponent />
    }

    return (
        <div>
            {message}
        </div>
    )
}
```

# 2. Assets
Assets are files that is submited by the app at the run time. Among those:
- images
- stylesheet
- fonts

A common way to have the assets folder easily available is to add the assets folder inside of the source folder.

You should only keep the assets that the app does not require in the public folder. Every other asset should be in the assets folder.

To add an asset, we first need to import it:
```
import cat from './assets/images/cat.jpg'
```

After that, we use the image tag:
```
function showAnimal() {
    return (
        <div>
            <img src={cat} alt="A picture of a cat" />
        </div>
    )
}
```

You can also identify the asset in the folder:
```
function showAnimal() {
    return (
        <div>
            <img src={require('./assets/images/cat.jpg')} alt="A picture of a cat" />
        </div>
    )
}
```

## Bundling Assets
Bundling is a process that takes all the imported files in an app and joins them into a single file, referred to as a bundle. Several tools can perform this bundling. Since, in this course, you have used the create-react-app to build various React apps, you will focus on webpack. This is because webpack is the built-in tool for the create-react-app.

Practically, this means that it will take various kinds of files, such as SVG and image files, CSS and SCSS files, JavaScript files, and TypeScript files, and it will bundle them together so that a browser can understand that bundle and work with it.

## Audio and Video Assets
It works in the same way as declaring an image.

You probably want to pass the video as an unique component.

NPM packages are used to render videos.

react-player package is really good, for instance. We start by installing it:

```
npm install react-player
```

Than, we import the package:
```
import ReactPlayer from "react-player";
```

Specifically from Youtube:
```
import ReactPlayer from "react-player/youtube";
```

An example using youtube:
```
import React from "react";
import ReactPlayer from "react-player/youtube";

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
  );
};

export default App;
```

In the ReactPlayer, you can specify parameters:
```
import React from "react";
import ReactPlayer from "react-player/youtube";

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
      playing={false}
      volumne={0.5}
      mute={true}
    />
  );
};

export default App;
```