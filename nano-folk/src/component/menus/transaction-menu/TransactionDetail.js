import { useParams } from "react-router-dom";

// import css from './TransactionDetail.module.css'

const EXAMPLE_DATA = {
  id: '6b99ac9c3993e74e',
  transactionSummary: '$28.22 → 4,109.40 | John Doe → TTTT 3000099519 TTTT',
  sourceAccount: 'from...',
  destinationAccout: 'to...',
  amount: '4,109.40 PKR',
  status: 'Send',
  transactionFee: '205.47 PKR',
  amountToBeReceive: '205.47 PKR',
  amountToBeDebit: '$111119.22 CAD',
  createAt: new Date().toISOString()
}
const TransactionDetail = () => {
  const { transactionId } = useParams();
  return (
    <div>
      <h1>Transaction Detail: {transactionId}</h1>
      <div className={`{css.transactionDetailContainer}`}>

      </div>  
    </div>
  )
}

export default TransactionDetail