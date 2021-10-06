import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { AppComponent } from './components/main/app.component';
import { TranslocoRootModule } from '../transloco-root.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CourseComponent } from './components/course/course.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    TabsComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
  ],
  imports: [
    CommonModule,
    TranslocoRootModule,
    MatToolbarModule,
    MatTabsModule,
    MatStepperModule,
  ],
})
export class CoreModule {}
