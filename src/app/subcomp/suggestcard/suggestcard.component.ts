import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-suggestcard',
  templateUrl: './suggestcard.component.html',
  styleUrls: ['./suggestcard.component.css']
})
export class SuggestcardComponent {

  @Input() Entry: any

  constructor() {}

}
