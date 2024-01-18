import { Component, OnInit } from '@angular/core';
import { HealthPackageService } from '../health-package.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'] // 修正屬性名稱為 styleUrls
})

export class Page3Component implements OnInit {
  healthPackages: any[] = [];
  selectedCount: number = 0; // 添加這一行

  constructor(private healthPackageService: HealthPackageService) {}
  pupdateSelectedCount(): void {
    // 實現你的邏輯，例如更新 selectedCount
  }
  showComparisonTable(): void {
    // 實現顯示比較表格的邏輯
  }
  ngOnInit(): void {
    this.getHealthPackages();
  }
  getHealthPackages(): void {
    this.healthPackageService.getHealthPackages().subscribe((packages) => {
      console.log(packages); // 确保数据被成功获取
      this.healthPackages = packages;
    });
  }
  
}
