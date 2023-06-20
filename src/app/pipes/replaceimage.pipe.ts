import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceimage'
})
export class ReplaceimagePipe implements PipeTransform {

  transform(value: string) {

    if (value == "N/A") {
      return "../../assets/nomovieimage.jpg"
    }
    else {
      return value
    }
    
  }

}
