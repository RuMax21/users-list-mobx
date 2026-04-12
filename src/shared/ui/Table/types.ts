import type { ColumnDef, Table } from '@tanstack/react-table';

export interface TableProps<T extends object> {
  rows: T[];
  columns: ColumnDef<T, any>[];
  onRowClick?: (row: T) => void;
}

export interface TableHeadProps<T extends object> {
  table: Table<T>;
}

export interface TableBodyProps<T extends object> {
  table: Table<T>;
  onRowClick?: (row: T) => void;
}
