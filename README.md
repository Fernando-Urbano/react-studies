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