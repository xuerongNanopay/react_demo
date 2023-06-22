import { useParams } from "react-router-dom";

const TransactionDetail = () => {
  const { transactionId } = useParams();
  return (
    <div>
      <h1>Transaction Detail: {transactionId}</h1>
    </div>
  )
}

export default TransactionDetail