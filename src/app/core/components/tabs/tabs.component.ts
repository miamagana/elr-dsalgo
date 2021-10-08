import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MatTabHeaderPosition } from '@angular/material/tabs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  headerPosition$: Observable<MatTabHeaderPosition>;
  activeIndex!: number;
  urls = ['/home', '/motivation', '/course'];

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly router: Router
  ) {
    this.headerPosition$ = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'above' : 'below')));
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const { url } = event;
        this.activeIndex = this.urls.findIndex((el) => el === url);
      }
    });
  }

  navigate(index: number): void {
    this.activeIndex = index;
    this.router.navigate([this.urls[index]]);
  }
}
