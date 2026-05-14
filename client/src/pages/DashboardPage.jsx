import BookForm from "../components/BookForm";
import IssueForm from "../components/IssueForm";
import MemberForm from "../components/MemberForm";
import StatsGrid from "../components/StatsGrid";
import TransactionList from "../components/TransactionList";

function DashboardPage({
  bookForm,
  books,
  issueForm,
  memberForm,
  members,
  onBookChange,
  onBookSubmit,
  onIssueChange,
  onIssueSubmit,
  onMemberChange,
  onMemberSubmit,
  onReturnBook,
  stats,
  transactions,
}) {
  return (
    <>
      <StatsGrid stats={stats} />
      <section className="workspace">
        <BookForm bookForm={bookForm} onChange={onBookChange} onSubmit={onBookSubmit} />
        <MemberForm memberForm={memberForm} onChange={onMemberChange} onSubmit={onMemberSubmit} />
        <IssueForm
          books={books}
          issueForm={issueForm}
          members={members}
          onChange={onIssueChange}
          onSubmit={onIssueSubmit}
        />
      </section>
      <section className="panel table-panel">
        <h2>Recent Issue History</h2>
        <TransactionList onReturn={onReturnBook} transactions={transactions.slice(0, 5)} />
      </section>
    </>
  );
}

export default DashboardPage;
