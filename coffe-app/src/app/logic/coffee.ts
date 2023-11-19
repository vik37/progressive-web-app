import {TastingRating} from 'src/app/logic/tasting-rating';
import {PlaceLocation} from 'src/app/logic/place-location';

export class Coffee{
  _id:string | undefined;
  type: string = '';
  rating: number = 0;
  notes: string = '';
  tastingRating: TastingRating | null;

  constructor(public name: string = "", public place: string = "",
              public location: PlaceLocation | null = null){
                this.location = new PlaceLocation();
                this.tastingRating = new TastingRating();
              }
}
