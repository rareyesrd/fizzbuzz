import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolutionComponent } from './solution/solution.component';
import { SolutionOuputComponent } from './solution/solution-ouput/solution-ouput.component';


@NgModule({
  declarations: [
    AppComponent,
    SolutionComponent,
    SolutionOuputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
