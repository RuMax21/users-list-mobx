import { memo } from "react";
import { flexRender } from "@tanstack/react-table";
import type { TableBodyProps } from "../types";
import styles from '../Table.module.scss';

export const TableBody = memo(<T extends object>({table, onRowClick}: TableBodyProps<T>) => {
  return (
    <tbody>
      {table.getRowModel().rows.map(row => (
        <tr key={row.id} onClick={() => onRowClick?.(row.original)}>
          {row.getVisibleCells().map(cell => (
            <td key={cell.id} className={styles.td}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
})