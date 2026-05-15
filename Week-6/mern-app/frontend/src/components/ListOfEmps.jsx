import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const navigate = useNavigate();

  const getEmps = async () => {
    try {
      setLoading(true);
      let res = await axios.get(`${import.meta.env.VITE_API_URL}/emp-api/employees`);
      if (res.status === 200) setEmps(res.data.payload);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { getEmps(); }, []);

  const deleteEmpById = async (id) => {
    if (!window.confirm("Remove this employee?")) return;
    setDeletingId(id);
    try {
      let res = await axios.delete(`${import.meta.env.VITE_API_URL}/emp-api/employees/${id}`);
      if (res.status === 200) getEmps();
    } finally {
      setDeletingId(null);
    }
  };

  const avatarColors = [
    '#f97316','#3b82f6','#10b981','#8b5cf6','#ec4899','#14b8a6','#f59e0b','#6366f1'
  ];

  const getColor = (name) => {
    const i = (name?.charCodeAt(0) || 0) % avatarColors.length;
    return avatarColors[i];
  };

  const initials = (name) => {
    if (!name) return "?";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  };

  return (
    <div className="page-enter">
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem', fontWeight: '800',
            color: 'var(--clr-text)', marginBottom: '0.3rem',
          }}></h1>
          
        </div>
        
      </div>

      {/* Loading */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--clr-muted)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}></div>
          <p>Loading employees...</p>
        </div>
      )}

      {/* Empty state */}
      {!loading && emps.length === 0 && (
        <div style={{
          textAlign: 'center', padding: '5rem 2rem',
          background: 'var(--clr-surface)',
          border: '1px dashed var(--clr-border)',
          borderRadius: '20px',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}></div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--clr-text)', marginBottom: '0.5rem' }}>
            No employees yet
          </h3>
        
          
        </div>
      )}

      {/* Employee grid */}
      {!loading && emps.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.2rem',
        }}>
          {emps.map((emp) => (
            <div
              key={emp._id}
              style={{
                background: 'var(--clr-surface)',
                border: '1px solid var(--clr-border)',
                borderRadius: '16px',
                padding: '1.5rem',
                transition: 'all 0.25s',
                opacity: deletingId === emp._id ? 0.5 : 1,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--clr-border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top: avatar + name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.2rem' }}>
                <div style={{
                  width: '50px', height: '50px',
                  borderRadius: '12px',
                  background: getColor(emp.name),
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700', fontSize: '1.1rem', color: '#fff',
                  flexShrink: 0,
                }}>{initials(emp.name)}</div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: '700', fontSize: '1rem',
                    color: 'var(--clr-text)',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>{emp.name}</div>
                  <div style={{
                    fontSize: '0.82rem', color: 'var(--clr-accent)',
                    fontWeight: '500',
                  }}>{emp.designation}</div>
                </div>
              </div>

              {/* Details */}
              <div style={{
                background: 'var(--clr-surface2)',
                borderRadius: '10px', padding: '12px 14px',
                marginBottom: '1.2rem', fontSize: '0.85rem',
              }}>
                {[
                  {  val: emp.email },
                  {  val: emp.mobile || '—' },
                  {  val: emp.companyName },
                ].map(({ icon, val }) => (
                  <div key={icon} style={{
                    display: 'flex', gap: '8px', alignItems: 'center',
                    color: 'var(--clr-muted)', marginBottom: '5px',
                    overflow: 'hidden',
                  }}>
                    <span style={{ flexShrink: 0 }}>{icon}</span>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{val}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => navigate("/employee", { state: emp })}
                  style={{
                    flex: '1', padding: '9px',
                    background: 'transparent',
                    border: '1px solid var(--clr-border)',
                    borderRadius: '8px', fontSize: '0.82rem',
                    color: 'var(--clr-muted)', cursor: 'pointer',
                    transition: 'all 0.2s', fontWeight: '500',
                  }}
                  onMouseEnter={e => { e.target.style.borderColor = '#3b82f6'; e.target.style.color = '#3b82f6'; }}
                  onMouseLeave={e => { e.target.style.borderColor = 'var(--clr-border)'; e.target.style.color = 'var(--clr-muted)'; }}
                >👁 View</button>

                <button
                  onClick={() => navigate("/edit-emp", { state: emp })}
                  style={{
                    flex: '1', padding: '9px',
                    background: 'transparent',
                    border: '1px solid var(--clr-border)',
                    borderRadius: '8px', fontSize: '0.82rem',
                    color: 'var(--clr-muted)', cursor: 'pointer',
                    transition: 'all 0.2s', fontWeight: '500',
                  }}
                  onMouseEnter={e => { e.target.style.borderColor = 'var(--clr-accent)'; e.target.style.color = 'var(--clr-accent)'; }}
                  onMouseLeave={e => { e.target.style.borderColor = 'var(--clr-border)'; e.target.style.color = 'var(--clr-muted)'; }}
                >✏️ Edit</button>

                <button
                  onClick={() => deleteEmpById(emp._id)}
                  disabled={deletingId === emp._id}
                  style={{
                    flex: '1', padding: '9px',
                    background: 'transparent',
                    border: '1px solid var(--clr-border)',
                    borderRadius: '8px', fontSize: '0.82rem',
                    color: 'var(--clr-muted)', cursor: 'pointer',
                    transition: 'all 0.2s', fontWeight: '500',
                  }}
                  onMouseEnter={e => { e.target.style.borderColor = '#ef4444'; e.target.style.color = '#ef4444'; e.target.style.background = 'rgba(239,68,68,0.08)'; }}
                  onMouseLeave={e => { e.target.style.borderColor = 'var(--clr-border)'; e.target.style.color = 'var(--clr-muted)'; e.target.style.background = 'transparent'; }}
                >🗑 Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListOfEmps;
