function IssueForm({ books, issueForm, members, onChange, onSubmit }) {
  return (
    <form className="panel form-panel" onSubmit={onSubmit}>
      <h2>Issue Book</h2>
      <select
        required
        value={issueForm.bookId}
        onChange={(event) => onChange({ ...issueForm, bookId: event.target.value })}
      >
        <option value="">Select book</option>
        {books
          .filter((book) => book.availableCopies > 0)
          .map((book) => (
            <option key={book._id} value={book._id}>
              {book.title} ({book.availableCopies})
            </option>
          ))}
      </select>
      <select
        required
        value={issueForm.memberId}
        onChange={(event) => onChange({ ...issueForm, memberId: event.target.value })}
      >
        <option value="">Select member</option>
        {members.map((member) => (
          <option key={member._id} value={member._id}>
            {member.name} - {member.membershipId}
          </option>
        ))}
      </select>
      <input
        required
        type="date"
        value={issueForm.dueDate}
        onChange={(event) => onChange({ ...issueForm, dueDate: event.target.value })}
      />
      <button type="submit">Issue Book</button>
    </form>
  );
}

export default IssueForm;
