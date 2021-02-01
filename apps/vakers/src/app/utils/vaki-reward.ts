export interface VakiReward {
  $key?: string;
  title: string;
  description: string;
  visible: boolean;
  img: string;
  key: string;
  value: string;
  delivery_date: number;
  claimed: number;
  quantityAvailable: number;
}