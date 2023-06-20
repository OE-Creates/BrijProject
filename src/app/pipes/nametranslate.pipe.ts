import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nametranslate'
})
export class NametranslatePipe implements PipeTransform {

  splitString: string[] = []
  newValue: string = ""

  transform(value: string) {
    this.splitString =  value.split(" ")
    for (var i = 0; i < this.splitString.length; i++) {
      if (this.splitString[i] == "Fast") {
        this.splitString[i] = "Haraka"
      }
      else if (this.splitString[i] == "fast") {
        this.splitString[i] = "haraka"
      }
      else if (this.splitString[i] == "Family") {
        this.splitString[i] = "Familia"
      }
      else if (this.splitString[i] == "family") {
        this.splitString[i] = "familia"
      }
      else if (this.splitString[i] == "Rings") {
        this.splitString[i] = "Pete"
      }
      else if (this.splitString[i] == "rings") {
        this.splitString[i] = "pete"
      }
    }

    for (var i = 0; i < this.splitString.length; i++) {
      this.newValue = this.newValue.concat(this.splitString[i], " ")
    }

    this.newValue.trimEnd()

    return this.newValue;
  }

}
