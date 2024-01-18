import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module'; // 根据实际路径进行调整
import { FooterModule } from '../footer/footer.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 

  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    FormsModule
  ]
})
export class Page3Module { }
