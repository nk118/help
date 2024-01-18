import { Component } from '@angular/core';
import { LanguageService } from '../language.service'; // 替換成實際的路徑

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // 正确的屬性是 styleUrls
})
export class HeaderComponent {
  selectedLanguage: any = 'TW'; 

  constructor(private languageService: LanguageService) {}

  onChangeLanguage(event: any) {
    // 發起 API 請求
    this.languageService.setCurrentLanguage(this.selectedLanguage);
    // 其他更新介面的邏輯...
  }
}
