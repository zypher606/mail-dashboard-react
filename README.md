## Project Demo
[https://xenodochial-turing-e82df7.netlify.app/](https://xenodochial-turing-e82df7.netlify.app/)

## Description

1. Crafted with React and Material UI
2. CRUD operations on HTML5 Local Storage for data management
4. Test coverage for reusable components
5. UI Responsive targeted platforms: a) Desktops & Laptops b) iPads c) iPhones

## Functionalities

1. A login page with a simple form where the user can enter an email and password as credential. If the credential matches the mock data, the user gets redirected to the Dashboard Page with a list of Emails on his Inbox(Mock Data)
2. Compose mail should open a pop up that allows you to write a simple mail with To and CC fields, subject and a body 
3. Upon submission, the email should be stored in local storage and should appear in the list of Sent Emails
4. If we logout and login with the credentials(email & password) of the user to whom the email was sent, he should be able to see the new email at top of the list on his Inbox
5. The user can click on an email to read it and the numbers on unread emails(Mail icon at top right corner of the header) should get updated based on the unread emails on Inbox
6. The user should be able to select and delete the emails from his Inbox  
The menu bar on left can exist in a collapsed or an expanded state as demonstrated in the screenshot
7. Rest of the screen can remain non-functional and static as long as look and feel can match

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
