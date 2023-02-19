import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { homeUrl } from 'src/app/consts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  backBtnShown = false;

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.backBtnShown = event.url !== `/${homeUrl}`;
      }
    });
  }

  goBackToPrevPage(): void {
    this.location.back();
  }
}
