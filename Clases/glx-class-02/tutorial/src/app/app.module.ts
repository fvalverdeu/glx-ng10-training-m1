import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { Session3Component } from './sessions/session3/session3.component';
import { DirectiveAttributeComponent } from './sessions/session3/directive-attribute/directive-attribute.component';
import { DirectiveEstructureComponent } from './sessions/session3/directive-estructure/directive-estructure.component';
import { LifeCycleHooksComponent } from './sessions/session4/life-cycle-hooks/life-cycle-hooks.component';
import { CounterComponent } from './sessions/session4/counter/counter.component';
import { Session4Component } from './sessions/session4/session4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    Session3Component,
    DirectiveAttributeComponent,
    DirectiveEstructureComponent,
    LifeCycleHooksComponent,
    CounterComponent,
    Session4Component,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
