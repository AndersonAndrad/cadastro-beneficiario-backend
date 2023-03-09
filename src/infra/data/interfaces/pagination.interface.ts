export interface IPagination<typeItems> {
  items: typeItems[];
  totalCount: number;
}
export interface IPaginate {
  pageSize: number;
  pageIndex: number;
}
