export interface Store {
  store: {
    id: number;
    name: string;
    total?: number;
  };
  months: {
    id: string;
    name: string;
    value: number;
  }[];
}
