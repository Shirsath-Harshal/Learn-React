import MemberForm from "../components/MemberForm";
import MemberList from "../components/MemberList";

function MembersPage({ memberForm, members, onDeleteMember, onMemberChange, onMemberSubmit }) {
  return (
    <section className="page-grid">
      <MemberForm memberForm={memberForm} onChange={onMemberChange} onSubmit={onMemberSubmit} />
      <div className="panel table-panel">
        <h2>Members</h2>
        <MemberList members={members} onDelete={onDeleteMember} />
      </div>
    </section>
  );
}

export default MembersPage;
