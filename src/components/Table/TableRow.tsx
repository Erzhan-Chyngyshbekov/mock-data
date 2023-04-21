import React from "react";

import { Store } from "../../models/stores";

interface TableRowProps {
  store: Store;
  onChangeInput: (
    event: React.ChangeEvent<HTMLInputElement>,
    storeId: number,
    monthId: string
  ) => void;
}

export const TableRow: React.FC<TableRowProps> = React.memo(
  ({ store, onChangeInput }) => {
    const totalByStore = store.months.reduce(
      (acc, month) => (acc += month.value),
      0
    );

    return (
      <tr key={store.store.id}>
        <td>{store.store.name}</td>

        {store.months.map((month) => (
          <td key={month.id}>
            <input
              type="number"
              value={month.value}
              onChange={(e) => onChangeInput(e, store.store.id, month.id)}
            />
          </td>
        ))}

        <td>{totalByStore}</td>
      </tr>
    );
  }
);
