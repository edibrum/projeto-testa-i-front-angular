import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { ComplexTableComponent } from './widgets/complex-table/complex-table.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ProjectComponent } from './pages/project/project.component';
import { PersonComponent } from './pages/person/person.component';
import { AutoTextLengthDirective } from './directives/textarea/auto-text-length.directive';
import { SideMenuComponent } from './widgets/side-menu/side-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { DeletePersonModalComponent } from './modals/person-modals/delete-person-modal/delete-person-modal.component';
import { PersonModalComponent } from './modals/person-modals/person-modal/person-modal.component';
import { provideNgxMask } from 'ngx-mask';

@NgModule({ 
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SideMenuComponent,
        ComplexTableComponent,
        ProjectComponent,
        PersonComponent,
        AutoTextLengthDirective,
        DeletePersonModalComponent,
        PersonModalComponent
    ],
    bootstrap: [
        AppComponent
    ], 
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
            closeButton: true,
            progressBar: true,
          }),
    ], 
    providers: [
        provideNgxMask(), 
        provideHttpClient(withInterceptorsFromDi())
    ] 
})

export class AppModule { }
