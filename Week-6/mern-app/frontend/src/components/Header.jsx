import { NavLink } from "react-router";

function Header() {
  return (
    <header style={{ background: 'var(--clr-surface)', borderBottom: '1px solid var(--clr-border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px', height: '36px',
              background: 'var(--clr-accent)',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: '800', fontSize: '16px', color: '#fff'
            }}>E</div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: '700', fontSize: '1.2rem',
              color: 'var(--clr-text)', letterSpacing: '-0.5px'
            }}></span>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {[
              { to: "", label: "Home" },
              { to: "create-emp", label: "Add Employee" },
              { to: "list", label: "All Employees" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === ""}
                style={({ isActive }) => ({
                  padding: '8px 18px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  background: isActive ? 'var(--clr-accent)' : 'transparent',
                  color: isActive ? '#fff' : 'var(--clr-muted)',
                  border: isActive ? '1px solid var(--clr-accent)' : '1px solid transparent',
                })}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
