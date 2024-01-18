import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import { HeaderModule } from '../header/header.module'; // 根据实际路径进行调整
import { FooterModule } from '../footer/footer.module';
@NgModule({
  declarations: [
    Page1Component,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ]
})
export class Page1Module { }
