import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

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
  fontFamily: 'var(--font-body)',
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

function EditEmployee() {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm();

  // ✅ Get employee data passed via navigate state (from ListOfEmps)
  const { state } = useLocation();
  const navigate = useNavigate();

  // ✅ Pre-fill form with existing employee data
  useEffect(() => {
    if (state) {
      setValue("name", state.name);
      setValue("email", state.email);
      setValue("mobile", state.mobile);
      setValue("designation", state.designation);
      setValue("companyName", state.companyName);
    }
  }, [state, setValue]);

  // ✅ Submit handler: PUT to correct API endpoint with employee's _id
  const onSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:4000/emp-api/employees/${state._id}`, data);
      navigate("/list");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed. Please try again.");
    }
  };

  if (!state) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--clr-muted)' }}>
        <p>No employee data found. <a href="/list" style={{ color: 'var(--clr-accent)' }}>Go back to list →</a></p>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <button
            onClick={() => navigate("/list")}
            style={{
              background: 'transparent', border: 'none',
              color: 'var(--clr-muted)', cursor: 'pointer',
              fontSize: '0.88rem', padding: '0', marginBottom: '1rem',
              display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--clr-text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--clr-muted)'}
          >← Back to list</button>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem', fontWeight: '800',
            color: 'var(--clr-text)', marginBottom: '0.4rem',
          }}>Edit Employee</h1>
          <p style={{ color: 'var(--clr-muted)', fontSize: '0.95rem' }}>
            Update the details for <span style={{ color: 'var(--clr-accent)' }}>{state.name}</span>.
          </p>
        </div>

        {/* Card */}
        <div style={{
          background: 'var(--clr-surface)',
          border: '1px solid var(--clr-border)',
          borderRadius: '20px',
          padding: '2.5rem',
        }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldInput label="Full Name">
              <input
                type="text"
                placeholder="Employee name"
                {...register("name", { required: true })}
                className="field-input"
                style={{ ...inputStyle, borderColor: errors.name ? 'rgba(239,68,68,0.5)' : 'var(--clr-border)' }}
              />
            </FieldInput>

            <FieldInput label="Email Address">
              <input
                type="email"
                placeholder="Email address"
                {...register("email", { required: true })}
                className="field-input"
                style={{ ...inputStyle, borderColor: errors.email ? 'rgba(239,68,68,0.5)' : 'var(--clr-border)' }}
              />
            </FieldInput>

            <FieldInput label="Mobile Number">
              <input
                type="number"
                placeholder="Mobile number"
                {...register("mobile")}
                className="field-input"
                style={inputStyle}
              />
            </FieldInput>

            <FieldInput label="Designation">
              <input
                type="text"
                placeholder="Job title / designation"
                {...register("designation", { required: true })}
                className="field-input"
                style={{ ...inputStyle, borderColor: errors.designation ? 'rgba(239,68,68,0.5)' : 'var(--clr-border)' }}
              />
            </FieldInput>

            <FieldInput label="Company Name">
              <input
                type="text"
                placeholder="Company name"
                {...register("companyName", { required: true })}
                className="field-input"
                style={{ ...inputStyle, borderColor: errors.companyName ? 'rgba(239,68,68,0.5)' : 'var(--clr-border)', marginBottom: '1.8rem' }}
              />
            </FieldInput>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={() => navigate("/list")}
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
                disabled={isSubmitting}
                style={{
                  flex: '2',
                  background: isSubmitting ? 'var(--clr-surface2)' : 'var(--clr-accent)',
                  border: 'none',
                  borderRadius: '10px', padding: '14px',
                  color: isSubmitting ? 'var(--clr-muted)' : '#fff',
                  fontSize: '0.95rem',
                  fontWeight: '600', cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  fontFamily: 'var(--font-display)',
                  transition: 'all 0.2s',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => { if (!isSubmitting) e.target.style.background = 'var(--clr-accent2)'; }}
                onMouseLeave={e => { if (!isSubmitting) e.target.style.background = 'var(--clr-accent)'; }}
              >{isSubmitting ? 'Saving...' : '✓ Save Changes'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;
