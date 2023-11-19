import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Coffee} from 'src/app/logic/coffee';
import {TastingRating} from 'src/app/logic/tasting-rating';
import {GeolocationService} from 'src/app/services/geolocation.service';
import {DataService} from 'src/app/services/data.service';

@Component({
  selector: 'app-coffe',
  templateUrl: './coffe.component.html',
  styleUrls: ['./coffe.component.css']
})
export class CoffeComponent implements OnInit, OnDestroy{
  routingSubscription: any;
  coffee!: Coffee;
  testingEnable: boolean = false;
  types: string[] = ["Espresso","Ristretto","Americano","Cappucino","Frappe"];

  constructor(private activeRoute: ActivatedRoute, private router: Router,
                private geolocationService: GeolocationService,
                private dataService: DataService){}

  ngOnInit(): void {
    this.coffee = new Coffee();
    this.testingRatingChanged(false);
    this,this.routingSubscription = this.activeRoute.params.subscribe(params => {
      if(params["id"]){
        this.dataService.getCoffee(params["id"],response =>{
          this.coffee = response;
          if(this.coffee.tastingRating){
            this.testingEnable = true;
          }
        })
      }
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
    console.log('test checked: ',checked);
    if(checked){
      this.coffee.tastingRating = new TastingRating()
    }
    else{
      this.coffee.tastingRating = null;
    }
  }

  cancel(){
    this.router.navigate(["/"]);
  }

  save(){
    this.dataService.save(this.coffee,result =>{
      if(result){
        this.router.navigate(["/"]);
      }
    })
  }

  ngOnDestroy(): void {
    this.routingSubscription.unsubscribe();
  }
}
