
export interface Paginator<T> {
  items: T[];
  total_count: number;
  next?: string | null;
  previous?: string;
}
