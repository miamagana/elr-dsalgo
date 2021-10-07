import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './components/main/app.component';
import { TranslocoRootModule } from '../transloco-root.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CourseComponent } from './components/course/course.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    TabsComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    TranslocoRootModule,
    MatToolbarModule,
    MatTabsModule,
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class CoreModule {}
