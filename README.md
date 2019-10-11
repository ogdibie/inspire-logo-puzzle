### Basic Design of the App

This project gives a simple solution to the Inspiration puzzle giving the dot images and a tree Image. The app was build using react and the react-dnd (drag and drop) library.

I first started by trying to position the dot in the correction position in the tree. My thoughts was that if I can place a dot in a tree, I would just need to adjust the opacity to show it or not show it respectively. I used css relative and absolute position to place the elements to place each dot in the correct position. I added a click event (listener) to toggle the opacity to show or not show the dot when it was clicked. And then the I got freezed. At first, I tried to implement my own draggable functionality using the event datatransfer but I kept haven't difficulty (Note I didn't commit this part) since I was testing things out. Finally, after so much grinding, I figured how I could use the react-dnd(https://react-dnd.github.io/react-dnd/docs/overview) to save my life. I can chat some here but I don't want to moone about my shortcomings forever.

Using react-dnd, I finished the problem. I restructured the app so that I had four components.

DraggableDot: Dot that can be dragged and placed in a Droppable dot Component. Using it, I could use react list to create a Draggable components for five dot that are used by the app.

DroppableDot: As mentioned above, it accepts Droppable Dot components.
Note: Both the draggable and droppable dot components uses the react-dnd {useDrga} and {useDrop} hooks. more information about theses methods can be found on the react-dnd page

Tree Component: It basically contains the tree and is passed five DroppableDots as children. The styling to position are all in the app.css file.

App: The App component basically manages the app. It handles the state manipulation and pretty much uses the other components to create a functioninig app.

There is still a lot of improvement that I can do in terms of styling but I am okay with it for now. I didn't write test for it which is bad I know but It fufils the requirement of the task.

### Challenges

The main challenge that I had in using react-dnd was figuring out how it worked. I read the documentation at first but I did not quite understand. I decided to watch some videos of other people that leveraged it but I still did not get it. Finally I decided to go over a tutorial of building a chess game with dnd (https://react-dnd.github.io/react-dnd/docs/tutorial) and finally I got. I then restructured my app in a way that I could leverage the react-dnd. That's why I decided to restructure it to use draggable dot and droppable dot to create a way for me to drag and drop to specific regions.

### Alternative Approaches

If I were not using react,I could have done it all using the HTML drag and drop. I could have just had an application with plain javascript, html and css. I suppose I can used something like this:(https://www.w3schools.com/html/html5_draganddrop.asp)

### Running the App

As mentioned earlier, the app uses the react framework.

1)Clone the repo ---git clone repo-name
2)Install the dependencies ---npm install

3. yarn start and that's it....

Let me know what you thing

### React Design Details below

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
