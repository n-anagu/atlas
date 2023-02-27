import { Route } from '@angular/router';

export interface AtlasRoute extends Route {
  data?: {
    hideBackBtn?: boolean;
  };
}
