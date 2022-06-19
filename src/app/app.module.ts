import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WatchComponent } from './watch/components/watch/watch.component';
import { HeaderComponent } from './watch/components/header/header.component';
import { HomePageComponent } from './watch/pages/home-page/home-page.component';
import { DigitalClockComponent } from './watch/components/digital-clock/digital-clock.component';
import { XsegundoService } from './watch/services/xseconds.service';

@NgModule({
  declarations: [
    AppComponent,
    WatchComponent,
    HeaderComponent,
    HomePageComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [XsegundoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
