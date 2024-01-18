import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Page1Component } from '../page1/page1.component';
import { Page2Component } from '../page2/page2.component';
import { Page3Component } from '../page3/page3.component';
@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
			{ path: "page1", component: Page1Component },
      { path: "page2", component: Page2Component },
      { path: "page3", component: Page3Component },
      { path: "page3", component: Page3Component },
		])
  ]
})
export class HeaderModule { }
