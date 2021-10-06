import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabHeaderPosition } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  headerPosition$: Observable<MatTabHeaderPosition>;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.headerPosition$ = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'above' : 'below')));
  }
}
