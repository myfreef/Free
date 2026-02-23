"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [mutualFlow, setMutualFlow] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [reported, setReported] = useState(false);
  const [hidePhone, setHidePhone] = useState(true);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <section className="card space-y-3">
        <h2 className="text-xl font-semibold">Flow System</h2>
        <p>Flow count: <strong>240</strong> (visible to all users)</p>
        <p className="text-sm text-slate-600 dark:text-slate-300">Flow list is private and hidden from other users.</p>
        <div className="flex gap-2">
          <button onClick={() => setMutualFlow((v) => !v)} className="rounded-lg bg-red-600 px-4 py-2 text-white">{mutualFlow ? "Unflow" : "Flow back"}</button>
          <button disabled={!mutualFlow} className="rounded-lg border px-4 py-2 disabled:opacity-40">Send Message (mutual flow only)</button>
        </div>
      </section>

      <section className="card space-y-3">
        <h2 className="text-xl font-semibold">Safety Controls</h2>
        <label className="flex items-center gap-2"><input type="checkbox" checked={hidePhone} onChange={(e) => setHidePhone(e.target.checked)} /> Hide phone number</label>
        <div className="flex gap-2">
          <button onClick={() => setBlocked((v) => !v)} className="rounded-lg border px-4 py-2">{blocked ? "Unblock User" : "Block User"}</button>
          <button onClick={() => setReported(true)} className="rounded-lg bg-orange-500 px-4 py-2 text-white">Report User</button>
        </div>
        {reported && <p className="text-sm text-orange-600">Report sent. Visible to superadmin/admin.</p>}
      </section>
    </div>
  );
}
