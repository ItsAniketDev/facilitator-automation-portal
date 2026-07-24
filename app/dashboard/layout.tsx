export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-2xl font-bold">
          Facilitator
        </h2>

        <nav className="mt-8 space-y-4">
          <p>🏠 Dashboard</p>
          <p>📤 Upload CSV</p>
          <p>📄 Reports</p>
          <p>📧 Email</p>
          <p>📱 WhatsApp</p>
          <p>⚙ Settings</p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-slate-950 text-white p-8">
        {children}
      </main>
    </div>
  );
}