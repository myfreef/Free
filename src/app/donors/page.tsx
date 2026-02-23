import { donors } from "@/data/mock";
import { BANGLADESH_DISTRICTS, BLOOD_GROUPS } from "@/data/districts";

export default function DonorsPage({ searchParams }: { searchParams: { bloodGroup?: string; district?: string; area?: string } }) {
  const filtered = donors.filter((donor) => {
    const byGroup = !searchParams.bloodGroup || donor.bloodGroup === searchParams.bloodGroup;
    const byDistrict = !searchParams.district || donor.district === searchParams.district;
    const byArea = !searchParams.area || donor.area.toLowerCase().includes(searchParams.area.toLowerCase());
    return byGroup && byDistrict && byArea;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Donor List</h1>
      <form className="card grid gap-3 md:grid-cols-4" action="/donors">
        <select name="bloodGroup" className="input" defaultValue={searchParams.bloodGroup || ""}>
          <option value="">Blood Group</option>
          {BLOOD_GROUPS.map((group) => <option key={group}>{group}</option>)}
        </select>
        <select name="district" className="input" defaultValue={searchParams.district || ""}>
          <option value="">District</option>
          {BANGLADESH_DISTRICTS.map((district) => <option key={district}>{district}</option>)}
        </select>
        <input name="area" className="input" placeholder="Area" defaultValue={searchParams.area || ""} />
        <button className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white">Apply Filters</button>
      </form>

      <div className="grid gap-4">
        {filtered.map((donor) => (
          <article key={donor.id} className="card flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">{donor.firstName} {donor.lastName} <span className="text-red-600">({donor.bloodGroup})</span></h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">{donor.district}, {donor.area}</p>
              <p className="text-sm">Status: <span className={donor.availability === "Available" ? "text-green-600" : "text-orange-500"}>{donor.availability}</span></p>
              <p className="text-sm">Flow count: {donor.flowCount}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={donor.hidePhone ? "#" : `tel:${donor.phone}`} className="rounded-lg border px-4 py-2">Call</a>
              <a href={donor.hidePhone ? "#" : `https://wa.me/${donor.phone.replace(/\D/g, "")}`} className="rounded-lg bg-green-600 px-4 py-2 text-white">WhatsApp</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
