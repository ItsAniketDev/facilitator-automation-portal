import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-white">
          Facilitator Automation
        </h1>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-slate-800">
            Features
          </Button>

          <Button variant="ghost" className="text-white hover:bg-slate-800">
            Pricing
          </Button>

          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
}