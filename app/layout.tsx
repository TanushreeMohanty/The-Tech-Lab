import "./globals.css";
import Sidebar from "@/components/Sidebar"; // This imports your new colorful component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#020617] text-zinc-400 flex min-h-screen selection:bg-cyan-500/30">
        {/* We replaced the old <aside> code with your new component */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-12 max-w-6xl overflow-y-auto pt-24 lg:pt-12">
          <div className="animate-in fade-in duration-1000">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}