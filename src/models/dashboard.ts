export interface IStat {
  title: string;
  value: string;
  changed: "increased" | "decreased";
  changedBy: string;
}

export interface IScore {
  score: number;
  title: string;
  message: string;
}

export interface IFeedback {
  positive: number;
  negative: number;
  neutral: number;
}

export interface ICustomerFeedback {
  date: string;
  offline_sales: number;
  web_sales: number;
}

export interface ISheetData {
  [key: string]: Array<any>;
}

export interface ITopProduct {
  product: string;
  sold_amount: number;
  unit_price: number;
  revenue: number;
  rating: number;
}
