import Table from 'react-bootstrap/Table';

import css from './TransactionMenu.module.css'


const TransactionMenu = _ => {
  return (
    <>
      <div className={`${css.transactionMenuContainer}`}>
        <h1>Transactions</h1>
        <div>
        <Table table table-striped className={`${css.tableText}`}>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>$13.22 → 1,027.35 | John Doe → TTTT PK90NBPA0002003000207384 Test</td>
              <td>$13.22 → 1,027.35 | John Doe → TTTT PK90NBPA000200300020738</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        </div>
      </div>
    </>
  )
}

export default TransactionMenu;