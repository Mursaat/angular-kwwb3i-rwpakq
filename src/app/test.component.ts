import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Specimen {
  technicalId: number;
}

@Component({
  selector: 'test',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestComponent {
  @HostBinding('class.horus-inoculation')
  public hasBoundClass = true;

  public specimen$: Observable<Specimen | null>;
  public inputSpecimenIdValue = '';

  public constructor() {
    this.specimen$ = of(null);
  }

  public goBackToMenu() {}

  public searchSpecimen() {}
}
