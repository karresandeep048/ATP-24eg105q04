import Header from "./Header";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--clr-bg)' }}>
      <Header />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
