export const inp =
  "mt-2 w-full rounded-2xl border border-navy/30 bg-cream px-4 py-3 outline-none transition focus:border-red focus:ring-2 focus:ring-red/30";

export function Field({ label, error, className = "", children }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-red">{error}</span>}
    </label>
  );
}

const upd = (form, setForm, name) => (e) => setForm({ ...form, [name]: e.target.value });

export const Input = ({ label, name, form, setForm, type = "text", placeholder, error, className }) => (
  <Field label={label} error={error} className={className}>
    <input type={type} value={form[name]} placeholder={placeholder} onChange={upd(form, setForm, name)} className={inp} />
  </Field>
);

export const Select = ({ label, name, form, setForm, options, placeholder = "", className }) => (
  <Field label={label} className={className}>
    <select value={form[name]} onChange={upd(form, setForm, name)} className={inp}>
      <option value="">{placeholder}</option>
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  </Field>
);

export const Area = ({ label, name, form, setForm, placeholder, rows = 5, className }) => (
  <Field label={label} className={className}>
    <textarea rows={rows} value={form[name]} placeholder={placeholder} onChange={upd(form, setForm, name)} className={inp} />
  </Field>
);
