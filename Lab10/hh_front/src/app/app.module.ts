import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompaniesComponent,
    VacanciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
