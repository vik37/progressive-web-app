import { Injectable } from '@angular/core';
import {Coffee} from 'src/app/logic/coffee';
import {PlaceLocation} from 'src/app/logic/place-location';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback: (x: any) => void){
    // TODO: Change with the real Web Service
    let list = [
      new Coffee("Double Expresso","Sunny Caffe", new PlaceLocation("123 Market St","San Francisko")),
      new Coffee("Caramel Americano","Starcoffe", new PlaceLocation("Gran Via 34","Madrid"))
    ];
    callback(list);
  }

  save(coffee: Coffee,callback: Function){
    // TODO: Change with the real Web Service
    callback(true);
  }
}
