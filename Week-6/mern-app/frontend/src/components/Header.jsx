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
              
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: '800', fontSize: '16px', color: '#fff'
            }}>E</div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: '700', fontSize: '1.2rem',
              
            }}></span>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {[
              { to: "", label: "Home" },
              { to: "create-emp", label: "Add Employee" },
              { to: "list", label: "List OF Employees" },
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
