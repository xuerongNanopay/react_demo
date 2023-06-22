import { useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table';

import css from './TransactionMenu.module.css'

const data = Array(50).fill(null).map(_ => (
  {
    id: 'transactionId',
    transactionSummary: '$19.22 → 2,260.17 | John Doe → TTTT PK90NBPA0002003000207384 Test',
    amount: '2,260.17 PKR',
    created: '6/19/2023, 2:33:58 PM',
    status: 'Cancelation in progress'
  }
));

const TransactionMenu = _ => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'transactionSummary', //access nested data with dot notation
        header: 'Transaction Summary',
        size: 150,
      },
      {
        accessorKey: 'amount',
        header: 'Amount',
        size: 150,
      },
      {
        accessorKey: 'created', //normal accessorKey
        header: 'Created',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 150,
      }
    ],
    [],
  );


  return (
    <>
      <div className={`${css.transactionMenuContainer}`}>
        <h1>Transactions</h1>
        <div
          style={{
          }}
        >
          <MaterialReactTable 
            columns={columns}
            data={data}
            enableDensityToggle={false}
            enableColumnActions={false}
            onColumnOrderChange={e => console.log('onColumnOrderChange',e)}
            initialState={{ density: 'spacious' }}
            muiTablePaginationProps={{
              rowsPerPageOptions: [10, 20],
              // showFirstButton: true,
              // showLastButton: true,
            }}
            muiTableBodyRowProps={({ row }) => ({
              onClick: (event) => {
                // console.info(event, row.original);
                console.info(row.original);
              },
              sx: {
                cursor: 'pointer', //you might want to change the cursor too when adding an onClick
              },
            })}
          />
        </div>
      </div>
    </>
  )
}

export default TransactionMenu;