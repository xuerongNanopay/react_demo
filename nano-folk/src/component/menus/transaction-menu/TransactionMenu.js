import { useState, useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table';
import { Box, Button, ListItemIcon, MenuItem, Typography } from '@mui/material';


import css from './TransactionMenu.module.css'

const data = Array(50).fill(null).map(_ => (
  {
    id: 'transactionId',
    transactionSummary: '$19.22 → 2,260.17 | John Doe → TTTT PK90NBPA0002003000207384 Test',
    amount: '222,222,260.17 PKR',
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
        size: 250,
      },
      {
        accessorKey: 'amount',
        header: 'Amount',
        size: 100,
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
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={(theme) => {
              return {
                color: 'Cancelation in progress' === cell.getValue()
                        ? theme.palette.error.light
                        : '#fff',
              }
            }}
          >
            {cell.getValue()?.toLocaleString?.('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </Box>
        )
      }
    ],
    [],
  );

  //table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  return (
    <>
      <div className={`${css.transactionMenuContainer}`}>
        <h1>Transactions</h1>
        <div className='mt-4'>
          <MaterialReactTable 
            columns={columns}
            data={data}
            enableDensityToggle={false}
            enableColumnActions={false}
            // positionActionsColumn='last'
            // enableRowActions
            // renderRowActionMenuItems={({ closeMenu }) => [
            //   <MenuItem
            //     key={0}
            //     onClick={() => {
            //       // View profile logic...
            //       closeMenu();
            //     }}
            //     sx={{ m: 0 }}
            //   >
            //     View Profile
            //   </MenuItem>,
            //   <MenuItem
            //     key={1}
            //     onClick={() => {
            //       // Send email logic...
            //       closeMenu();
            //     }}
            //     sx={{ m: 0 }}
            //   >
            //     Send Email
            //   </MenuItem>,
            // ]}
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
                alert('TODO: findByTransactionId')
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