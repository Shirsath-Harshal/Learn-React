function MemberList({ members, onDelete }) {
  return (
    <div className="record-list">
      {members.map((member) => (
        <article className="record" key={member._id}>
          <div>
            <strong>{member.name}</strong>
            <span>{member.email}</span>
            <small>
              {member.phone} | {member.membershipId}
            </small>
          </div>
          <button className="ghost" type="button" onClick={() => onDelete(member._id)}>
            Delete
          </button>
        </article>
      ))}
      {!members.length && <p className="muted">No members found.</p>}
    </div>
  );
}

export default MemberList;
