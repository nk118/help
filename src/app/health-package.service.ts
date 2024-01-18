import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HealthPackageService {
  private apiUrl = 'http://phys.grp.com.tw/API/health_package.aspx';

  constructor(private http: HttpClient) {}

  getHealthPackages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
export interface HealthPackage {
  p_id: string;
  name: string;
  type: string;
  price: number;
  workday: string;
}
