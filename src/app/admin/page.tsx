export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card"><p className="text-sm">Total Donors</p><p className="text-3xl font-bold text-red-600">1,248</p></div>
        <div className="card"><p className="text-sm">Active Donors</p><p className="text-3xl font-bold text-green-600">931</p></div>
        <div className="card"><p className="text-sm">Urgent Requests</p><p className="text-3xl font-bold text-orange-500">17</p></div>
      </div>
      <section className="card space-y-2 text-sm">
        <h2 className="text-xl font-semibold">Role & Access Rules</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Superadmin can control everything.</li>
          <li>Superadmin/Admin can add, edit, delete users and change roles.</li>
          <li>Admin cannot control superadmin or other admin accounts.</li>
          <li>Superadmin/Admin/Manager can publish notices.</li>
          <li>Superadmin/Admin can review user reports and block/unblock donors.</li>
        </ul>
      </section>
      <section className="card space-y-2 text-sm">
        <h2 className="text-xl font-semibold">Blood Group Stats</h2>
        <p>O+: 35% | A+: 25% | B+: 22% | AB+: 10% | Rare groups: 8%</p>
      </section>
    </div>
  );
}
