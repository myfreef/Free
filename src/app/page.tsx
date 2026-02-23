import Link from "next/link";
import { notices } from "@/data/mock";
import { BANGLADESH_DISTRICTS, BLOOD_GROUPS } from "@/data/districts";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-12 text-white">
        <p className="mb-3 text-sm uppercase tracking-wide">Blood Donation Network</p>
        <h1 className="mb-3 text-4xl font-bold">Donate Blood, Save Lives</h1>
        <p className="mb-6 max-w-2xl">Find verified donors in seconds and encourage voluntary blood donation across Bangladesh.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/register" className="rounded-full bg-white px-5 py-2 font-semibold text-red-600">Become a Donor</Link>
          <Link href="/donors" className="rounded-full border border-white px-5 py-2 font-semibold">Search Donors</Link>
        </div>
      </section>

      <section className="card">
        <h2 className="mb-3 text-xl font-semibold">Notice Board</h2>
        <ul className="space-y-2 text-sm">
          {notices.map((notice) => (
            <li key={notice} className="rounded-lg bg-red-50 px-3 py-2 dark:bg-red-950/30">📢 {notice}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="mb-4 text-xl font-semibold">Quick Donor Search</h2>
        <form action="/donors" className="grid gap-3 md:grid-cols-4">
          <select name="bloodGroup" className="input">
            <option value="">Blood Group</option>
            {BLOOD_GROUPS.map((group) => <option key={group}>{group}</option>)}
          </select>
          <select name="district" className="input">
            <option value="">District</option>
            {BANGLADESH_DISTRICTS.map((district) => <option key={district}>{district}</option>)}
          </select>
          <input name="area" className="input" placeholder="Area / Address" />
          <button className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white">Search</button>
        </form>
      </section>
    </div>
  );
}
