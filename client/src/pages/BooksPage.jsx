import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

function BooksPage({ bookForm, books, loading, onBookChange, onBookSubmit, onDeleteBook }) {
  return (
    <section className="page-grid">
      <BookForm bookForm={bookForm} onChange={onBookChange} onSubmit={onBookSubmit} />
      <div className="panel table-panel">
        <h2>Books</h2>
        <BookList books={books} loading={loading} onDelete={onDeleteBook} />
      </div>
    </section>
  );
}

export default BooksPage;
