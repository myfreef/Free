import { BANGLADESH_DISTRICTS, BLOOD_GROUPS } from "@/data/districts";

export default function RegisterPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">Donor Registration</h1>
      <p className="text-sm text-slate-600 dark:text-slate-300">Only donors can register. Authentication supports email OTP-ready flow via Supabase.</p>
      <form className="card grid gap-3 md:grid-cols-2">
        <input className="input" placeholder="First Name" required />
        <input className="input" placeholder="Last Name" required />
        <select className="input" required>
          <option value="">Blood Group</option>
          {BLOOD_GROUPS.map((group) => <option key={group}>{group}</option>)}
        </select>
        <select className="input" required>
          <option value="">Gender</option>
          <option>Male</option><option>Female</option><option>Other</option>
        </select>
        <label className="text-sm">Birthdate<input className="input mt-1" type="date" required /></label>
        <input className="input" placeholder="Phone Number" type="tel" required />
        <input className="input" placeholder="Email" type="email" required />
        <input className="input" placeholder="Confirm Email" type="email" required />
        <select className="input" required>
          <option value="">District</option>
          {BANGLADESH_DISTRICTS.map((district) => <option key={district}>{district}</option>)}
        </select>
        <input className="input" placeholder="Area / Address" required />
        <label className="text-sm">Last Donation Date<input className="input mt-1" type="date" required /></label>
        <label className="mt-7 flex items-center gap-2 text-sm"><input type="checkbox" /> Hide phone number for security</label>
        <button className="md:col-span-2 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white">Register as Donor</button>
      </form>
    </div>
  );
}
