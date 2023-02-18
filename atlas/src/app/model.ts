export interface ApiCountryDetails {
  name: {
    common: string;
  };
  flags: Flag;
  capital: string[];
  currencies: Currencies;
  population: number;
  fifa: string;
}

interface Flag {
  svg: string;
  alt: string;
}

type Currencies = {
  [key in string]: Currency;
};

interface Currency {
  name: string;
  symbol: string;
}

export interface CountryDetails extends ApiCountryDetails {
  urlSegment: string;
}
