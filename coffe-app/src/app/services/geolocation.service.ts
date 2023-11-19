import { Injectable } from '@angular/core';
import {PlaceLocation} from 'src/app/logic/place-location';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  requestLocation(callback:(position: any) => void){
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log('position: ', position)
        callback(position.coords);
      },
      error =>{
        callback(null);
      }
    )
  }

  getMapLink(location:PlaceLocation | null): string{
    let query = '';
    if(location && location !== null){
      if(location.latitude){
        query = location.latitude+','+location.longitude;
      }
      else{
        query = `${location.address},${location.city}`;
      }
      if(/iPad|iPhone|iPod/.test(navigator.userAgent)){
        return `https://maps.apple.com/?q=${query}`;
      }
      else{
        return `https://maps.google.com/?q=${query}`;
      }
    }
    return query;
  }
}
