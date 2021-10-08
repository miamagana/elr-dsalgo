import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './core/components/main/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

@NgModule({
  imports: [
    BrowserModule,
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyCpU6fpulUHr-67posALuiyGW2_H03hSyU',
        authDomain: 'dsalgo-elr.firebaseapp.com',
        projectId: 'dsalgo-elr',
        storageBucket: 'dsalgo-elr.appspot.com',
        messagingSenderId: '600915565499',
        appId: '1:600915565499:web:ca290d8217a31179de829e',
        measurementId: 'G-9GT0H22NGW',
      })
    ),
    CoreModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
