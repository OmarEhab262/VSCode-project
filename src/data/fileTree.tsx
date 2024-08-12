import { IFile } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export const fileTree: IFile = {
  id: uuidv4(),
  name: "src",
  isFolder: true,
  children: [
    {
      id: uuidv4(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: ".pnpm",
          isFolder: true,
          children: [
            // Example of a nested module
            {
              id: uuidv4(),
              name: "react@18.2.0",
              isFolder: true,
              children: [
                {
                  id: uuidv4(),
                  name: "index.js",
                  isFolder: false,
                  content: "// React library code",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "favicon.ico",
          isFolder: false,
          content: "<!-- Favicon content here -->",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "assets",
      isFolder: true,
      children: [
        // Example asset files
        {
          id: uuidv4(),
          name: "logo.svg",
          isFolder: false,
          content: "<svg>...</svg>", // Example SVG content
        },
      ],
    },
    {
      id: uuidv4(),
      name: "components",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "App.tsx",
          isFolder: false,
          content: `
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Hello Vite</h1>
    </div>
  );
};

export default App;
`,
        },
        {
          id: uuidv4(),
          name: "HelloWorld.tsx",
          isFolder: false,
          content: `
import React from 'react';

const HelloWorld = () => {
  return <p>Hello, World!</p>;
};

export default HelloWorld;
`,
        },
      ],
    },
    {
      id: uuidv4(),
      name: "styles",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "App.css",
          isFolder: false,
          content: `
.App {
  text-align: center;
  font-family: Arial, sans-serif;
}
`,
        },
      ],
    },
    {
      id: uuidv4(),
      name: "index.tsx",
      isFolder: false,
      content: `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,
    },
    {
      id: uuidv4(),
      name: "main.ts",
      isFolder: false,
      content: `
import './style.css';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
`,
    },
    {
      id: uuidv4(),
      name: "index.html",
      isFolder: false,
      content: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vite App</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/index.tsx"></script>
</body>
</html>
`,
    },

    {
      id: uuidv4(),
      name: "data.json",
      isFolder: false,
      content: `
{
  "name": "example",
  "description": "An example JSON file",
  "version": "1.0.0"
}
`,
    },
  ],
};
