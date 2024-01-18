import { Component, HostListener } from '@angular/core';
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

  menuItems = [
    { label: '關於我們', link: '/page1', subMenu: [{ label: '我們的特色', link: '/team' }, { label: '我们的團隊', link: '/features' }] },
    // Add more menu items as needed
  ];

  showSubMenu: boolean = false;

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }
}
