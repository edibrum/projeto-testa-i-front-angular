import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplexTableComponent } from './widgets/complex-table/complex-table.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './pages/project/project.component';
import { PersonComponent } from './pages/person/person.component';
import { AutoTextLengthDirective } from './directives/textarea/auto-text-length.directive';
import { SideMenuComponent } from './widgets/side-menu/side-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SideMenuComponent,
    ComplexTableComponent,
    ProjectComponent,
    PersonComponent,
    AutoTextLengthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
