# Build an inventory management app with  Azure Static Web Apps with + React, part 1

## Scenario

You are looking at prototyping a new inventory management system. There are two things you want to test out:

- React, you want that client like experience, you hear a lot of companies are using React.
- Azure Static Web Apps, there's this service on Azure that not only lets you store static files but you can add a backend and auth to it.

Time to evaluate.

## Create a React App

To build your frontend app, you want to get up and running fast. You start reading up and realize there's a lot of ways to get started:

- **Just CDN**, this works when you just want to try it out. You want something you can keep building on.
- **Create React App**, that's definitely a good choice, also mentioned in official React docs.
- **Vite**. <https://vitejs.dev/>, this looks really promising
- **Webpack**, also a good choice, many good guides out there for building a React app, for example, <https://levelup.gitconnected.com/how-to-setup-a-react-application-with-webpack-f781b5c4a4ab>
- **Snowpack**, you've heard a colleague swear by this one, so you decide to check it out, <https://www.snowpack.dev/tutorials/react>

You look at Snowpack and it looks like very few commands to get started, and you decide to give it a try.

## Generate project using Snowpack

You go to <https://www.snowpack.dev/tutorials/react> 

1. Run the below command to generate a Snowpack project:

    ```console
    npx create-snowpack-app react-snowpack --template @snowpack/app-template-minimal
    ```

    You get a set of files, at this point, you have a Snowpack project but not really a React app.

    Lets see that it works though:

1. Run the below commands to start your Snowpack generated app:

   ```console
   cd react-snowpack
   npm run start
   ```

   In a browser, at <http://localhost:8080/>, you should see "Welcome to Snowpack".

### Add React

Let's add the needed dependencies next to add support for React:

1. Run `npm install` to install React:

    ```console
    npm install react react-dom --save
    ```

1. Run `mv` to rename your *index.js* to *index.jsx*:

    ```console
    mv index.js index.jsx
    ```

    Now, you have a file in which you will bootstrap your React app.

1. In *index.jsx*, add the below code:

    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    
    import {StrictMode} from 'react';
    import {createRoot} from 'react-dom/client';
    import App from './App'
    
    const rootElement = document.getElementById('root');
    const root = createRoot(rootElement);
    
    root.render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
    ```

1. Create *App.jsx* and give it the following code:

    ```javascript
    import React from 'react';
    
    function App() {
      return (<div>App</div>)
    }
    
    export default App
    ```

1. Modify *index.html* and give it the following element:

    ```html
     <div id="root"></div>
    ```

    At this point, you have a working React app. Try running it locally with `npm start`.

## Plan your deployment

In order to use Azure Static Web App, we need to first: 

- Create a GitHub repo.
- Create a local repo and sync with GitHub repo. 
- Add a commit.

### Create repo

Go to GitHub and create a repo, name it anything you want, in below example, we've named **snowpack-demo**.

Run the below commands in your console:

  ```console
  echo "# snowpack-demo" >> README.md
  git init
  git add.
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/softchris/snowpack-demo.git
  git push -u origin main
  ```

  Your app is now pushed to your GitHub repo. Next, let's deploy to Azure.

## SWA

> Ensure you have downloaded the **Azure Static Web Apps** extension for Visual Studio code, and also ensure you have an Azure account.

1. Select Azure logo in the left menu in Visual Studio Code.
1. Select the **+** icon in Static Web Apps section.
1. Follow the series of steps
   1. Select subscription
   1. Give name of app
   1. Location of app / (if you have your app in sub directory app, you need to type /app)
   1. Select template, **React**. 
   1. Specify folder where your app is built **build**

   Your app is now deploying, you can now either click the message popup that says "open actions in GitHub" or go to your repo on GitHub and the actions tab. 1-2 min later, or less, you will be shown a deploy URL in Visual Studio Code, select it.

Congrats, you deployed your app to Azure. Here's my app:

> <https://happy-wave-036ec970f.1.azurestaticapps.net/>

## What's next

You have just started, this was part 1. In the next part, we will be improving our app by giving it a better UI and support routing. Throughout all this, Azure Static Web App will support us.
