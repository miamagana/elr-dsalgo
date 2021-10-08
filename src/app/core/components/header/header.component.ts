import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  activeLang!: string;

  constructor(
    private readonly translationService: TranslocoService,
    private readonly matIconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
  ) {
    this.updateActiveLang();
    this.matIconRegistry.addSvgIcon(
      'es',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/es.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'en',
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/en.svg')
    );
  }

  changeLanguage(lang: string): void {
    this.translationService.setActiveLang(lang);
    this.updateActiveLang();
  }

  updateActiveLang(): void {
    this.activeLang = this.translationService.getActiveLang();
  }
}
