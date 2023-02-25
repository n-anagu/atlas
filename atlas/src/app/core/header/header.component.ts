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
  homeUrl = homeUrl;

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.backBtnShown = !this.isHomePage(event.url);
      }
    });
  }

  goBackToPrevPage(): void {
    this.location.back();
  }

  private isHomePage(url: string) {
    return url === '/' || url === `/${homeUrl}`;
  }
}
