import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-faces',
  templateUrl: './faces.component.html',
  styleUrls: ['./faces.component.scss']
})
export class FacesComponent {

  @Output() selected = new EventEmitter<number>();
  percentage: number = 70;

  //colors
  blue = '#0099ff';

  CustomerSatisfaction(percentage: number) {

    this.percentage = percentage;

    this.selected.emit(percentage);

  }
}
