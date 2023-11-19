import { Injectable } from '@angular/core';
import {Coffee} from 'src/app/logic/coffee';
import {PlaceLocation} from 'src/app/logic/place-location';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public endpoint: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getList(callback: (x: any) => void){
    /*
    let list = [
      new Coffee("Double Expresso","Sunny Caffe", new PlaceLocation("123 Market St","San Francisko")),
      new Coffee("Caramel Americano","Starcoffe", new PlaceLocation("Gran Via 34","Madrid"))
    ];
    callback(list);
    */
    this.http.get(`${this.endpoint}/coffees`)
                .subscribe(response => {
                  console.log('response: ', response);
                  callback(response);
                });
  }

  getCoffee(coffeeId: string, callback: (x: any) => void){
    this.http.get(`${this.endpoint}/coffees/${coffeeId}`)
                .subscribe(response => {
                  callback(response);
                });
  }

  save(coffee: Coffee, callback: (x: any) => void){
    if(coffee._id){
      console.log('execute put');
      this.http.put(`${this.endpoint}/coffees/${coffee._id}`,coffee)
                .subscribe(response =>{
                    callback(true);
                });
    }
    else{
      this.http.post(`${this.endpoint}/coffees`,coffee)
                  .subscribe(response => {
                    callback(true);
                  });
    }
  }
}
