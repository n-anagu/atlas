export interface CountryDetails {
  name: {
    common: string;
  };
  flags: Flag;
}

interface Flag {
  svg: string;
  alt: string;
}
