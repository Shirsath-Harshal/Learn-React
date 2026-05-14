function TransactionList({ onReturn, transactions }) {
  return (
    <div className="record-list">
      {transactions.map((transaction) => (
        <article className="record transaction" key={transaction._id}>
          <div>
            <strong>{transaction.book?.title || "Deleted book"}</strong>
            <span>{transaction.member?.name || "Deleted member"}</span>
            <small>Due {new Date(transaction.dueDate).toLocaleDateString()}</small>
          </div>
          <div className="record-actions">
            <span className={`pill ${transaction.status === "Issued" ? "warn" : "ok"}`}>
              {transaction.status}
            </span>
            {transaction.status === "Issued" && (
              <button className="ghost" type="button" onClick={() => onReturn(transaction._id)}>
                Return
              </button>
            )}
          </div>
        </article>
      ))}
      {!transactions.length && <p className="muted">No transactions yet.</p>}
    </div>
  );
}

export default TransactionList;
