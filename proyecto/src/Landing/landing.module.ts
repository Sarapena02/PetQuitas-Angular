import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingRoutingModule} from './landing-routing.module';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    BrowserModule,
    LandingRoutingModule
  ],
  providers: [],
  bootstrap: [LandingComponent]
})
export class LandingModule { }
