# SWA + React

## Create React App

```console
echo "# snowpack-demo" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/softchris/snowpack-demo.git
git push -u origin main
```

## Add React

```console
npm install react react-dom --save
```

```console
mv index.js index.jsx
```

*index.jsx*

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

*App.jsx*

```javascript
import React from 'react';

function App() {
  return (<div>App</div>)
}

export default App
```

```html
 <div id="root"></div>
```