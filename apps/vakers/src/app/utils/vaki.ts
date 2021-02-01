export interface Vaki {
  $key?: string;
  description: string;
  start_date: number;
  close_date: number;
  name: string;
  summary: string;
  goal: number,
  url: string;
  photo?: string;
  video?: string;
  country: string;
  //country: Country['isoCode'];
}