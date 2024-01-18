import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private apiUrl = 'http://phys.grp.com.tw/API/News.aspx';

  constructor(private http: HttpClient) { }

  getNews(language?: string): Observable<NewsItem[]> {
    const apiUrlWithLanguage = language ? `${this.apiUrl}?language=${language}` : this.apiUrl;
    return this.http.get<NewsItem[]>(apiUrlWithLanguage);
  }
}
export interface NewsItem {
  Column1: string;
  title: string;
  content: string;
  img:string;
}
