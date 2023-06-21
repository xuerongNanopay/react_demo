import css from './TransactionMenu.module.css'

const TransactionMenu = _ => {
  return (
    <>
      <div className={`${css.transactionMenuContainer}`}>
        <h2>Transactions</h2>
      </div>
    </>
  )
}

export default TransactionMenu;