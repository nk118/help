import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from '../page2/page2.component';
import { HeaderModule } from '../header/header.module'; // 根据实际路径进行调整
import { FooterModule } from '../footer/footer.module';
@NgModule({
  declarations: [
    Page2Component,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ]
})
export class Page2Module { }
