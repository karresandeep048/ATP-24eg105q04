import { useLocation, useNavigate } from "react-router";

function Employee() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--clr-muted)' }}>
        <p>No employee data found. <span
          style={{ color: 'var(--clr-accent)', cursor: 'pointer' }}
          onClick={() => navigate("/list")}
        >← Back to list</span></p>
      </div>
    );
  }

  const avatarColors = ['#f97316','#3b82f6','#10b981','#8b5cf6','#ec4899'];
  const color = avatarColors[(state.name?.charCodeAt(0) || 0) % avatarColors.length];
  const initials = state.name?.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) || "?";

  const fields = [
    { label: "Email", value: state.email,  },
    { label: "Mobile", value: state.mobile || "—", },
    { label: "Designation", value: state.designation,  },
    { label: "Company", value: state.companyName,},
  ];

  return (
    <div className="page-enter">
      <div style={{ maxWidth: '520px', margin: '0 auto' }}>
        {/* Back */}
        <button
          onClick={() => navigate("/list")}
          style={{
            background: 'transparent', border: 'none',
            color: 'var(--clr-muted)', cursor: 'pointer',
            fontSize: '0.88rem', padding: '0', marginBottom: '1.5rem',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--clr-text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--clr-muted)'}
        >← Back to list</button>

        {/* Profile card */}
        <div style={{
          background: 'var(--clr-surface)',
          border: '1px solid var(--clr-border)',
          borderRadius: '20px',
          overflow: 'hidden',
        }}>
          {/* Top banner */}
          <div style={{
            height: '100px',
            background: `linear-gradient(135deg, ${color}33, ${color}11)`,
            borderBottom: '1px solid var(--clr-border)',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              bottom: '-36px', left: '2rem',
              width: '72px', height: '72px',
              borderRadius: '16px',
              background: color,
              border: '3px solid var(--clr-surface)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: '800', fontSize: '1.5rem', color: '#fff',
            }}>{initials}</div>
          </div>

          {/* Content */}
          <div style={{ padding: '3rem 2rem 2rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: '800', fontSize: '1.6rem',
              color: 'var(--clr-text)', marginBottom: '0.3rem',
            }}>{state.name}</h2>
            <p style={{
              color: 'var(--clr-accent)', fontWeight: '500',
              fontSize: '0.9rem', marginBottom: '1.8rem',
            }}>{state.designation} · {state.companyName}</p>

            {/* Fields */}
            <div style={{
              background: 'var(--clr-surface2)',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '1.5rem',
            }}>
              {fields.map(({ label, value, icon }, i) => (
                <div
                  key={label}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '14px 18px',
                    borderBottom: i < fields.length - 1 ? '1px solid var(--clr-border)' : 'none',
                  }}
                >
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--clr-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>{label}</div>
                    <div style={{ color: 'var(--clr-text)', fontSize: '0.92rem', fontWeight: '500' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => navigate("/edit-emp", { state })}
                style={{
                  flex: '1',
                  background: 'var(--clr-accent)', color: '#fff',
                  border: 'none', borderRadius: '10px',
                  padding: '12px', fontSize: '0.9rem',
                  fontWeight: '600', cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'var(--font-display)',
                }}
                onMouseEnter={e => e.target.style.background = 'var(--clr-accent2)'}
                onMouseLeave={e => e.target.style.background = 'var(--clr-accent)'}
              >✏️ Edit</button>

              <button
                onClick={() => navigate("/list")}
                style={{
                  flex: '1',
                  background: 'transparent', color: 'var(--clr-muted)',
                  border: '1px solid var(--clr-border)', borderRadius: '10px',
                  padding: '12px', fontSize: '0.9rem',
                  fontWeight: '500', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.target.style.borderColor = 'var(--clr-muted)'; e.target.style.color = 'var(--clr-text)'; }}
                onMouseLeave={e => { e.target.style.borderColor = 'var(--clr-border)'; e.target.style.color = 'var(--clr-muted)'; }}
              >← Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
