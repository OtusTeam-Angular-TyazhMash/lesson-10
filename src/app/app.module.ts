import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleDirective } from './shared/directive/example.directive';
import { DynamicExampleComponent } from './components/dynamic-example/dynamic-example.component';
import {CarouselDirective} from "./shared/directive/carrousel.directive";
import { TrigonometryDirective } from './shared/directive/trigonometry.directive';
import { MathDirective } from './shared/directive/math.directive';


@NgModule({
  declarations: [
    AppComponent,
    ExampleDirective,
    DynamicExampleComponent,
    CarouselDirective,
    TrigonometryDirective,
    MathDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
