"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/data/content';
import { Menu, X, Terminal, Cpu, Layout, ChevronRight, Zap } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on window resize if it was left open
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSectionIcon = (id: string) => {
    if (id === 'web-development') return <Layout size={16} className="text-cyan-400" />;
    if (id === 'ai-ml') return <Cpu size={16} className="text-fuchsia-400" />;
    return <Terminal size={16} />;
  };

  return (
    <>
      {/* Dynamic Mobile Trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-linear-to-tr from-blue-600 to-fuchsia-600 rounded-2xl text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-90 transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Futuristic Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Main Glass Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 glass-panel border-r border-white/10 p-6 
        transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:sticky lg:h-screen overflow-y-auto no-scrollbar
      `}>
        
        {/* Branding with Animation */}
        <div className="mb-10 group relative">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 group-hover:border-blue-500/50 transition-colors">
              <Terminal size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h1 className="text-white font-black text-lg tracking-tighter leading-none">THE TECH LAB</h1>
              <p className="text-[10px] text-zinc-500 font-mono mt-3 uppercase tracking-widest">Student // Build v2</p>
            </div>
          </Link>
        </div>

        {/* Navigation Layers */}
        <nav className="space-y-8">
          {navigation.map((section) => {
            const isWeb = section.id === 'web-development';
            
            return (
              <div key={section.id} className="space-y-4">
                <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white/5 border border-white/5">
                  {getSectionIcon(section.id)}
                  <h3 className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isWeb ? 'text-cyan-400' : 'text-fuchsia-400'}`}>
                    {section.title}
                  </h3>
                </div>
                
                {section.subsections.map((sub) => (
                  <div key={sub.id} className="ml-2">
                    <div className="flex items-center gap-2 mb-2 px-2 text-zinc-500">
                      <Zap size={10} className={isWeb ? 'text-cyan-500/50' : 'text-fuchsia-500/50'} />
                      <span className="text-[11px] font-semibold tracking-wide uppercase">{sub.title}</span>
                    </div>
                    
                    <ul className={`space-y-1 ml-3 border-l ${isWeb ? 'border-cyan-500/20' : 'border-fuchsia-500/20'} pl-3`}>
                      {sub.topics.map((topic) => {
                        const href = `/learn/${section.id}/${sub.id}/${topic.id}`;
                        const isActive = pathname === href;
                        
                        return (
                          <li key={topic.id}>
                            <Link 
                              href={href}
                              onClick={() => setIsOpen(false)}
                              className={`nav-item-btn ${isActive ? (isWeb ? 'active-web' : 'active-ml') : 'inactive-link'}`}
                            >
                              <span className="relative z-10">{topic.label}</span>
                              {isActive && (
                                <span className={`absolute inset-0 rounded-lg blur-sm opacity-50 ${isWeb ? 'bg-cyan-500/30' : 'bg-fuchsia-500/30'}`} />
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            );
          })}
        </nav>

        {/* User Context Footer (Optional) */}
        <div className="mt-12 p-4 rounded-2xl bg-white/5 border border-white/5">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-xs font-bold">BT</div>
              <div className="text-[10px] font-mono text-zinc-400">
                <p className="text-white font-bold leading-none">B.Tech Student</p>
                <p>Status: Interning...</p>
              </div>
           </div>
        </div>
      </aside>
    </>
  );
}