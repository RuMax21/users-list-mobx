import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import type { TableProps } from './types';
import styles from './Table.module.scss';

export const Table = <T extends object>({
  rows,
  columns,
  onRowClick,
}: TableProps<T>) => {
  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          {table.getHeaderGroups().map(({ id, headers }) => (
            <tr key={id}>
              {headers.map(header => (
                <th key={header.id} className={styles.th}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} onClick={() => onRowClick?.(row.original)}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className={styles.tв}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
