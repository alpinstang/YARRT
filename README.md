# YetAnotherReactReduxTemplate _now with more Firebase_

A boilerplate/template for starting new React applications with Redux state management and Firebase user authentication. Simple enough to replace Firebase authentication with your own provider if you choose. Ready to deploy to gh-pages.

<img src="https://live.staticflickr.com/65535/50833536347_dff230d783_b.jpg" width="400px" />

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn deploy`

Runs the build script, then deploys that build to your gh-pages branch in your repository.

`yarn predeploy` should not be run on its own (although it won't hurt anything), because any script with the 'pre' prefix will execute before the script of the same name without a prefix.

_Example `deploy`_

```
yarn deploy
// executes yarn build as defined in predeploy
// executes gh-pages -d build as defined in deploy
```

Credits:

- Bootstrapped with create-react-app
- Images provided by [placekitten](https://placekitten.com/)
- Text provided by [Cat Ipsum](http://www.catipsum.com/)
