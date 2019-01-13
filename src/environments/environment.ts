// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: { // Para conexión con los servicios de Firebase
    apiKey: 'AIzaSyCPKAbkHM0XwvkLFoWgeN5Xk8-iD05kHcE',
    authDomain: 'ecommercenu-firestore.firebaseapp.com',
    databaseURL: 'https://ecommercenu-firestore.firebaseio.com',
    projectId: 'ecommercenu-firestore',
    storageBucket: 'ecommercenu-firestore.appspot.com',
    messagingSenderId: '613069111118'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
