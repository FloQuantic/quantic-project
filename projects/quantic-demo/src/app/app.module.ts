import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoColorPickersModule } from './components/demo-color-pickers/demo-color-pickers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DemoColorPickersModule,

    // routing after app components to avoid routing error
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
