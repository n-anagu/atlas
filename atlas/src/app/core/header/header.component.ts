import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RoutesRecognized } from '@angular/router';
import { homeUrl } from 'src/app/consts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showBackBtn = true;
  homeUrl = homeUrl;

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      // can not use ActivatedRoute here because route data is not available outside of router-outlet
      if (event instanceof RoutesRecognized) {
        const hideBackBtn = event.state.root.firstChild?.data['hideBackBtn'];
        this.showBackBtn = !hideBackBtn;
      }
    });
  }

  goBackToPrevPage(): void {
    this.location.back();
  }
}
