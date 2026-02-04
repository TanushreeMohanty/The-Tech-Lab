import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Added h-screen and overflow-hidden to the body to let the main area scroll independently */}
      <body className="bg-[#020617] text-zinc-400 flex h-screen overflow-hidden selection:bg-cyan-500/30">
        
        <Sidebar />

        {/* 🚀 FIXED: Removed 'max-w-6xl' to allow content to spread to full screen width */}
        <main className="flex-1 min-w-0 overflow-y-auto pt-24 lg:pt-0">
          <div className="animate-in fade-in duration-1000 w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}