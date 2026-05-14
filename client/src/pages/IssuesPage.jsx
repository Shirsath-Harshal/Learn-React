import IssueForm from "../components/IssueForm";
import TransactionList from "../components/TransactionList";

function IssuesPage({
  books,
  issueForm,
  members,
  onIssueChange,
  onIssueSubmit,
  onReturnBook,
  transactions,
}) {
  return (
    <section className="page-grid">
      <IssueForm
        books={books}
        issueForm={issueForm}
        members={members}
        onChange={onIssueChange}
        onSubmit={onIssueSubmit}
      />
      <div className="panel table-panel">
        <h2>Issue History</h2>
        <TransactionList onReturn={onReturnBook} transactions={transactions} />
      </div>
    </section>
  );
}

export default IssuesPage;
