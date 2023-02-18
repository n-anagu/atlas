import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { countriesUrlSegment, regionIdParam } from '../consts';
import { regions } from '../data';
import { ApiCountryDetails, CountryDetails } from '../model';
import { RegionService } from './region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit, OnDestroy {
  countries: CountryDetails[] = [];
  rootParamsSubscription: null | Subscription = null;
  title = '';
  readonly countriesUrlSegment = countriesUrlSegment;

  constructor(
    private regionService: RegionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rootParamsSubscription = this.route.params.subscribe((params) => {
      this.loadCountries(params[regionIdParam]);
      this.getTitle(params[regionIdParam]);
    });
  }

  private loadCountries(regionId: string): void {
    this.regionService.getCountries(regionId).subscribe((countries) => {
      this.countries = this.addCountryNameUrlSegment(countries);
    });
  }

  private addCountryNameUrlSegment(
    countries: ApiCountryDetails[]
  ): CountryDetails[] {
    const modifiedCountries = countries.map((country) => {
      return { ...country, urlSegment: country.name.common.toLowerCase() };
    });
    return modifiedCountries;
  }

  private getTitle(regionId: string): void {
    const region = regions.find(({ id }) => id === regionId);
    if (!region) {
      throw new Error(`could not find for region ${regionId}`);
    }
    this.title = `Region: ${region?.name}`;
  }

  ngOnDestroy(): void {
    this.rootParamsSubscription?.unsubscribe();
  }
}
