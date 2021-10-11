import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSmilesComponent } from './slider-smiles.component';

describe('SliderSmilesComponent', () => {
  let component: SliderSmilesComponent;
  let fixture: ComponentFixture<SliderSmilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderSmilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSmilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
