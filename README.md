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
***********************************************


### Chapter: 5. Creating an Installable PWA

###### Video: The web app manifest
-----------------------------------------------
               

* Web App Manifest - it's a W3CS pack for the website's metadata. 

* It's a JSON file. It should be served of application forward slash manifest slash JSON. (It will also worked with different content type). 

* We can link in the HTML with that file using the link element with the manifest. - application/manifest+json 

* Linked in the HTML with `<link rel="manifest">` 

* With the Web App Manifest, we can define the app's name, the icons, and icon name, the installed behavior (do we want the full-screen experience, do we want to accept portrait and landscape orientations or just landscape or portrait), we can set the theme, colors and information to recreate the splash screens (those screens that appear when you open the icon. 

*  Web app manifest generators - these are websites where you can fill a couple of form elements and they will create the JSON for you. 

*  Automatic Generators URL's: *tomitmgithub.io/appmanifest*, *brucelawson.github.io/manifest*, *app-manifest.firebaseapp.com*. 

* Compatibility: Chrome for Android, Chrome OS, Safari (Custom spec), Firefox, Opera on Android, Samsung Internet Browser. (Safari is not supported in IOS). 

*  "start_url" - If we don't set this property when we add the icon to the home screen or the launcher, it will use the current url. 

*  "orientation"- it's useful when we are working with an OS fullscreen. 

*  "scope is a relative url to my domain", if we have pwa in a subfolder, for ex., slash web app, we can say that here. 

-----------------------------------------------
###### Video: Inviting the user to install the app
                

*   The difference being open in fullscreen mode or stand-alone mode or open in the browser. On iOS to recognize the mode that the user is using at that point, we need to use, the navigator. standalone which is the boolean that recognizes if we are in the app or in the browser. true: app, false: browser. 

*   Web App Banner - a banner that the OS shows automatically based on some rules. 

*   The browser will promote the installation for us. There are a couple of restrictions: Must use HTTPS, Must have a service worker, Must have a manifest with an icon and background color, Need to have the user engage with your website.

  ***********************************************
### Chapter: 6. Going Offline with Service Workers

###### What is a service worker?
-----------------------------------------------
              

* Service Workers is a new ability for the browsers: JS thread, Detached from any tab or PWA instance, acts as the "owner" of a scope (The scope is the origin or path). - Roughly a domain and a path inside that domain, Has abilities on the scope. 

* Abilities: Act as a network proxy, Can access a cache storage (it's not a local storage or like IndexedDB. Cache storage is storing HTTP responses [HTTP Headers, Cookies, etc.]), Receiving messages in the name of the scope, Execute background code for the scope event if the user is closing **PWA**. 

* Challenges: No access to UI or DOM APIs (we can't manipulate HTML there. "This is a thread running in the background"), No access to synchronous APIs, You can talk to the "client". 

* Any HTML in the scope can register a Service Worker. 

* Once it's registered, It's updated frequently by the browser based on the HTTP cache. If you change that logic, then the browser will update that logic using HTTP headers with a maximum of 24 hours. 

*  Has limited execution time in the background. 

*  Perfect for progressive enhancement. This means if S.W. is not available in 1 particular browser, nothing will happen, because the client is still making those requests if the server were sending the responses. 

* Use cases for S.W. are: Deliver assets from a cache immediately. (ex. *Native app all the files will download on the phone and this will happen the same with a PWA*), Act as a Web Server replacement when it is offline. (It can serve all the files when the device is offline), React to bad connections. 

* The lifetime of the S.W. > after it was installed, if no errors, it's been activated. This means it's there, up and running, but after a while, if that service worker is doing nothing, it's going idle, and the browser will terminate and going back into activation mode when there is another fetch. 

###### Pre-caching app's shell with ngsw
-----------------------------------------------               

1. NGSW - Angular Service Worker. 

2. Only when we are building the project for production will create a Service Worker. In Development mode, the S.W. is off. 


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

  <img src="https://private-user-images.githubusercontent.com/59177404/285661987-bff63b81-2d9f-4446-90d8-aa3b628da2d2.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDExMTkyMDEsIm5iZiI6MTcwMTExODkwMSwicGF0aCI6Ii81OTE3NzQwNC8yODU2NjE5ODctYmZmNjNiODEtMmQ5Zi00NDQ2LTkwZDgtYWEzYjYyOGRhMmQyLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI3VDIxMDE0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdkN2E0MTdjODRhNTE4NmZjYTlkNzQ1OTg3ZjY4OWU2MTkyN2ZkZmI2Y2JiZDM2YjQ1YzU2NWY2OGQyM2UyZGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.JUMUHrTUc8nizfQnK60xbW9T5EsKNskAySTIEZ8unmw" width="180" height="300">


<h6>App UI Example</h6>
</div>
--------------------
<div>
    <h2>Node CLI Lighthouse Test Report</h2>
    <br />
    <img src="https://private-user-images.githubusercontent.com/59177404/286020480-a56a832d-0d9e-4997-b1d3-35f13b63584a.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDExMTk1NDUsIm5iZiI6MTcwMTExOTI0NSwicGF0aCI6Ii81OTE3NzQwNC8yODYwMjA0ODAtYTU2YTgzMmQtMGQ5ZS00OTk3LWIxZDMtMzVmMTNiNjM1ODRhLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI3VDIxMDcyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY0MWM4MjhjYmNmNTgyY2E5NWI3Mzc2NGUzZDg1YTk5OGJmZmNkMTlkNTQzNjU5MjMzNWQ3NGQwNGQ4MDQxODEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0._9fLklelmFgDv33GTkJp-q0eQpUqYqq5Rp1ovHUFajU" alt="Screenshot 2023-11-27 220500" width="900" height="400">
</div>
