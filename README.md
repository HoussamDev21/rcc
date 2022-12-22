# Technical and architectural choices

## Dependencies
- `react-router-dom` for navigation between pages.
- `tailwind` for styling.
- `react-paginate` to render pagination.

## Folders structure
- `components` contains different components used within pages.
- `data` contains useful static data, like color for types and icons for pokemons stats.
- `helpers` contains helpers functions, like (apiFetch; wrapper for fetch function with base url)
- `loaders` includes all loader functions used with routes. for more infos see https://reactrouter.com/en/main/route/loader
- `views` includes layouts, pages, error pages.

**router.js** file includes all routes with their specific views

# Possible improvements
- move hardcoded svg icons to an `assets` folder, and create component that render them automatically by passing name and size as prop.
- responsive enhancements: 
  - slide menu.
  - horizontal scroll for types.
- display more infos in single Pokemon show page.
- maintain scroll position when navigating back.
- use placholder content loader instead of global loader, in other pages.
- filter by types and search in home page (unfortunately the current API doesn't support filters with pagination).
- move hardcoded values like (baseUrl) to .env file.
- tests.
- darkmode.
- offline mode.

# What is already done
- [x] list all pokemons with pagination
- [ ] filter pokemons in home page 
- [x] save pagination state in url query
- [x] single pokemon show page
  - [x] display stat
  - [x] display types. (click on type tag will redirect to types and display other pokemons with having same type).
  - [x] display evolution chain with each pokemon clickable.
- [x] types page
  - [x] list all types.
  - [x] filter pokemons by types (endpoint here doesn't support pagination).    
- [x] display loaders when fetching data.
- [x] display error view when resource not found.
- [x] display an empty block when no data available (in home page).

# Demo
- video link: https://www.loom.com/share/c5a7edbb9a6f4fcb989b6e33d513f229
- demo link: https://houssam-rcc.netlify.app

<br/>
<br/>
<br/>
<br/>
<br/>

---

<br/>
<br/>
<br/>
<br/>
<br/>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
