import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

declare var $: any;
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css', '/src/assets/css/header.component.css']
})
export class Page2Component implements OnInit {

 

  constructor(private http: HttpClient) {}

  ngOnInit() {
   

    $(document).ready(function () {
      $('.navbar-toggler.snow').on('click', function () {
        $('.navbar-collapse').toggleClass('show');
      });
    });
  }


 
}


