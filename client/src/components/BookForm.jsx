function BookForm({ bookForm, onChange, onSubmit }) {
  return (
    <form className="panel form-panel" onSubmit={onSubmit}>
      <h2>Add Book</h2>
      <input
        required
        placeholder="Title"
        value={bookForm.title}
        onChange={(event) => onChange({ ...bookForm, title: event.target.value })}
      />
      <input
        required
        placeholder="Author"
        value={bookForm.author}
        onChange={(event) => onChange({ ...bookForm, author: event.target.value })}
      />
      <input
        required
        placeholder="ISBN"
        value={bookForm.isbn}
        onChange={(event) => onChange({ ...bookForm, isbn: event.target.value })}
      />
      <div className="split">
        <input
          placeholder="Category"
          value={bookForm.category}
          onChange={(event) => onChange({ ...bookForm, category: event.target.value })}
        />
        <input
          required
          min="1"
          type="number"
          placeholder="Copies"
          value={bookForm.totalCopies}
          onChange={(event) => onChange({ ...bookForm, totalCopies: event.target.value })}
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
