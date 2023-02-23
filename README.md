# React Native Expo - Client Relationship Management (CRM) - FrontEnd

React Native CRM with [Expo framework](https://expo.dev/).

<img src="https://raquelventero.com/images/react-native-crm-sc/sc_01.jpg" width="50">

## Run project in development mode

- Download the project.

- Install dependencies: `npm install` or `yarn install`.

### Options for running the app

- Run server: `npm start` or `yarn start`. Then use app **Expo Go** on your iOS or Android mobile and scan QR code on the terminal. **Expo Go** can be downloaded for free from the App Store (iOS) and from Google Play (Android).

- Run on Android: `npm run android` or `yarn android`. _For running on an Android simulator, install [Android Studio](https://developer.android.com/studio)._

- Run on iOS: `npm run ios` or `yarn ios`. _For running on an iOS simulator, install [XCode](https://www.freecodecamp.org/news/how-to-download-and-install-xcode/)_

- Run on both Android & iOS: `npm run mobile` or `yarn mobile`.

## Libraries

In this app, I am using the following libraries:

- [React Native](https://www.npmjs.com/package/react-native). This library is used to create an app that can run on both iOS and Android devices. It allows us to build native apps using JavaScript and React.
- [Expo](https://expo.dev/). This framework provides tools for testing and deploying the app in a web environment. It simplifies the development process by allowing us to build and test our app quickly and easily.
- [Async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage). This library provides a way to store data in the device's local storage. It is used to save user data locally, which can be retrieved and used in the app even when the user is offline.
- [Redux Toolkit](https://www.npmjs.com/package/@reduxjs/toolkit). This library, evolution of Redux, is used for managing the state of the app. It provides a centralized store for storing the state, which can be accessed from any component in the app. This helps to maintain a single source of truth for the app's data, making it easier to manage and update.
- [Redux Saga](https://www.npmjs.com/package/redux-saga). This library is used for managing asynchronous functions, especially those that fetch data from a database and store it in the app. It allows us to manage complex workflows and handle errors more easily. By using sagas, we can keep our code organized and easy to maintain.
- [react-navigation/stack](https://www.npmjs.com/package/@react-navigation/stack). For allowing a navigation system between screens.

## Database

Since this is a front-end only app, there is no backend. In this app, the fetch calls are simulated and the data is stored locally on the device. This means that the app does not make any actual network requests.
The fetch calls in this app are managed using sagas files, which make it easy to handle asynchronous operations. To use a real fetch API instead of the simulated data, it's easy to modify the sagas files to make network requests.
An initial customers database is included in the app:

customers: [
&ensp;{
&ensp;&ensp;id: 'f8c1b5fb-cc3e-4cb8-b562-aa0b8cdcec7b',
&ensp;&ensp;firstName: 'Adam',
&ensp;&ensp;lastName: 'Sandler',
&ensp;&ensp;active: true,
&ensp;&ensp;region: 'South West'
&ensp;},
&ensp;{
&ensp;&ensp;id: 'da7e6aac-58d8-473f-8f7f-841a709974f8',
&ensp;&ensp;firstName: 'John',
&ensp;&ensp;lastName: 'Cusack',
&ensp;&ensp;active: false,
&ensp;&ensp;region: 'North West'
&ensp;}
]

## Features

- All the data is stored in the device and it's persistent even with the app closed.
- There is a reset button on the Welcome screen to clear all the data introduced by the user and reset with only the initial data.
- The user can: read regions, read clients, and read the data of the clients.
- The user can modify the clients, and add new ones, with the same form component.
- The user can choose a time (hour: minutes) to create a push notification, which will be repeated every day at the same time.
- The user can delete the notification.

## Todos

- Push notification: choose a different client for every day.
