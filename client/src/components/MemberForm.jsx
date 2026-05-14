function MemberForm({ memberForm, onChange, onSubmit }) {
  return (
    <form className="panel form-panel" onSubmit={onSubmit}>
      <h2>Add Member</h2>
      <input
        required
        placeholder="Full name"
        value={memberForm.name}
        onChange={(event) => onChange({ ...memberForm, name: event.target.value })}
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={memberForm.email}
        onChange={(event) => onChange({ ...memberForm, email: event.target.value })}
      />
      <input
        required
        placeholder="Phone"
        value={memberForm.phone}
        onChange={(event) => onChange({ ...memberForm, phone: event.target.value })}
      />
      <input
        required
        placeholder="Membership ID"
        value={memberForm.membershipId}
        onChange={(event) => onChange({ ...memberForm, membershipId: event.target.value })}
      />
      <button type="submit">Add Member</button>
    </form>
  );
}

export default MemberForm;
