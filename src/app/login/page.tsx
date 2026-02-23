export default function LoginPage() {
  return (
    <div className="mx-auto max-w-lg space-y-4">
      <h1 className="text-3xl font-bold">Login</h1>
      <form className="card space-y-3">
        <input className="input" type="email" placeholder="Email" required />
        <button className="w-full rounded-lg bg-red-600 px-4 py-2 font-semibold text-white">Send OTP / Login</button>
      </form>
    </div>
  );
}
