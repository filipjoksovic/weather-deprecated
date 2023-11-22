import { Component, Input } from '@angular/core';
import { ValueUnitPair } from '../../../models/weather-report.model';

@Component({
  selector: 'app-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.scss'],
})
export class DetailsPanelComponent {
  @Input()
  detailName!: string;
  @Input()
  detailValue!: ValueUnitPair<number | string>;
  @Input()
  iconUrl!: string;
}
