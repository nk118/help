// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 

  constructor(private http: HttpClient) { }

  getBannerData(): Observable<string> {
    return this.http.get<string>('http://phys.grp.com.tw/API/Banner.aspx');
  }
}
