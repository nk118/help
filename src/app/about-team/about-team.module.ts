import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module'; // 根据实际路径进行调整
import { FooterModule } from '../footer/footer.module';
import { AboutTeamComponent} from './about-team.component';
@NgModule({
  declarations: [
    AboutTeamComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule 
  ]
})
export class AboutTeamModule { }
