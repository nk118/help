// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CarouselService } from '../carousel.service';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module'; // 根据实际路径进行调整
import { AppRoutingModule } from '../app-routing.module';
import { Page1Module } from '../page1/page1.module';
import { FooterModule } from '../footer/footer.module';
import { Page2Module } from '../page2/page2.module';
import { Page3Module } from '../page3/page3.module';
import {Page3Component} from '../page3/page3.component';
@NgModule({
  declarations: [
    AppComponent,
    Page3Component
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    Page1Module ,
    HeaderModule,
    FooterModule,
    Page2Module,Page3Module
  ],
  providers: [
    CarouselService,
    DataService,
  ],  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
