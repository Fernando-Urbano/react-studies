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