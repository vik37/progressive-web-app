# Coffe App - Progressive Web APP

# Web APP - (Angular SPA)

## Development server

Run `ng serve` for a dev server or `npm start`. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

For production `ng build --configuration=production`

# Web Server - (Node JS, ExpressJS, nedb)

Run `node index`. Navigate to `http://localhost:3000`. 

**Database:** nedb - File-based embedded data store for node.js.

**Course Title:** Angular: Progressive Web App

**Description:** Developers are realizing that making responsive sites solves part of a user's interaction needs, but more and more users are seeking app-like experiences regardless of what browser or device they use. Progressive web apps (PWAs) fit any form factor, are connectivity independent, and feel like an app because of how the app shell separates its treatment of functions and content.


_________________________________________________________________________________________________________________________________________________________


### Chapter: 1. Progressive Web Apps
***********************************************

###### What is a Progressive Web App?
-----------------------------------------------                   

1. Progressive Web App - App-like experience developed using standard web technologies and progressive enhancement to take advantage of new APIs and abilities in modern browsers and operating systems. 

2. Progressive Enhancement - Design Pattern that emphasizes core webpage content first. This strategy then progressively adds more nuanced and technically rigorous layers of presentation and features on top of the content as the end-users browser or platform allow. 

3. App-Like Experience: Can be installed with icon, works with any network status even offline, Loads immediately and has a fast UX, Works outside of the browser. 

***********************************************


### Chapter: 2. Preparing the Angular App

-----------------------------------------------
##### Running the app
-----------------------------------------------                 

- Audits (Lighthouse) help us to identify how progressive web app are we right now. 

***********************************************

### Chapter: 3. Creating the User Interface

-----------------------------------------------
##### Using Angular Material
-----------------------------------------------

1. **npm packages:** `npm install` `@angular/material@version`, `@angular@sdk@vesion`, `@angular/animations@version`, `hammerjs`. 

2. _hammerjs_
    - Is an open-source library, not from the Angular team, and it's a framework that will let us detect gestures on touch devices. 

3.
     -  Hammer JS is not TS, or ESX and we are using a simple import. 
***********************************************

### Chapter: 4. Connecting to Web Services


##### Connecting mobile actions
-----------------------------------------------

*  To open the Google Map app we need to change the URL of the browser. 

* If we do that, the user is getting out of our Angular app and that's not true on mobile devices. On mobile devices, when the URL is a universal link that means there is a native app listening for that URL, and the native app will appear. location.href - that the current location of the browser and this will change with the map url. 

*  On mobile phones, Safari, Chrome, and Android have a share action directly inside the browser. Progressive Web App will work as a full-screen app in this case we don't have a browser UI, so there is no browser share button and we have to create one. 

* The Web share API, it's not standard in every browser and we need to verify if it's there or not.

________________________________________________________________________________________________________________________________________________________

## IMAGE EXAMPLES

<div>
  <img src="https://user-images.githubusercontent.com/59177404/284050468-130eb30c-b540-45b1-b861-8c225bf54f06.jpg" width="200" height="300">

<img src="https://user-images.githubusercontent.com/59177404/284050468-130eb30c-b540-45b1-b861-8c225bf54f06.jpg" width="200" height="300">

<img src="https://user-images.githubusercontent.com/59177404/284050472-f708762d-bd39-4e32-ba9f-653d52c26296.jpg" width="180" height="300">

<img  src="https://user-images.githubusercontent.com/59177404/285297408-9a710b1c-be26-493e-8c57-83778513cc1b.jpg" width="180" height="300">
</div>
<br />
<hr />
<br />
<div>
  <img src="https://user-images.githubusercontent.com/59177404/285496443-f81ef248-ca4a-4ec5-89f5-e2ebc536a3ee.png" width="180" height="300">

  <img src="https://user-images.githubusercontent.com/59177404/285496445-64607ca2-430f-40b9-a296-55d08cfc6762.png" width="180" height="300">

  <img src="https://user-images.githubusercontent.com/59177404/285496447-98f750e0-081e-419b-abf2-70b2a5341077.png" width="180" height="300">

  <img src="https://user-images.githubusercontent.com/59177404/285496448-244412ef-9e2d-44e6-bcc0-18a5ef825a7c.png" width="180" height="300">

  <img src="https://user-images.githubusercontent.com/59177404/285496450-4d4f4768-0092-4276-a244-ab9b46e0f554.png" width="180" height="300">
<h6>App UI Example</h6>
</div>
