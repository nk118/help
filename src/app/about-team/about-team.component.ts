import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrl: './about-team.component.css'
})
export class AboutTeamComponent {

  constructor(private http: HttpClient) {}

  ngOnInit() {
   

    $(document).ready(function () {
      $('.navbar-toggler.snow').on('click', function () {
        $('.navbar-collapse').toggleClass('show');
      });
    });
  }
}

