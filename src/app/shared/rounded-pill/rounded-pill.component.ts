import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rounded-pill',
  standalone: true,
  imports: [CommonModule, NgbTooltip],
  templateUrl: './rounded-pill.component.html',
  styleUrls: ['./rounded-pill.component.scss'],
})
export class RoundedPillComponent {
  @Input()
  iconSrc!: string;
  @Input()
  tooltipText?: string;
}
