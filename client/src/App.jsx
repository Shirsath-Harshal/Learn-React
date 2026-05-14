import { useCallback, useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { apiRequest } from "./api/libraryApi";
import Layout from "./components/Layout";
import { emptyBook, emptyIssue, emptyMember } from "./constants/forms";
import "./App.css";
import BooksPage from "./pages/BooksPage";
import DashboardPage from "./pages/DashboardPage";
import IssuesPage from "./pages/IssuesPage";
import MembersPage from "./pages/MembersPage";

function App() {
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [bookForm, setBookForm] = useState(emptyBook);
  const [memberForm, setMemberForm] = useState(emptyMember);
  const [issueForm, setIssueForm] = useState(emptyIssue);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const activeIssues = useMemo(
    () => transactions.filter((transaction) => transaction.status === "Issued"),
    [transactions],
  );

  const stats = useMemo(
    () => [
      { label: "Books", value: books.length },
      { label: "Members", value: members.length },
      { label: "Active Issues", value: activeIssues.length },
      {
        label: "Available Copies",
        value: books.reduce((sum, book) => sum + Number(book.availableCopies || 0), 0),
      },
    ],
    [activeIssues.length, books, members.length],
  );

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [bookData, memberData, transactionData] = await Promise.all([
        apiRequest(`/books?search=${encodeURIComponent(search)}`),
        apiRequest(`/members?search=${encodeURIComponent(search)}`),
        apiRequest("/transactions"),
      ]);
      setBooks(bookData);
      setMembers(memberData);
      setTransactions(transactionData);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    queueMicrotask(loadData);
  }, [loadData]);

  const handleBookSubmit = async (event) => {
    event.preventDefault();
    try {
      await apiRequest("/books", {
        method: "POST",
        body: JSON.stringify({
          ...bookForm,
          totalCopies: Number(bookForm.totalCopies),
        }),
      });
      setBookForm(emptyBook);
      setMessage("Book added successfully.");
      loadData();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleMemberSubmit = async (event) => {
    event.preventDefault();
    try {
      await apiRequest("/members", {
        method: "POST",
        body: JSON.stringify(memberForm),
      });
      setMemberForm(emptyMember);
      setMessage("Member added successfully.");
      loadData();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleIssueSubmit = async (event) => {
    event.preventDefault();
    try {
      await apiRequest("/transactions/issue", {
        method: "POST",
        body: JSON.stringify(issueForm),
      });
      setIssueForm(emptyIssue);
      setMessage("Book issued successfully.");
      loadData();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const deleteBook = async (bookId) => {
    try {
      await apiRequest(`/books/${bookId}`, { method: "DELETE" });
      setMessage("Book deleted.");
      loadData();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const deleteMember = async (memberId) => {
    try {
      await apiRequest(`/members/${memberId}`, { method: "DELETE" });
      setMessage("Member deleted.");
      loadData();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const returnBook = async (transactionId) => {
    try {
      await apiRequest(`/transactions/${transactionId}/return`, { method: "PATCH" });
      setMessage("Book returned successfully.");
      loadData();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const routeProps = {
    bookForm,
    books,
    issueForm,
    loading,
    memberForm,
    members,
    onBookChange: setBookForm,
    onBookSubmit: handleBookSubmit,
    onDeleteBook: deleteBook,
    onDeleteMember: deleteMember,
    onIssueChange: setIssueForm,
    onIssueSubmit: handleIssueSubmit,
    onMemberChange: setMemberForm,
    onMemberSubmit: handleMemberSubmit,
    onReturnBook: returnBook,
    stats,
    transactions,
  };

  return (
    <Layout message={message} search={search} setMessage={setMessage} setSearch={setSearch}>
      <Routes>
        <Route path="/" element={<DashboardPage {...routeProps} />} />
        <Route path="/books" element={<BooksPage {...routeProps} />} />
        <Route path="/members" element={<MembersPage {...routeProps} />} />
        <Route path="/issues" element={<IssuesPage {...routeProps} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
