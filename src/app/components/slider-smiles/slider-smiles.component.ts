import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slider-smiles',
  templateUrl: './slider-smiles.component.html',
  styleUrls: ['./slider-smiles.component.scss']
})
export class SliderSmilesComponent {

  @Output() result = new EventEmitter<number>();
  value: number = 70;

  //colors
  red = 'red';
  orange = 'coral';
  yellow = 'orange';
  greenYellow = 'lime';
  green = 'limeGreen';

  width: string = String(this.value) + '%';

  backgroundColor: string = this.greenYellow;

  satisfaction(event: any) {

    switch (Number(event)) {
      case 10:
        this.backgroundColor = this.red;
        break;
      case 30:
        this.backgroundColor = this.orange;
        break;
      case 50:
        this.backgroundColor = this.yellow;
        break;
      case 70:
        this.backgroundColor = this.greenYellow;
        break;
      case 100:
        this.backgroundColor = this.green;
        break;
    }

    this.value = Number(event);

    this.width = String(event) +'%';

  }

  returnValue() {

    this.result.emit(this.value);

    console.log(this.value);

  }



}
