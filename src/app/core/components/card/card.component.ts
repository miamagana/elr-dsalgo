import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() img!: string;
  @Input() headerImg!: string;
  @Input() text!: string;
  constructor() {}
}
