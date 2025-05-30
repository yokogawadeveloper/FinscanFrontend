import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//third party lib
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//local component
import { LoginComponent } from './accounts/login/login.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './accounts/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
