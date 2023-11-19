import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from 'src/app/services/data.service';
import {GeolocationService} from 'src/app/services/geolocation.service';
import {Coffee} from 'src/app/logic/coffee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Coffee[] = [];
  constructor(private dataService: DataService, private geolocationService: GeolocationService,
                private router: Router){}

  ngOnInit(): void {
    this.dataService.getList(list => {
      this.list = list;
    });
  }

  goMap(coffee: Coffee){
    const mapUrl = this.geolocationService.getMapLink(coffee.location);
    location.href = mapUrl;
  }

  share(coffee: Coffee){
    const shareText = `I had this coffee at ${coffee.place} and for me it's a ${coffee.rating} star coffee`;
    if('share' in navigator){
      navigator.share({
        title: coffee.name,
        text: shareText,
        url: window.location.href
      })
      .then(() => console.log("shared"))
      .catch(err => console.error(err))
    }
    else{
      const shareUrl = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      location.href = shareUrl;
    }
  }

  goDetails(coffee: Coffee){
    this.router.navigate(["/coffee",coffee._id]);
  }
}
