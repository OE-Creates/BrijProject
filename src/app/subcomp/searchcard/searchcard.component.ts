import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searchcard',
  templateUrl: './searchcard.component.html',
  styleUrls: ['./searchcard.component.css']
})
export class SearchcardComponent {
  
  @Input() Search: any

  constructor() {}
}
