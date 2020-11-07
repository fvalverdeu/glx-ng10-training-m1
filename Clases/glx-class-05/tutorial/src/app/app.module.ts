import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { Topic3RxjsComponent } from './sessions/session2/pages/topic3-rxjs/topic3-rxjs.component';
import { Topic1ArchitectureComponent } from './sessions/session3/pages/topic1-architecture/topic1-architecture.component';
import { Topic2LibrariesComponent } from './sessions/session3/pages/topic2-libraries/topic2-libraries.component';
import { Topic3NgmoduleComponent } from './sessions/session3/pages/topic3-ngmodule/topic3-ngmodule.component';
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
import { TwoWayDataBindingComponent } from './sessions/session3/components/two-way-data-binding/two-way-data-binding.component';
import { Topic2TemplateFormsComponent } from './sessions/session6/pages/topic2-template-forms/topic2-template-forms.component';
import { Topic4ValidationsComponent } from './sessions/session6/pages/topic4-validations/topic4-validations.component';
import { Topic3ReactiveFormsComponent } from './sessions/session6/pages/topic3-reactive-forms/topic3-reactive-forms.component';
import { LoginComponent } from './sessions/session6/components/login/login.component';
import { ContactComponent } from './sessions/session6/components/contact/contact.component';
import { RegisterComponent } from './sessions/session6/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Topic2ClassInterfaceComponent } from './sessions/session2/pages/topic2-class-interface/topic2-class-interface.component';
import { Topic3InheritanceComponent } from './sessions/session2/pages/topic3-inheritance/topic3-inheritance.component';
import { Topic4ModulesNamespacesComponent } from './sessions/session2/pages/topic4-modules-namespaces/topic4-modules-namespaces.component';
import { Topic5RxjsComponent } from './sessions/session2/pages/topic5-rxjs/topic5-rxjs.component';
import { Topic1BootstrapComponent } from './sessions/session6/pages/topic1-bootstrap/topic1-bootstrap.component';
import { Topic1ApiRestComponent } from './sessions/session7/pages/topic1-api-rest/topic1-api-rest.component';
import { Topic2HttpClientComponent } from './sessions/session7/pages/topic2-http-client/topic2-http-client.component';
import { Topic3GetListComponent } from './sessions/session7/pages/topic3-get-list/topic3-get-list.component';
import { Topic4GetFindComponent } from './sessions/session7/pages/topic4-get-find/topic4-get-find.component';
import { Topic5CrudComponent } from './sessions/session7/pages/topic5-crud/topic5-crud.component';
import { Topic6InterceptorsComponent } from './sessions/session7/pages/topic6-interceptors/topic6-interceptors.component';
import { Topic7ErrorHandlerComponent } from './sessions/session7/pages/topic7-error-handler/topic7-error-handler.component';
import { Session7Component } from './sessions/session7/session7.component';
import { Session8Component } from './sessions/session8/session8.component';
import { Topic1DebugComponent } from './sessions/session8/pages/topic1-debug/topic1-debug.component';
import { Topic2ToolsComponent } from './sessions/session8/pages/topic2-tools/topic2-tools.component';
import { Topic5DataBindingComponent } from './sessions/session3/pages/topic5-data-binding/topic5-data-binding.component';
import { Topic4DirectivesComponent } from './sessions/session3/pages/topic4-directives/topic4-directives.component';
import { Topic3BuildComponent } from './sessions/session8/pages/topic3-build/topic3-build.component';
import { Topic4LazyLoadingComponent } from './sessions/session8/pages/topic4-lazy-loading/topic4-lazy-loading.component';
import { Topic5DeployComponent } from './sessions/session8/pages/topic5-deploy/topic5-deploy.component';
import { ContactS7Component } from './sessions/session7/components/contact-s7/contact-s7.component';

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
    Topic3RxjsComponent,
    Topic1ArchitectureComponent,
    Topic2LibrariesComponent,
    Topic3NgmoduleComponent,
    Topic1ComponentComponent,
    Topic2TemplatesComponent,
    Topic3ContentProjectionComponent,
    Topic1PipesComponent,
    Topic2RoutingComponent,
    Topic3NavigationComponent,
    Topic4ServicesComponent,
    Test4Component,
    HostComponent,
    TestComponent,
    TwoWayDataBindingComponent,
    Topic2TemplateFormsComponent,
    Topic4ValidationsComponent,
    Topic3ReactiveFormsComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    Topic2ClassInterfaceComponent,
    Topic3InheritanceComponent,
    Topic4ModulesNamespacesComponent,
    Topic5RxjsComponent,
    Topic1BootstrapComponent,
    Topic1ApiRestComponent,
    Topic2HttpClientComponent,
    Topic3GetListComponent,
    Topic4GetFindComponent,
    Topic5CrudComponent,
    Topic6InterceptorsComponent,
    Topic7ErrorHandlerComponent,
    Session7Component,
    Session8Component,
    Topic1DebugComponent,
    Topic2ToolsComponent,
    Topic5DataBindingComponent,
    Topic4DirectivesComponent,
    Topic3BuildComponent,
    Topic4LazyLoadingComponent,
    Topic5DeployComponent,
    ContactS7Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'session1',
        component: Session1Component,
        children: [
          { path: 'angular', component: Topic1AngularComponent },
          { path: 'technologies', component: Topic2TechnologiesComponent },
          { path: 'news', component: Topic3NewsComponent },
          { path: 'tools', component: Topic4ToolsComponent },
        ]
      },
      {
        path: 'session2',
        component: Session2Component,
        children: [
          { path: 'typescript', component: Topic1TypescriptComponent },
          { path: 'class-interface', component: Topic2ClassInterfaceComponent },
          { path: 'inheritance', component: Topic3InheritanceComponent },
          { path: 'modules-namespaces', component: Topic4ModulesNamespacesComponent },
          { path: 'rxjs', component: Topic5RxjsComponent },
        ]
      },
      {
        path: 'session3',
        component: Session3Component,
        children: [
          { path: 'architecture', component: Topic1ArchitectureComponent },
          { path: 'libraries', component: Topic2LibrariesComponent },
          { path: 'ng-module', component: Topic3NgmoduleComponent },
          { path: 'directives', component: Topic4DirectivesComponent },
          { path: 'data-binding', component: Topic5DataBindingComponent },
        ]
      },
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
      { path: 'session6',
        component: Session6Component,
        children: [
          { path: 'bootstrap', component: Topic1BootstrapComponent },
          { path: 'template-forms', component: Topic2TemplateFormsComponent },
          { path: 'reactive-forms', component: Topic3ReactiveFormsComponent },
          { path: 'validations', component: Topic4ValidationsComponent },
        ]
      },
      {
        path: 'session7',
        component: Session7Component,
        children: [
          { path: 'api-rest', component: Topic1ApiRestComponent },
          { path: 'http-client', component: Topic2HttpClientComponent },
          { path: 'get-list', component: Topic3GetListComponent },
          { path: 'get-find', component: Topic4GetFindComponent },
          { path: 'crud', component: Topic5CrudComponent },
          { path: 'interceptors', component: Topic6InterceptorsComponent },
          { path: 'error-handler', component: Topic7ErrorHandlerComponent },
        ]
      },
      { path: 'session8',
        component: Session8Component,
        children: [
          { path: 'debug', component: Topic1DebugComponent },
          { path: 'tools', component: Topic2ToolsComponent },
          { path: 'build', component: Topic3BuildComponent },
          { path: 'lazy-loading', component: Topic4LazyLoadingComponent },
          { path: 'deploy', component: Topic5DeployComponent },
        ]
      },
     ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
