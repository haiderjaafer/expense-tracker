import getTransactions from '@/app/actions/getTransactions';
import TransactionItem from './TransactionItem';
import { Transaction } from '@/types/Transaction';

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className='error'>{error}</p>;
  }

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions &&                         // if transactions id truthy 
          transactions.map((transaction: Transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />   // this will represent single TransactionItem 
          ))}
      </ul>
    </>
  );
};

export default TransactionList;