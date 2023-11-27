import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {SwUpdate, SwPush} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'coffe-app';

  constructor(private snackBar: MatSnackBar, private swUpdate: SwUpdate,
              private swPush: SwPush){}

  ngOnInit(): void {
    // Checking SW update Status
    this.swUpdate.versionUpdates.subscribe(update =>{
      if(update.type === "VERSION_READY"){
        const sb = this.snackBar.open("There is an update available","Install now",{duration:4000});
        sb.onAction().subscribe(event =>{
          this.swUpdate.activateUpdate().then(() =>{
            console.log("The app was updated");
            location.reload();
          })
        })
      }
    });

    this.swUpdate.checkForUpdate();
    this.updateNetworkStatusUI();
    window.addEventListener("online",this.updateNetworkStatusUI);
    window.addEventListener("offline",this.updateNetworkStatusUI);

    if((navigator as any).standalone === false){
      // This is an iOS device and we are in the browser.
      this.snackBar.open("You can add this PWA to the Home Screen","",
                        {duration: 3000});
    }
    if((navigator as any).standalone === undefined){
      // It's not an iOS.
      if(window.matchMedia("display-mode: browser").matches){
        // We are in the browser
        window.addEventListener("beforeinstallprompt",event =>{
          event.preventDefault();
          const sb = this.snackBar.open("Do you want to install this app?","install",
                                        {duration: 5000});
          sb.onAction().subscribe(()=>{
            (event as any).prompt();
            (event as any).useChoice.then((result: any) =>{
              if(result.outcome === "dismissed"){
                // TODO: Track no installation
              }
              else{
                // TODO: It was installed
              }
            })
          })
          return false;
        })
      }
    }
  }

  updateNetworkStatusUI(){
    if(navigator.onLine){
      // you might be online
      (document.querySelector("body")! as any).style = "";
    }
    else{
      // 100% sure you are offline
      (document.querySelector("body")! as any).style = "filter: grayscale(1)"
    }
  }

  subscribeToPush() {
    Notification.requestPermission(permission => {
      if (permission === "granted") {
        this.swPush.requestSubscription({
          serverPublicKey: 'replace-with-your-public-key'
        })
        .then(subscription => {
          // Only log the subscription object, don't send it to the server immediately
          console.log('Notification subscription object:', subscription);
        });
      }
    });
  }

}
