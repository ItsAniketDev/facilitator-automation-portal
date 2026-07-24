import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
          <h1 className="text-5xl font-bold">
            Facilitator Automation Portal
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Upload participant reports, automate processing,
            generate personalized emails, and manage your
            learning community from one dashboard.
          </p>

          <button className="mt-10 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
            Get Started
          </button>
          <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">

  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
    <h3 className="text-xl font-semibold">📤 Upload CSV</h3>
    <p className="mt-3 text-slate-400">
      Upload participant progress reports in CSV format.
    </p>
  </div>

  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
    <h3 className="text-xl font-semibold">⚡ Automation</h3>
    <p className="mt-3 text-slate-400">
      Automatically clean data, generate reports and prepare emails.
    </p>
  </div>

  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
    <h3 className="text-xl font-semibold">📊 Analytics</h3>
    <p className="mt-3 text-slate-400">
      View participant statistics and track report history.
    </p>
  </div>

</div>
        </section>
      </main>
    </>
  );
}