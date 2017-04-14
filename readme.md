# Revzilla Search Demo

------------------------------------------------------------

## Algolia Instantsearch.js demo that renders search results as-you-type

- Front end uses ES6/ES2015, React, Webpack, Gulp, BrowserSync

### Step 1 - Clone:
- Clone repo and `cd` into it

### Step 2 - Install:
- Run `npm install`

### Step 3 - Configure:
- For this demo, you will need your Application ID, Admin API Key, and Search API Key [from your account page](https://www.algolia.com/api-keys)
- This demo is currently configured to allow you to set the Application ID and Admin API Key variables in an IIFE which will be run before we execute the import. To do this, create a new file called `env.js` in the `/helpers` directory, add it to your `.gitignore`, then add the following code:
```
(function () {
  process.env.ALGOLIA_APPLICATION_ID='YOUR_APPLICATION_ID';
  process.env.ALGOLIA_ADMIN_API_KEY='YOUR_ADMIN_API_KEY';
})();
```
- We will use the Application ID and Search API Key in the browser to make requests against your indexed data
- You must set these inside `client/components/app.jsx`

### Step 4 - Import:
- Run `npm run import` to push dataset to algolia index

### Step 5 - Start Webpack Dev Server:
- Run `npm run dev` to start dev server on `localhost:8080/`.
- Dev server will recompile / hot reload app.js whenever changes to JS files are saved
- Resulting app.js bundle will be located at `/js/app.js`
- Resulting app.css bundle will be located at `/css/app.css`

### Step 6 - Run:
- Run `npm run gd` in another command-line window to run BrowserSync and open app on localhost:3000 with Hot Reloading

------------------------------------------------------------

## Notes

### Git
- Code is committed and pushed to origin with asset paths in "production" mode

------------------------------------------------------------

## Optimization

### To optimize React performance, adjust webpack config file for correct environment:
- In dev environment, ensure in webpack.config.js that 'devtools' is set to 'source-map', and that plugins for NODE_ENV and UglifyJS are commented out
- In production environment, ensure in webpack.config.js that 'devtools' is set to 'cheap-module-source-map', and that NODE_ENV and UglifyJS plugins are uncommented
