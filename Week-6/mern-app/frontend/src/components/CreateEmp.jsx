import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";

const inputStyle = {
  width: '100%',
  background: 'var(--clr-surface2)',
  border: '1px solid var(--clr-border)',
  borderRadius: '10px',
  padding: '14px 16px',
  fontSize: '0.95rem',
  color: 'var(--clr-text)',
  marginBottom: '1rem',
  transition: 'all 0.2s',
  // fontFamily: 'var(--font-body)',
};

function FieldInput({ label, children }) {
  return (
    <div>
      <label style={{
        display: 'block',
        fontSize: '0.82rem',
        fontWeight: '500',
        color: 'var(--clr-muted)',
        marginBottom: '6px',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
      }}>{label}</label>
      {children}
    </div>
  );
}

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      let res = await fetch("http://localhost:4000/emp-api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      });
      if (res.status === 201) {
        navigate("/list");
      } else {
        let errorRes = await res.json();
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-enter">
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem', fontWeight: '800',
            color: 'var(--clr-text)', marginBottom: '0.4rem',
          }}>Add  Employee</h1>
          
        </div>

        {/* Card */}
        <div style={{
          background: 'var(--clr-surface)',
          border: '1px solid var(--clr-border)',
          borderRadius: '20px',
          padding: '2.5rem',
        }}>
          {error && (
            <div style={{
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: '10px', padding: '14px 16px',
              color: '#f87171', fontSize: '0.9rem', marginBottom: '1.5rem',
            }}>⚠ {error}</div>
          )}

          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--clr-muted)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
              <p>Creating employee...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <FieldInput label="Full Name">
                <input
                  type="text"

                  {...register("name", { required: true })}
                  className="field-input"
                  style={{ ...inputStyle, borderColor: errors.name ? 'rgba(239,68,68,0.5)' : 'var(--clr-border)' }}
                />
              </FieldInput>

              <FieldInput label="Email Address">
                <input
                  type="email"
                 
                  {...register("email", { required: true })}
                  className="field-input"
                  style={{ ...inputStyle, borderColor: errors.email ? 'rgba(239,68,68,0.5)' : 'var(--clr-border)' }}
                />
              </FieldInput>

              <FieldInput label="Mobile Number">
                <input
                  type="number"
                  
                  {...register("mobile")}
                  className="field-input"
                  style={inputStyle}
                />
              </FieldInput>

              <FieldInput label="Designation">
                <input
                  type="text"
                
                  {...register("designation", { required: true })}
                  className="field-input"
                  style={{ ...inputStyle, borderColor: errors.designation ? 'rgba(239,68,68,0.5)' : 'var(--clr-border)' }}
                />
              </FieldInput>

              <FieldInput label="Company Name">
                <input
                  type="text"
                  
                  {...register("companyName", { required: true })}
                  className="field-input"
                  style={{ ...inputStyle, borderColor: errors.companyName ? 'rgba(239,68,68,0.5)' : 'var(--clr-border)', marginBottom: '1.8rem' }}
                />
              </FieldInput>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  style={{
                    flex: '1',
                    background: 'transparent',
                    border: '1px solid var(--clr-border)',
                    borderRadius: '10px', padding: '14px',
                    color: 'var(--clr-muted)', fontSize: '0.95rem',
                    fontWeight: '500', cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.borderColor = 'var(--clr-muted)'}
                  onMouseLeave={e => e.target.style.borderColor = 'var(--clr-border)'}
                >Cancel</button>

                <button
                  type="submit"
                  style={{
                    flex: '2',
                   
                    border: 'none',
                    borderRadius: '10px', padding: '14px',
                    color: '#fff', fontSize: '0.95rem',
                    fontWeight: '600', cursor: 'pointer',
                    fontFamily: 'var(--font-display)',
                    transition: 'all 0.2s',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={e => e.target.style.background = 'var(--clr-accent2)'}
                  onMouseLeave={e => e.target.style.background = 'var(--clr-accent)'}
                >Add Employee</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateEmp;
