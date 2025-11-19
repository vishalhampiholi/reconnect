export interface Memory {
  id: number;
  imageUrl: string;
  caption: string;
  date: string;
}

export interface ChartDataPoint {
  month: string;
  happiness: number;
  label?: string;
}

export enum AppState {
  HOME = 'HOME',
  APPLICATION = 'APPLICATION',
  SUCCESS = 'SUCCESS'
}