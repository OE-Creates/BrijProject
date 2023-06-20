import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterimage'
})
export class FilterimagePipe implements PipeTransform {

  newValue: any

  transform(value: any) {

    if (value) {
      this.newValue = value
    }
    else {
      this.newValue = {
        id: "nullID01",
        width: 0,
        height: 0,
        url: "../../assets/nomovieimage.jpg",
        caption: null,
        __typename: "Image"
      }
    }
    
    return this.newValue;

  }

}
