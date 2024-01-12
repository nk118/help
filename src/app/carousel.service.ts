import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private apiUrl = 'http://localhost:127.0.0.1/API/Banner.aspx'


  constructor(private http: HttpClient) { }

  getCarouselImages(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }
}
