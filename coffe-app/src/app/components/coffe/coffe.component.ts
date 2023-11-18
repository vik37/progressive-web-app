import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Coffee} from 'src/app/logic/coffee';
import {TastingRating} from 'src/app/logic/tasting-rating';
import {GeolocationService} from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-coffe',
  templateUrl: './coffe.component.html',
  styleUrls: ['./coffe.component.css']
})
export class CoffeComponent implements OnInit, OnDestroy{
  routingSubscription: any;
  coffee!: Coffee;
  types: string[] = ["Espresso","Ristretto","Americano","Cappucino","Frappe"];
  constructor(private route: ActivatedRoute, private geolocationService: GeolocationService){}

  ngOnInit(): void {
    this.coffee = new Coffee();
    this,this.routingSubscription = this.route.params.subscribe(params => {
      console.log(params["id"]);
    });

    this.geolocationService.requestLocation(location =>{
      console.log(location)
      if(location){
        this.coffee.location!.latitude = location.latitude;
        this.coffee.location!.longitude = location.longitude;
      }
    })
  };

  testingRatingChanged(checked: boolean){
    if(checked){
      this.coffee.tastingRating = new TastingRating()
    }
    else{
      this.coffee.tastingRating = null;
    }
  }

  cancel(){}

  save(){}

  ngOnDestroy(): void {
    this.routingSubscription.unsubscribe();
  }
}
