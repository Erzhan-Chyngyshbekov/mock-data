import React from "react";

import { TableRow } from "./TableRow";

import { Store } from "../../models/stores";

import "../../styles/Table.css";

interface TableProps {
  stores: Store[];
  totalsByMonth: number[];
  onChangeInput: (
    event: React.ChangeEvent<HTMLInputElement>,
    storeId: number,
    monthId: string
  ) => void;
}

export const Table: React.FC<TableProps> = ({
  stores,
  totalsByMonth,
  onChangeInput,
}) => {
  const totalOfTotals = totalsByMonth.reduce((acc, total) => (acc += total), 0);

  return (
    <table>
      <tbody>
        {stores.map((store) => (
          <TableRow
            key={store.store.id}
            store={store}
            onChangeInput={onChangeInput}
          />
        ))}

        <tr>
          <td>Totals</td>
          {totalsByMonth.map((total, index) => (
            <td key={index}>{total}</td>
          ))}
          <td>{totalOfTotals}</td>
        </tr>
      </tbody>
    </table>
  );
};
