function BookList({ books, loading, onDelete }) {
  if (loading) {
    return <p className="muted">Loading books...</p>;
  }

  return (
    <div className="record-list">
      {books.map((book) => (
        <article className="record" key={book._id}>
          <div>
            <strong>{book.title}</strong>
            <span>{book.author}</span>
            <small>
              {book.category || "General"} | ISBN {book.isbn}
            </small>
          </div>
          <div className="record-actions">
            <span className="pill">
              {book.availableCopies}/{book.totalCopies}
            </span>
            <button className="ghost" type="button" onClick={() => onDelete(book._id)}>
              Delete
            </button>
          </div>
        </article>
      ))}
      {!books.length && <p className="muted">No books found.</p>}
    </div>
  );
}

export default BookList;
