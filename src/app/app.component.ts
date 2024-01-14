import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from './carousel.service';
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/home.css']

})
export class AppComponent implements OnInit {
  images: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchBannerImages();

    $(document).ready(function () {
      $('.navbar-toggler.snow').on('click', function () {
        $('.navbar-collapse').toggleClass('show');
      });
    });
  }


  fetchBannerImages() {
    const apiUrl = 'http://localhost:127.0.0.1/API/Banner.aspx';

    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        // Assuming the response is an array of image URLs
        this.images = data.map(item => item.imageUrl);
      },
      (error) => {
        console.error('Error fetching banner images', error);
      }
    );
  }
}

