import React from "react";

import { Table } from "../Table";

import { Store } from "../../models/stores";

import mockData from "../../mock-data.json";

import "../../styles/Main.css";

const monthsCount = 12;

export const Main: React.FC = () => {
  const [stores, setStores] = React.useState<Store[]>(mockData);

  const onChangeInput = React.useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement>,
      storeId: number,
      monthId: string
    ) => {
      setStores((prevStores) =>
        prevStores.map((store) => {
          if (store.store.id === storeId) {
            return {
              ...store,
              months: store.months.map((month) => {
                if (month.id === monthId) {
                  return {
                    ...month,
                    value: Number(event.target.value),
                  };
                }
                return month;
              }),
            };
          }
          return store;
        })
      );
    },
    []
  );

  const totalsByMonth: number[] = React.useMemo(() => {
    return Array.from({ length: monthsCount }, (_, i) =>
      stores.reduce((acc, store) => (acc += store.months[i].value), 0)
    );
  }, [stores]);

  return (
    <div className="container">
      <Table
        stores={stores}
        totalsByMonth={totalsByMonth}
        onChangeInput={onChangeInput}
      />
    </div>
  );
};
