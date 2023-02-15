import { Region } from './model';

const regionNames = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
export const regions: Region[] = regionNames.map((region) => {
  return { id: region.toLowerCase(), name: region };
});
