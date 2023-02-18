import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { countryIdParam } from '../consts';
import { ApiCountryDetails } from '../model';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit, OnDestroy {
  rootParamsSubscription: null | Subscription = null;
  countryDetails: ApiCountryDetails | null = null;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rootParamsSubscription = this.route.params.subscribe((params) => {
      this.loadCountryDetails(params[countryIdParam]);
    });
  }

  get currency() {
    return this.countryDetails
      ? Object.values(this.countryDetails?.currencies)[0]
      : null;
  }

  private loadCountryDetails(countryId: string): void {
    this.countryService
      .getCountryDetails(countryId)
      .subscribe((countryDetails) => {
        this.countryDetails = countryDetails[0];
      });
  }

  ngOnDestroy(): void {
    this.rootParamsSubscription?.unsubscribe();
  }
}
