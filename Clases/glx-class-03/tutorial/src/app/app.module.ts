import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './home/components/card/card.component';
import { HomeComponent } from './home/home.component';
import { Session3Component } from './sessions/session3/session3.component';
import { DirectiveAttributeComponent } from './sessions/session3/components/directive-attribute/directive-attribute.component';
import { DirectiveEstructureComponent } from './sessions/session3/components/directive-estructure/directive-estructure.component';
import { LifeCycleHooksComponent } from './sessions/session4/components/life-cycle-hooks/life-cycle-hooks.component';
import { CounterComponent } from './sessions/session4/components/counter/counter.component';
import { Session4Component } from './sessions/session4/session4.component';
import { Session1Component } from './sessions/session1/session1.component';
import { Session2Component } from './sessions/session2/session2.component';
import { Session5Component } from './sessions/session5/session5.component';
import { Session6Component } from './sessions/session6/session6.component';
import { Topic1AngularComponent } from './sessions/session1/pages/topic1-angular/topic1-angular.component';
import { Topic2TechnologiesComponent } from './sessions/session1/pages/topic2-technologies/topic2-technologies.component';
import { Topic3NewsComponent } from './sessions/session1/pages/topic3-news/topic3-news.component';
import { Topic4ToolsComponent } from './sessions/session1/pages/topic4-tools/topic4-tools.component';
import { Topic1TypescriptComponent } from './sessions/session2/pages/topic1-typescript/topic1-typescript.component';
import { Topic2PooComponent } from './sessions/session2/pages/topic2-poo/topic2-poo.component';
import { Topic3RxjsComponent } from './sessions/session2/pages/topic3-rxjs/topic3-rxjs.component';
import { Topic1ArchitectureComponent } from './sessions/session3/pages/topic1-architecture/topic1-architecture.component';
import { Topic2LibrariesComponent } from './sessions/session3/pages/topic2-libraries/topic2-libraries.component';
import { Topic3NgmoduleComponent } from './sessions/session3/pages/topic3-ngmodule/topic3-ngmodule.component';
import { Topic4DataBindingComponent } from './sessions/session3/pages/topic4-data-binding/topic4-data-binding.component';
import { Topic5DirectivesComponent } from './sessions/session3/pages/topic5-directives/topic5-directives.component';
import { Topic1ComponentComponent } from './sessions/session4/pages/topic1-component/topic1-component.component';
import { Topic2TemplatesComponent } from './sessions/session4/pages/topic2-templates/topic2-templates.component';
import { Topic3ContentProjectionComponent } from './sessions/session4/pages/topic3-content-projection/topic3-content-projection.component';
import { Topic1PipesComponent } from './sessions/session5/pages/topic1-pipes/topic1-pipes.component';
import { Topic2RoutingComponent } from './sessions/session5/pages/topic2-routing/topic2-routing.component';
import { Topic3NavigationComponent } from './sessions/session5/pages/topic3-navigation/topic3-navigation.component';
import { Topic4ServicesComponent } from './sessions/session5/pages/topic4-services/topic4-services.component';
import { Test4Component } from './sessions/session4/components/test4/test4.component';
import { HostComponent } from './sessions/session4/components/host/host.component';
import { TestComponent } from './shared/components/test/test.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Session3Component,
    DirectiveAttributeComponent,
    DirectiveEstructureComponent,
    LifeCycleHooksComponent,
    CounterComponent,
    Session4Component,
    CardComponent,
    Session1Component,
    Session2Component,
    Session5Component,
    Session6Component,
    Topic1AngularComponent,
    Topic2TechnologiesComponent,
    Topic3NewsComponent,
    Topic4ToolsComponent,
    Topic1TypescriptComponent,
    Topic2PooComponent,
    Topic3RxjsComponent,
    Topic1ArchitectureComponent,
    Topic2LibrariesComponent,
    Topic3NgmoduleComponent,
    Topic4DataBindingComponent,
    Topic5DirectivesComponent,
    Topic1ComponentComponent,
    Topic2TemplatesComponent,
    Topic3ContentProjectionComponent,
    Topic1PipesComponent,
    Topic2RoutingComponent,
    Topic3NavigationComponent,
    Topic4ServicesComponent,
    Test4Component,
    HostComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'session1', component: Session1Component },
      { path: 'session2', component: Session2Component },
      { path: 'session3', component: Session3Component },
      {
        path: 'session4',
        component: Session4Component,
        children: [
          { path: 'component', component: Topic1ComponentComponent },
          { path: 'templates', component: Topic2TemplatesComponent },
          { path: 'content-projection', component: Topic3ContentProjectionComponent }
        ]
      },
      {
        path: 'session5',
        component: Session5Component,
        children: [
          { path: 'pipes', component: Topic1PipesComponent },
          { path: 'routing', component: Topic2RoutingComponent },
          { path: 'navigation', component: Topic3NavigationComponent },
          { path: 'services', component: Topic4ServicesComponent },
        ]
      },
      { path: 'session6', component: Session6Component },
      { path: 'session7', redirectTo: 'home' },
      { path: 'session8', redirectTo: 'home' },
     ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
