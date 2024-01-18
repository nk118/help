// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 // 請根據你的實際文件路徑修改
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
const routes: Routes = [
  {path : 'page1',component:Page1Component}

  // { path: 'page1',
  //  loadChildren: () => 
  //  import('../app/page1/page1.module').then((m) => m.Page1Module),
  // },
  // 其他路由配置...
];

@NgModule({ 

  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
