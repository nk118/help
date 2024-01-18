import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NewsService, NewsItem } from '../news.service';
import { LanguageService } from '../language.service'; // 替換成實際的路徑
import { CarouselService } from '../carousel.service';
declare var $: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['../../assets/css/home.css']
})
export class HomePageComponent {
  images: string[] = [];
  imageBaseUrl: string = '';
  newsList: NewsItem[] = [];
  selectedLanguage: string = 'TW';

  constructor(private http: HttpClient, private newsService: NewsService,private languageService: LanguageService) {}

  ngOnInit() {
    this.fetchBannerData();
    this.fetchNewsData();
    this.setupNavbarToggle();
      // 獲取應用程式初始語言，可能是從 localStorage 或其他地方獲取
      const initialLanguage = this.languageService.getCurrentLanguage();
      this.selectedLanguage = initialLanguage;
  }

  private fetchBannerData() {
    const aspxUrl = `http://phys.grp.com.tw/API/Banner.aspx?language=${this. selectedLanguage}`;
    this.http.get(aspxUrl).subscribe(
      (data: any) => {
        this.images = data.map((item: any) => this.imageBaseUrl + item.filename);
      },
      (error) => {
        console.error('Error fetching data from ASPX:', error);
      }
    );
  }
  private fetchNewsData() {
    this.newsService.getNews(this.selectedLanguage).subscribe(
      (data: NewsItem[]) => {
        this.newsList = data;
      },
      (error) => {
        console.error('Error fetching news data:', error);
      }
    );
  }

  onChangeLanguage() {
    // 其他語言切換邏輯...

    // 重新獲取新語言的新聞數據
    this.fetchNewsData();
  }
  private setupNavbarToggle() {
    $(document).ready(() => {
      $('.navbar-toggler.snow').on('click', () => {
        $('.navbar-collapse').toggleClass('show');
      });
    });
  }

  getImageUrl(filename: string): string {
    return this.imageBaseUrl + filename;
  }
}
